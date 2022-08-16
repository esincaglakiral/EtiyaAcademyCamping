import { AuthState, authReducer } from './reducers/auth.reducer';

export interface AuthStates {
  appAuth: AuthState;
}

export const authReducers = {
  appAuth: authReducer
};
