import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getUserProfile, LoginUserRequest } from './user.requests';

import { AUTHORIZATION_KEY } from '../../../consts/storage.consts';
import { UserWithoutPassword } from '../../../types/user.types';


interface CountState {
  authorized: boolean,
  user: UserWithoutPassword,
  isLoading: boolean,
  error: string,
}

const initialState: CountState = {
  authorized: false,
  user: {
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    gender: '',
    birthday: '',
    phone: '',
  },
  isLoading: false,
  error: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthorization(state, action: PayloadAction<boolean>) {
      state.authorized = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginUserRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(LoginUserRequest.fulfilled, (state) => {
        state.isLoading = false;
        state.authorized = true;
        state.error = '';
        localStorage.setItem(AUTHORIZATION_KEY, JSON.stringify(state.authorized))
      })
      .addCase(LoginUserRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.authorized = false;
        state.error = action.payload ?? '';
      })

    builder
      .addCase(getUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = '';
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.authorized = false;
        state.error = action.payload ?? '';
      })
  },
});

export default userSlice.reducer;
