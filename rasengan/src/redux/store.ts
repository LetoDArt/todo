import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userReducer from './reducers/User/user.reducer';
import matterReducer from './reducers/Matter/matter.reducer';


const reducer = combineReducers({
  user: userReducer,
  matter: matterReducer
});

export const setStore = () => configureStore({
  reducer,
})

export type RootState = ReturnType<typeof reducer>;
export type RootStore = ReturnType<typeof setStore>;
export type RootDispatch = RootStore['dispatch'];
