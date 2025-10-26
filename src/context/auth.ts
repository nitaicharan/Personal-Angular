import { createReducer, on, props } from '@ngrx/store';
import { createAction } from '@ngrx/store';
import { User } from '../app/login/types/user';

export const initialState: Partial<User> = {};
export const login = createAction('[Auth Component] Login', props<Partial<User>>());
export const register = createAction('[Auth Component] Register', props<Partial<User>>());

export const authReducer = createReducer(
  initialState,
  on(login, (state, payload) => ({ ...state, ...payload })),
  on(register, (state, payload) => ({ ...state, ...payload })),
);
