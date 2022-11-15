import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestAllMatters, requestToChangeStatus, requestToDelete } from '../../../axios/requests/matter/matter';

import { ChangeMatter, FullMatter } from '../../../types/matters.types';


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

export const changeStatus = createAsyncThunk<FullMatter[], ChangeMatter, { rejectValue: string }>(
  'matter/changeStatus',
  async (matter, { rejectWithValue }) => {
    try {
      return (await requestToChangeStatus(matter.id, matter.active)) as FullMatter[];
    } catch (e: any) {
      return rejectWithValue(e?.response?.data.message ?? '')
    }
  }
);

export const deleteCurrentMatter = createAsyncThunk<FullMatter[], string, { rejectValue: string }>(
  'matter/delete',
  async (matter, { rejectWithValue }) => {
    try {
      return (await requestToDelete(matter)) as FullMatter[];
    } catch (e: any) {
      return rejectWithValue(e?.response?.data.message ?? '')
    }
  }
);
