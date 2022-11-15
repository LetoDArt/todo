import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { errorToast, successToast } from '../../../utils/utils';
import { changeProfile, getUserProfile, LoginUserRequest } from './user.requests';

import { AUTHORIZATION_KEY } from '../../../consts/storage.consts';
import { UserWithoutPassword } from '../../../types/user.types';


interface CountState {
  authorized: boolean,
  user: UserWithoutPassword,
  isLoading: boolean,
  error: string,
}

const initialState: CountState = {
  authorized: JSON.parse(localStorage.getItem(AUTHORIZATION_KEY) ?? 'false'),
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
        successToast('You are in!');
        state.isLoading = false;
        state.authorized = true;
        state.error = '';
        localStorage.setItem(AUTHORIZATION_KEY, JSON.stringify(state.authorized));
      })
      .addCase(LoginUserRequest.rejected, (state, action) => {
        errorToast(action.payload ?? 'unknown');
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

    builder
      .addCase(changeProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changeProfile.fulfilled, (state, action) => {
        successToast('Data have been changed')
        state.isLoading = false;
        state.user = action.payload;
        state.error = '';
      })
      .addCase(changeProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? '';
        errorToast(state.error)

      })
  },
});

export default userSlice.reducer;
