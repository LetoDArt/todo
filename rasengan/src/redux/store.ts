import { combineReducers, configureStore } from '@reduxjs/toolkit';

import testReducer from './reducers/test.reducer';
import userReducer from './reducers/User/user.reducer';


const reducer = combineReducers({
  test: testReducer,
  user: userReducer,
});

export const setStore = () => configureStore({
  reducer,
})

export type RootState = ReturnType<typeof reducer>;
export type RootStore = ReturnType<typeof setStore>;
export type RootDispatch = RootStore['dispatch'];