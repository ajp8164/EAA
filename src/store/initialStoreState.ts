import { UserState, initialUserState } from 'store/slices/user';

export interface StoreState {
  user: UserState;
}

export const initialStoreState = Object.freeze<StoreState>({
  user: initialUserState,
});
