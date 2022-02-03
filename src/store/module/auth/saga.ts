import { authService } from 'src/services/auth';
import { History } from 'history';
import {
  call, getContext, put, SagaReturnType, takeEvery,
} from 'redux-saga/effects';
import userActions, { userConstants } from './actions';

function* handleSignIn(action: ReturnType<typeof userActions.signInUser>) {
  const history : History = yield getContext('history');
  try {
    const res : SagaReturnType<typeof authService.signin> = yield call(authService.signin, action.payload);
    const item = {
      token: `Bearer ${res.token}`,
      exp: res.exp,
    };

    localStorage.setItem('tokenObject', JSON.stringify(item));
    yield put(userActions.setUser(res.user));
    history.push('/');
  } catch (e) {
    yield put(userActions.failUser(e));
  }
}

function* handleUpdateMe() {
  try {
    const res : SagaReturnType<typeof authService.getMe> = yield call(authService.getMe);
    yield put(userActions.setUser(res.user));
  } catch (e) {
    yield put(userActions.failUser(e));
  }
}

function* handleSignUp(action: ReturnType<typeof userActions.signUpUser>) {
  const history : History = yield getContext('history');
  try {
    const res : SagaReturnType<typeof authService.signup> = yield call(authService.signup, action.payload);
    history.push('/signin');
  } catch (e) {
    yield put(userActions.failUser(e));
  }
}

export default [
  takeEvery(userConstants.SIGNIN_USER, handleSignIn),
  takeEvery(userConstants.FETCH_USER, handleUpdateMe),
  takeEvery(userConstants.SIGNUP_USER, handleSignUp),
];
