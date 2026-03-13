import { fetchErrors } from "@app/lib/fetchErrors";
import { Analitics, UserSignIn, UserSignin } from "@app/types/types";

export async function signIn(key: string, { arg }: { arg: UserSignin }): Promise<UserSignIn> {
  try {
    const result = await fetch(key, {
      cache: 'no-store',
      credentials: 'include',
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(arg),
    }).then((res) => res.json());

    console.log(result)
    return result;
  } catch (e: unknown) {
    console.log(e)
    throw fetchErrors(e);
  }
}

export async function signOut(key: string): Promise<UserSignIn> {
  try {
    const result = await fetch(key, {
      cache: 'no-store',
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    return result;
  } catch (e: unknown) {
    throw fetchErrors(e);
  }
}

export async function fetchUserWithEmail(key: string): Promise<Analitics> {
  try {
    const result = await fetch(key, {
      cache: 'no-store',
      credentials: 'include',
      method: "GET",
    }).then((res) => res.json());
    return result;
  } catch (e: unknown) {
    throw fetchErrors(e);
  }
}

export async function createUserProfil(key: string) {
  try {
    const result = await fetch(key, {
      cache: 'no-store',
      credentials: 'include',
      method: "POST",
    });
    return result;
  } catch (e: unknown) {
    throw fetchErrors(e);
  }
}
