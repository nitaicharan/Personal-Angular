import { createReducer, createSelector, on, props } from '@ngrx/store';
import { createAction } from '@ngrx/store';
import { User } from '../app/login/types/user';

export const initialState: Partial<User> = {};
export const login = createAction('[Auth Component] Login', props<Partial<User>>());
export const register = createAction('[Auth Component] Register', props<Partial<User>>());

export const selectFeature = (state: { auth: User }) => state.auth;
export const isLoggedInSelector = createSelector(
  selectFeature,
  ({ token }: User) => (token?.length ?? 0) > 0,
);

export const tokenSelector = createSelector(selectFeature, ({ token }) => token);

export const authReducer = createReducer(
  initialState,
  on(login, (state, payload) => ({ ...state, ...payload })),
  on(register, (state, payload) => ({ ...state, ...payload })),
);
