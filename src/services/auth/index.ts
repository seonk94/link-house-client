import { findPasswordApi, getMeApi, signinApi, signupApi, updateUserApi } from 'src/controller';
import User from 'src/models/User';

import {
  FIND_PASSWORD_PARAMS,
  FIND_PASSWORD_RESPONSE,
  GET_ME_RESPONSE,
  SIGNIN_PARAMS,
  SIGNIN_RESPONSE,
  SIGNUP_PARAMS,
  SIGNUP_RESPONSE,
  UPDATE_USER_PARAMS,
  UPDATE_USER_RESPONSE,
} from './type';

class AuthService {
  public signup(params: SIGNUP_PARAMS) {
    return signupApi<SIGNUP_PARAMS, SIGNUP_RESPONSE>(params);
  }

  public signin(params: SIGNIN_PARAMS) {
    return signinApi<SIGNIN_PARAMS, SIGNIN_RESPONSE>(params);
  }

  public getMe() {
    return getMeApi<GET_ME_RESPONSE>();
  }

  public findPassword(params: FIND_PASSWORD_PARAMS) {
    return findPasswordApi<FIND_PASSWORD_PARAMS, FIND_PASSWORD_RESPONSE>(params);
  }

  public updateUser(params: UPDATE_USER_PARAMS) {
    return updateUserApi<string, UPDATE_USER_RESPONSE>(params.userId, params.password);
  }
}

export const authService = new AuthService();
