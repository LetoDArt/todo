import { createAsyncThunk } from '@reduxjs/toolkit';

import { LoginUser } from '../../../types/user.types';
import { requestToLogin } from '../../../axios/requests/user/user';


export const LoginUserRequest = createAsyncThunk<void, LoginUser>(
  'user/login',
  async (data, thunkAPI) => {
    try {
      return await requestToLogin(data);
    } catch (e) {
      return thunkAPI.rejectWithValue('Error')
    }
  }
)
