import { createSlice } from '@reduxjs/toolkit';
import * as thunk from './thunks';
import type { UserAccount } from './interfaces';
import { resetAppAction } from './actions';

const initialState: UserAccount = {
  userLogin: {
    user: {
      email: '',
      password: '',
    },
    error: [
      {
        message: '',
        key: '',
      },
    ],
  },
  userLogout: {
    redirect: null,
  },
  loading: false,
};

export const userSlices = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetLogin: (state) => {
      state.userLogin = {
        user: {
          email: '',
          password: '',
        },
        error: [
          {
            message: '',
            key: '',
          },
        ],
      };
    },
    resetLogout: (state) => {
      state.userLogout = {
        redirect: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(thunk.logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(thunk.logout.fulfilled, (state, action) => {
        state.userLogout = action.payload;
        state.loading = false;
      })
      .addCase(thunk.logout.rejected, (state) => {
        state.loading = false;
      })

      .addCase(thunk.signIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(thunk.signIn.fulfilled, (state, action) => {
        state.userLogin = action.payload;
        state.loading = false;
      })
      .addCase(thunk.signIn.rejected, (state) => {
        state.loading = false;
      })

      .addCase(resetAppAction, () => initialState);
  },
});

export const { resetLogin, resetLogout } = userSlices.actions;
export default userSlices.reducer;
