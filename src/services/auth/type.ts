import User from 'src/models/User';

export interface SIGNUP_PARAMS {
  email: string;
  password: string;
  name: string;
}

export interface SIGNUP_RESPONSE {
  token: string;
  user: User
}

export interface SIGNIN_PARAMS {
  email: string;
  password: string;
}

export interface SIGNIN_RESPONSE {
  token: string;
  user: User
}

export interface GET_ME_RESPONSE {
  token: string;
  user: User;
}

export interface FIND_PASSWORD_PARAMS {
  email: string;
  name: string;
}

export interface FIND_PASSWORD_RESPONSE {
  userId: string;
}

export interface UPDATE_USER_PARAMS {
  userId: string;
  password: string;
}

export interface UPDATE_USER_RESPONSE {
  user: User
}
