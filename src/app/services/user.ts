import { dbQuery } from 'edouard/lib/db';
import { UserSignin } from 'edouard/types/types';

export const signUp = async (data: UserSignin): Promise<UserSignin> => {
  try {
    const response = (await dbQuery('INSERT INTO `user` (`email`, `password`) VALUES (?, ?)', [
      data.email,
      data.password,
    ])) as UserSignin;

    return response;
  } catch (error: any) {
    console.log(error)
    return error;
  }
};

export const getUserWithEmail = async (data: UserSignin): Promise<UserSignin> => {
  try {
    const response = (await dbQuery('SELECT * FROM user WHERE email = ?', [
      data.email,
    ])) as UserSignin;

    return response;
  } catch (error) {
    throw error;
  }
};

export const createUserProfil = async (id: number) => {
  try {
    const response = await dbQuery('SELECT id, name, email FROM users WHERE id = ?', [id]);
    return response;
  } catch (error) {
    throw error;
  }
};
