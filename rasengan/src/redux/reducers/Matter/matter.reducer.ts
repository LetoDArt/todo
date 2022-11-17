import { createSlice } from '@reduxjs/toolkit';

import { changeMatter, changeStatus, createNewOne, deleteCurrentMatter, getAllMatters } from './matter.requests';

import { FullMatter } from '../../../types/matters.types';
import { errorToast, successToast } from '../../../utils/utils';


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
  reducers: {
    clearMatters(state) {
      state.matters = []
    }
  },
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

    builder
      .addCase(changeStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changeStatus.fulfilled, (state, action) => {
        state.matters = action.payload
        state.isLoading = false;
        state.error = '';
      })
      .addCase(changeStatus.rejected, (state, action) => {
        state.error = action.payload ?? '';
        state.isLoading = false;
      });

    builder
      .addCase(deleteCurrentMatter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCurrentMatter.fulfilled, (state, action) => {
        successToast('Matter has been successfully deleted');
        state.matters = action.payload
        state.isLoading = false;
        state.error = '';
      })
      .addCase(deleteCurrentMatter.rejected, (state, action) => {
        errorToast(action.payload ?? 'unknown');
        state.error = action.payload ?? '';
        state.isLoading = false;
      });

    builder
      .addCase(createNewOne.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewOne.fulfilled, (state, action) => {
        successToast('Matter has been successfully created');
        state.matters = action.payload
        state.isLoading = false;
        state.error = '';
      })
      .addCase(createNewOne.rejected, (state, action) => {
        errorToast(action.payload ?? 'unknown');
        state.error = action.payload ?? '';
        state.isLoading = false;
      });

    builder
      .addCase(changeMatter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changeMatter.fulfilled, (state, action) => {
        successToast('Matter has been successfully changed');
        state.matters = action.payload
        state.isLoading = false;
        state.error = '';
      })
      .addCase(changeMatter.rejected, (state, action) => {
        errorToast(action.payload ?? 'unknown');
        state.error = action.payload ?? '';
        state.isLoading = false;
      });
  },
});

export default matterSlice.reducer;
