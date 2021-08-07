import { AxiosResponse } from 'axios';
import { History } from 'history';
import {
  call, getContext, put, takeEvery,
} from 'redux-saga/effects';
import api from 'src/api';
import User from 'src/models/User';
import userActions, { userConstants } from './actions';

function* handleSignIn(action: ReturnType<typeof userActions.signInUser>) {
  const history : History = yield getContext('history');
  try {
    const res : AxiosResponse<{ token: string, user: User }> = yield call(api.auth.signin, action.payload);
    localStorage.setItem('token', `Bearer ${res.data.token}`);
    yield put(userActions.setUser(res.data.user));
    history.push('/');
  } catch (e) {
    yield put(userActions.failUser(e.message));
  }
}

function* handleUpdateMe() {
  try {
    const res : AxiosResponse<{ token: string, user: User }> = yield call(api.auth.getMe);
    localStorage.setItem('token', `Bearer ${res.data.token}`);
    yield put(userActions.setUser(res.data.user));
  } catch (e) {
    yield put(userActions.failUser(e.message));
  }
}

function* handleSignUp(action: ReturnType<typeof userActions.signUpUser>) {
  const history : History = yield getContext('history');
  try {
    const res : AxiosResponse<{ token: string, user: User }> = yield call(api.auth.signup, action.payload);
    history.push('/signin');
  } catch (e) {
    yield put(userActions.failUser(e.message));
  }
}

export default [
  takeEvery(userConstants.SIGNIN_USER, handleSignIn),
  takeEvery(userConstants.FETCH_USER, handleUpdateMe),
  takeEvery(userConstants.SIGNUP_USER, handleSignUp),
];
