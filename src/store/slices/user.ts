import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { revertUser } from 'store/actions';
import { UserCredentials, UserProfile } from 'types/user';

export interface UserState {
  credentials?: UserCredentials;
  profile?: UserProfile;
}

export const initialUserState = Object.freeze<UserState>({});

const handleSaveCredentials: CaseReducer<
  UserState,
  PayloadAction<{ credentials: UserCredentials }>
> = (state, { payload }) => {
  return {
    ...state,
    credentials: payload.credentials,
  };
};

const handleSaveProfile: CaseReducer<
  UserState,
  PayloadAction<{ profile: UserProfile }>
> = (state, { payload }) => {
  return {
    ...state,
    profile: payload.profile,
  };
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  extraReducers: builder => builder.addCase(revertUser, () => initialUserState),
  reducers: {
    saveCredentials: handleSaveCredentials,
    saveProfile: handleSaveProfile,
  },
});

export const userReducer = userSlice.reducer;
export const saveCredentials = userSlice.actions.saveCredentials;
export const saveProfile = userSlice.actions.saveProfile;
