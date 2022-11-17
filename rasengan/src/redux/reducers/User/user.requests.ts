import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestToChange, requestToLogin, requestUserProfile } from '../../../axios/requests/user/user';

import { LoginUser, UserFool, UserWithoutPassword } from '../../../types/user.types';


export const LoginUserRequest = createAsyncThunk<void, LoginUser, { rejectValue: string }>(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      return await requestToLogin(data);
    } catch (e: any) {
      return rejectWithValue(e?.response?.data.message ?? 'unknown')
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

export const changeProfile = createAsyncThunk<UserWithoutPassword, UserFool, { rejectValue: string }>(
  'user/change',
  async (user, { rejectWithValue }) => {
    try {
      return (await requestToChange(user)) as UserWithoutPassword;
    } catch (e: any) {
      return rejectWithValue(e?.response?.data.message ?? '')
    }
  }
)
