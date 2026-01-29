export type User = {
  id: string;
  email: string;
  password: string;
};

///////////////
export type UserErrors = {
  message?: string;
  key?: string;
};

export type UserSignin = {
  email: string;
  password: string;
  id?: number;
};

export type UserAccount = {
  userLogin: {
    user: UserSignin | {userId: string, email: string;};
    error?: UserErrors[];
  };
  loading: boolean;
  userLogout: { redirect: boolean | null } | void;
};
////////////////////

export interface UserState {
  user: User | null;
  selectedUser: string | null;
  loading: boolean;
  error: string | null;
}

export interface ResponseState {
  user: {
    user: User;
    loading: boolean;
    error: string | null;
  };
}
