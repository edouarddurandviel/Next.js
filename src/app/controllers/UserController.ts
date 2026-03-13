"use server";
import * as argon2 from "argon2";
import type { UserAccount, UserSignin } from "@app/types/types";
import { getUserWithEmail } from "@app/lib/queries/user";
import * as jsonwebtoken from "jsonwebtoken";
import { cookies } from "next/headers";

export async function signIn(user: UserSignin): Promise<UserAccount | undefined> {
  const fetchedUser = await getUserWithEmail(user);

  if (fetchedUser) {
    if (await argon2.verify(fetchedUser.password, user.password)) {
      const passwordHash = await argon2.hash(user.password);
      const dataHash = {
        email: user.email,
        password: passwordHash,
      };

      const secret = "some-secret-qfdf6546qsdf5dfsqdf54";

      const cookie = {
        token: jsonwebtoken.sign(dataHash, secret, { expiresIn: "1h" }),
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      };

      return {
        cookieSet: cookie,
        user: user,
        message: "Logged in !" 
      }


   
    } else {
      return {
        error: [{message: "Wrong email or password" }],
      };
    }
  } else {
    return {
      error: [{message: "Wrong email or password" }],
    };
  }
}

export async function logOutAction() {
  (await cookies()).delete("jwt");
}
