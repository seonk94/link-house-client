import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  getLinksApi, getMetadataApi, patchLinkApi, postLinkApi, deleteLinkApi,
} from 'src/controller';
import Link from 'src/models/Link';
import linkActions, { linkConstants } from './actions';

function* handleFetch() {
  try {
    const res : AxiosResponse<{ links: Link[] }> = yield call(getLinksApi);
    yield put(linkActions.setLinks(res.data.links.map((link) => new Link(link))));
  } catch (e) {
    yield put(linkActions.failLink(e));
  }
}

function* handlePostLink(action: ReturnType<typeof linkActions.postLink>) {
  try {
    const res : AxiosResponse<{ link: Link }> = yield call(postLinkApi, action.payload);
    yield put(linkActions.addLink(new Link(res.data.link)));
  } catch (e) {
    yield put(linkActions.failLink(e));
  }
}

function* handleLocalPostLink(action: ReturnType<typeof linkActions.postLocalLink>) {
  try {
    const res : AxiosResponse<{ metadata: Link }> = yield call(getMetadataApi, action.payload);
    yield put(linkActions.addLink(new Link(res.data.metadata)));
  } catch (e) {
    yield put(linkActions.failLink(e));
  }
}

function* handleUpdateLink(action: ReturnType<typeof linkActions.patchLink>) {
  try {
    const res : AxiosResponse<{ link: Link }> = yield call(patchLinkApi, action.payload._id, action.payload);
    yield put(linkActions.updateLink(new Link(res.data.link)));
  } catch (e) {
    yield put(linkActions.failLink(e));
  }
}

function* handleDeleteLink(action: ReturnType<typeof linkActions.deleteLink>) {
  try {
    const res : AxiosResponse<{ id: string }> = yield call(deleteLinkApi, action.payload);
    yield put(linkActions.removeLink(res.data.id));
  } catch (e) {
    yield put(linkActions.failLink(e));
  }
}

export default [
  takeEvery(linkConstants.FETCH_LINKS, handleFetch),
  takeEvery(linkConstants.POST_LINK, handlePostLink),
  takeEvery(linkConstants.PATCH_LINK, handleUpdateLink),
  takeEvery(linkConstants.POST_LOCAL_LINK, handleLocalPostLink),
  takeEvery(linkConstants.DELETE_LINK, handleDeleteLink),
];
