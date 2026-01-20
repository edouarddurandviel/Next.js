import { fetchErrors } from "@app/lib/fetchErrors";
import { Analitics, UserSignin } from "@app/types/types";

export async function signIn({ user }: { user: UserSignin },): Promise<UserSignin[] | string> {
  try {
    const result = await fetch("api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());

    return result;
  } catch (e: unknown) {
    throw fetchErrors(e);
  }
}

export async function fetchUserWithEmail(id: string): Promise<Analitics> {
  try {
    const result = await fetch(`/api/analytics/${id}`, {
      method: "GET",
    }).then((res) => res.json());
    return result;
  } catch (e: unknown) {
    throw fetchErrors(e);
  }
}

export async function createUserProfil(url: string) {
  try {
    const result = await fetch(url, {
      method: "POST",
    });
    return result;
  } catch (e: unknown) {
    throw fetchErrors(e);
  }
}
