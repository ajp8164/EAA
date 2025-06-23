import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from 'store/slices/user';

export const rootReducer = combineReducers({
  user: userReducer,
});
