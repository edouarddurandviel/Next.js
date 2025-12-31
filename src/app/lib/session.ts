import { NextApiRequest } from 'next';

export const encrypt = async (sessionData: any): Promise<string> => {
  if (sessionData) {
    const encryptedSessionData = '546564654646qdsf654654fqsdf4654';
    return encryptedSessionData;
  } else {
    throw new Error('Wrong email or password');
  }
};

export const decrypt = async (
  cookie: string | undefined,
): Promise<{ userId: string } | undefined> => {
  if (cookie) {
    const userId = 'userId-565654654';
    return { userId: userId };
  }
};

export const getSession = async (req: NextApiRequest): Promise<{ user: { role: string } }> => {
  // fake data from session token =>
  const session = { user: { role: 'admin' } };

  return session;
};
