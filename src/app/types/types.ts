import { NextRequest, NextResponse } from "next/server";

export type Middleware = (req: NextRequest) => NextResponse | void | Promise<NextResponse | void>;
export type Routes = {
  url: string;
  label: string;
};

// account
//////////////////////
export type Account = { id: number; email: string; password: string }[];
export type AccountAction = { err: boolean; response: Account | UserErrors[] } | undefined;

// company
//////////////////////
export type Company = {
  id: number;
  name: string;
  ca: number;
  country: string;
  currency: string;
};

// account and profile
//////////////////////
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
  data: UserSignin;
  error: UserErrors[];
};

export type User = {
  id: number;
  user_id: string;
  firstName: string;
  lastName: string;
};

export type UserProfile = {
  id: number;
  user_id: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type Analitics = {
  task: string;
  description: string;
  id: number;
};

export type ArticleShort = {
  id: number;
  title: string;
  slug: string;
  short: string;
};

export type Article = {
  id: number;
  title: string;
  slug: string;
  short: string;
  content: string;
};

export type QueryErrors = {
  key: number;
  message: string;
};
