import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CountType } from '../../types/count.types';


interface CountState {
  count: CountType,
  isLoading: boolean,
  error: string,
}

const initialState: CountState = {
  count: {
    count: 0,
  },
  isLoading: false,
  error: '',
}

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.count.count = action.payload;
    }
  }
});

export default testSlice.reducer;