"use server";
import * as argon2 from "argon2";
import { errorMessages } from "@app/schemas/errorMessages";
import type { UserAccount } from "@app/types/types";
import { signUp } from "@app/services/user/data/user";
import { userSchemas } from "@app/schemas/user";
import { redirect } from "next/navigation";

export default async function signUpAction(
  previousState: UserAccount | undefined,
  formData: FormData,
): Promise<UserAccount | undefined> {
  const user = await userSchemas.validate(
    {
      email: formData.get("email"),
      password: formData.get("password"),
    },
    { abortEarly: false },
  );

  if (user && user.error) {
    const errors = await errorMessages(user.error.details);
    const nextState = { error: errors, data: previousState!.data };

    return nextState;
  }

  if (user && !user.error) {
    const passwordHash = await argon2.hash(user.value.password);
    const dataHash = {
      email: user.value.email,
      password: passwordHash,
    };
    (await signUp(dataHash)) as unknown as UserAccount;

    redirect("/blog");
  }
}
