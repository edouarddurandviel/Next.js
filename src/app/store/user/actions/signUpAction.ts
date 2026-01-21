"use server";
import { errorMessages } from "@app/schemas/errorMessages";
import { schema } from "@app/schemas/account";
import type { UserAccount } from "@app/types/types";
import { signUp } from "@app/services/user/data/user";
import * as argon2 from "argon2";

export default async function signUpAction(
  previousState: UserAccount | undefined,
  formData: FormData,
): Promise<UserAccount | undefined> {
  try {
    const user = await schema.validate(
      {
        email: formData.get("email"),
        password: formData.get("password"),
      },
      { abortEarly: false },
    );

    if (user && user.error) {
      const error = await errorMessages(user.error.details);

      const nextState = { error: error, data: previousState!.data };
      return nextState;
    }

    let register;
    if (user && !user.error) {
      const passwordHash = await argon2.hash(user.value.password);
      const dataHash = {
        email: user.value.email,
        password: passwordHash,
      };
      register = (await signUp(dataHash)) as unknown as UserAccount;
    }

    // mutation
    if (register) {
      return (previousState = register);
    }
  } catch (e) {
    console.log(e);
  }
}
