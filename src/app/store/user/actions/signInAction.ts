"use server";
import { errorMessages } from "@app/schemas/errorMessages";
import { userSchemas } from "@app/schemas/user";
import { getUserWithEmail } from "@app/services/user/data/user";
import { UserSignin } from "@app/types/types";
import * as argon2 from "argon2";
import * as jsonwebtoken from "jsonwebtoken";
import { cookies } from "next/headers";

export default async function signInAction(formData: FormData) {
  const user = await userSchemas.validate(
    {
      email: formData.get("email"),
      password: formData.get("password"),
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

    if (fetchedUser) {
      if (await argon2.verify(fetchedUser.password, user.value.password)) {
        const payload = {
          userId: user.value.id,
          userEmail: user.value.email,
        };

        const secret = "some-secret-qfdf6546qsdf5dfsqdf54";
        const token = jsonwebtoken.sign(payload, secret, { expiresIn: "1h" });
        const maxAge = 60 * 60 * 24 * 7;
        const path = "/";

        const cookieStore = await cookies();
        cookieStore.set("jwt", token, {
          httpOnly: true,
          secure: true,
          maxAge: maxAge, // One week
          path: path,
        });

        cookieStore.set("user", JSON.stringify(user.value.email), {
          httpOnly: false,
          secure: true,
          maxAge: maxAge, // One week
          path: path,
        });

        return { user: payload };
      } else {
        return {
          error: [{ key: "password", message: "Wrong password" }],
          user: data,
        };
      }
    } else if (fetchedUser && !Array.isArray(fetchedUser)) {
      return {
        error: [{ key: "Credentials", message: "Wrong email or password" }],
        user: data,
      };
    }
  }

  return {
    error: [{ key: "Credentials", message: "Wrong email or password" }],
    user: data,
  };
}
