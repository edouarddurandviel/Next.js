'use server';
import { errorMessages } from 'edouard/schemas/errorMessages';
import { userSchemas } from 'edouard/schemas/user';
import { getUserWithEmail } from 'edouard/services/user';
import { UserSignin } from 'edouard/types/types';
import * as argon2 from 'argon2';
import * as jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export default async function signInAction(formData: FormData) {
  const user = await userSchemas.validate(
    {
      email: formData.get('email'),
      password: formData.get('password'),
    },
    { abortEarly: false },
  );

  const data: UserSignin = {
    email: user.value.email,
    password: user.value.password,
  };

  if (user && user.error) {
    const error = await errorMessages(user.error.details);
    const nextState = {
      error: error,
      user: data,
    };
    return nextState;
  } else {
    const fetchedUser = await getUserWithEmail(data);

    console.log(fetchedUser)
    console.log("user"+user)

    if (fetchedUser) {
      if (await argon2.verify(fetchedUser.password, user.value.password)) {
        const payload = {
          userId: user.value.id,
        };

        const secret = user.value.password;
        const token = jwt.sign(payload, secret, { expiresIn: '1h' });

        const cookieStore = await cookies();
        cookieStore.set('jwt', token, {
          httpOnly: true,
          secure: true,
          maxAge: 60 * 60 * 24 * 7, // One week
          path: '/',
        });

        const data: UserSignin = {
          email: user.value.email,
          password: user.value.password,
        };

        return { user: data };
      } else {
        return {
          error: [{ key: 'password', message: 'Wrong password' }],
          user: data,
        };
      }
    } else if (fetchedUser && !Array.isArray(fetchedUser)) {
      return {
        error: [{ key: 'Credentials', message: 'Wrong email or password' }],
        user: data,
      };
    }
  }

  return {
    error: [{ key: 'Credentials', message: 'Wrong email or password' }],
    user: data,
  };
}
