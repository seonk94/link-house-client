import { AxiosError, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { call, put, takeEvery } from 'redux-saga/effects';
import api from 'src/api';
import User from 'src/models/User';
import userActions, { userConstants } from './actions';

function* handleLogin(action: ReturnType<typeof userActions.userFetchRequest>) {
  try {
    const res : AxiosResponse<{ token: string, user: User }> = yield call(api.auth.signin, action.payload);
    localStorage.setItem('token', res.data.token);
    yield put(userActions.userFetchSuccess(res.data.user));
  } catch (e) {
    yield put(userActions.userFetchFailure(e.message));
  }
}

export default [
  takeEvery(userConstants.USER_FETCH_REQUEST, handleLogin),
];
