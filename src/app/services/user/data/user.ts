import { dbQuery } from "@app/lib/db";
import { UserSignin } from "@app/types/types";

export const signUp = async (data: UserSignin): Promise<UserSignin> => {
  try {
    const resp = (await dbQuery("INSERT INTO `user` (`email`, `password`) VALUES (?, ?)", [
      data.email,
      data.password,
    ])) as UserSignin;

    return resp;
  } catch (error) {
    throw error;
  }
};

export const getUserWithEmail = async (data: UserSignin): Promise<UserSignin> => {
  try {
    const resp = (await dbQuery("SELECT * FROM user WHERE email = ?", [
      data.email,
    ])) as UserSignin[];

    return resp[0] as unknown as UserSignin;
  } catch (error) {
    throw error;
  }
};

export const createUserProfil = async (id: string) => {
  try {
    const resp = await dbQuery("SELECT id, name, email FROM users WHERE id = ?", [id]);
    return resp;
  } catch (error) {
    throw error;
  }
};
