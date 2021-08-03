import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import api from 'src/api';
import User from 'src/models/User';
import userActions, { userConstants } from './actions';

function* handleLogin(action: ReturnType<typeof userActions.userLogin>) {
  try {
    const res : AxiosResponse<{ token: string, user: User }> = yield call(api.auth.signin, action.payload);
    localStorage.setItem('token', `Bearer ${res.data.token}`);
    yield put(userActions.userFetchSuccess(res.data.user));
  } catch (e) {
    yield put(userActions.userFetchFailure(e.message));
  }
}

function* handleUpdateMe() {
  try {
    const res : AxiosResponse<{ token: string, user: User }> = yield call(api.auth.getMe);
    localStorage.setItem('token', `Bearer ${res.data.token}`);
    yield put(userActions.userFetchSuccess(res.data.user));
  } catch (e) {
    yield put(userActions.userFetchFailure(e.message));
  }
}

export default [
  takeEvery(userConstants.USER_LOGIN, handleLogin),
  takeEvery(userConstants.USER_FETCH_REQUEST, handleUpdateMe),
];
