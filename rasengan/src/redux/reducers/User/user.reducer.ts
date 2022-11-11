import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginUserRequest } from './user.requests';
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

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {},
  extraReducers: {
    [LoginUserRequest.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.authorized = true;
      state.error = '';
    },
    [LoginUserRequest.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.authorized = false;
      state.error = action.payload;
    },
    [LoginUserRequest.pending.type]: (state) => {
      state.isLoading = true;
    },
  }
});

export default testSlice.reducer;
