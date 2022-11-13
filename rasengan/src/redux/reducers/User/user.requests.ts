import { createAsyncThunk } from '@reduxjs/toolkit';

import { LoginUser, UserWithoutPassword } from '../../../types/user.types';
import { requestToLogin, requestUserProfile } from '../../../axios/requests/user/user';


export const LoginUserRequest = createAsyncThunk<void, LoginUser, { rejectValue: string }>(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      return await requestToLogin(data);
    } catch (e: any) {
      return rejectWithValue(e?.response?.data.message ?? '')
    }
  }
)

export const getUserProfile = createAsyncThunk<UserWithoutPassword, void, { rejectValue: string }>(
  'user/profile',
  async (_, { rejectWithValue }) => {
    try {
      return (await requestUserProfile()) as UserWithoutPassword;
    } catch (e: any) {
      return rejectWithValue(e?.response?.data.message ?? '')
    }
  }
)
