import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestAllMatters } from '../../../axios/requests/matter/matter';

import { FullMatter } from '../../../types/matters.types';


export const getAllMatters = createAsyncThunk<FullMatter[], string, { rejectValue: string }>(
  'matter/get',
  async (user, { rejectWithValue }) => {
    try {
      return (await requestAllMatters(user)) as FullMatter[];
    } catch (e: any) {
      return rejectWithValue(e?.response?.data.message ?? '')
    }
  }
);
