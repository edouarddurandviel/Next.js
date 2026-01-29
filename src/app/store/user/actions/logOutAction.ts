"use server";
import { cookies } from "next/headers";

export default async function logOutAction() {
  (await cookies()).delete("jwt");
  (await cookies()).delete("user");
}
