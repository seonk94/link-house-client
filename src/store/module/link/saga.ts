import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import api from 'src/api';
import Link from 'src/models/Link';
import linkActions, { linkConstants } from './actions';

function* handleFetch() {
  try {
    const res : AxiosResponse<{ links: Link[] }> = yield call(api.link.getLinks);
    yield put(linkActions.setLinks(res.data.links.map((link) => new Link(link))));
  } catch (e) {
    yield put(linkActions.failLink(e.message));
  }
}

function* handlePostLink(action: ReturnType<typeof linkActions.postLink>) {
  try {
    const res : AxiosResponse<{ link: Link }> = yield call(api.link.postLink, action.payload);
    yield put(linkActions.addLink(new Link(res.data.link)));
  } catch (e) {
    yield put(linkActions.failLink(e.message));
  }
}

function* handleLocalPostLink(action: ReturnType<typeof linkActions.postLocalLink>) {
  try {
    const res : AxiosResponse<{ metadata: Link }> = yield call(api.link.getMetadata, action.payload);
    yield put(linkActions.addLink(new Link(res.data.metadata)));
  } catch (e) {
    yield put(linkActions.failLink(e.message));
  }
}

function* handleUpdateLink(action: ReturnType<typeof linkActions.patchLink>) {
  try {
    const res : AxiosResponse<{ link: Link }> = yield call(api.link.patchLink, action.payload);
    yield put(linkActions.updateLink(new Link(res.data.link)));
  } catch (e) {
    yield put(linkActions.failLink(e.message));
  }
}

function* handleDeleteLink(action: ReturnType<typeof linkActions.deleteLink>) {
  try {
    const res : AxiosResponse<{ id: string }> = yield call(api.link.deleteLink, action.payload);
    yield put(linkActions.removeLink(res.data.id));
  } catch (e) {
    yield put(linkActions.failLink(e.message));
  }
}

export default [
  takeEvery(linkConstants.FETCH_LINKS, handleFetch),
  takeEvery(linkConstants.POST_LINK, handlePostLink),
  takeEvery(linkConstants.PATCH_LINK, handleUpdateLink),
  takeEvery(linkConstants.POST_LOCAL_LINK, handleLocalPostLink),
  takeEvery(linkConstants.DELETE_LINK, handleDeleteLink),
];
