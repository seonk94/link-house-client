import { AxiosResponse } from 'axios';
import { History } from 'history';
import {
  call, getContext, put, takeEvery,
} from 'redux-saga/effects';
import api from 'src/api';
import User from 'src/models/User';
import userActions, { userConstants } from './actions';

function* handleLogin(action: ReturnType<typeof userActions.loginUser>) {
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

export default [
  takeEvery(userConstants.LONIN_USER, handleLogin),
  takeEvery(userConstants.FETCH_USER, handleUpdateMe),
];
