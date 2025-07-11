import { StoreState } from 'store/initialStoreState';
import { createSelector } from '@reduxjs/toolkit';

export const selectAppState = (state: StoreState): StoreState => state;

export const selectUser = createSelector(selectAppState, appState => {
  return appState.user;
});

export const selectUserCredentials = createSelector(
  selectAppState,
  appState => {
    return appState.user.credentials;
  },
);
