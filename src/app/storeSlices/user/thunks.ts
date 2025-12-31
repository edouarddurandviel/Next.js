import { createAsyncThunk } from '@reduxjs/toolkit';
import { logOutAction, signInAction } from './actions';

export const logout = createAsyncThunk('logout', async () => {
  const logout = await logOutAction();
  return logout;
});

export const signIn = createAsyncThunk('login', async (formData: FormData) => {
  const login = await signInAction(formData);
  return login;
});
