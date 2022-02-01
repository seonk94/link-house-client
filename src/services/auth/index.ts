import {
  findPasswordApi, signupApi, updateUserApi, getMeApi, signinApi,
} from 'src/controller';
import User from 'src/models/User';
import {
  SIGNUP_RESPONSE, SIGNUP_PARAMS, SIGNIN_RESPONSE, SIGNIN_PARAMS, GET_ME_RESPONSE, FIND_PASSWORD_PARAMS, FIND_PASSWORD_RESPONSE, UPDATE_USER_RESPONSE, UPDATE_USER_PARAMS,
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
