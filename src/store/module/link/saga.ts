import { AxiosPromise, AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import api from 'src/api';
import Link from 'src/models/Link';
import linkActions, { linkConstants } from './actions';

function* handleFetch() {
  try {
    const res : AxiosResponse<{ links: Link[] }> = yield call(api.link.getLinks);
    yield put(linkActions.linkFetchSuccess(res.data.links));
  } catch (e) {
    yield put(linkActions.linkFetchFailure(e.message));
  }
}

export default [
  takeEvery(linkConstants.LINK_FETCH_REQUEST, handleFetch),
];
