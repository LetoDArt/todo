import { createSlice } from '@reduxjs/toolkit';

import { getAllMatters } from './matter.requests';

import { FullMatter } from '../../../types/matters.types';


interface CountState {
  matters: FullMatter[],
  isLoading: boolean,
  error: string,
}

const initialState: CountState = {
  matters: [],
  isLoading: false,
  error: '',
}

export const matterSlice = createSlice({
  name: 'matter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMatters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllMatters.fulfilled, (state, action) => {
        state.matters = action.payload
        state.isLoading = false;
        state.error = '';
      })
      .addCase(getAllMatters.rejected, (state, action) => {
        state.error = action.payload ?? '';
        state.isLoading = false;
      });


  },
});

export default matterSlice.reducer;
