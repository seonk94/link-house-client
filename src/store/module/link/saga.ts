import { call, put, SagaReturnType, takeEvery } from 'redux-saga/effects';
import Link from 'src/models/Link';
import { linkService } from 'src/services/link';

import linkActions, { linkConstants } from './actions';

function* handleFetch() {
  try {
    const res: SagaReturnType<typeof linkService.getLinks> = yield call(linkService.getLinks);
    yield put(linkActions.setLinks(res.links.map((link) => new Link(link))));
  } catch (e) {
    yield put(linkActions.failLink(e));
  }
}

function* handlePostLink(action: ReturnType<typeof linkActions.postLink>) {
  try {
    const res: SagaReturnType<typeof linkService.postLink> = yield call(linkService.postLink, action.payload);
    yield put(linkActions.addLink(new Link(res.link)));
  } catch (e) {
    yield put(linkActions.failLink(e));
  }
}

function* handleLocalPostLink(action: ReturnType<typeof linkActions.postLocalLink>) {
  try {
    const res: SagaReturnType<typeof linkService.getMetadata> = yield call(linkService.getMetadata, action.payload);
    yield put(linkActions.addLink(new Link(res.metadata)));
  } catch (e) {
    yield put(linkActions.failLink(e));
  }
}

function* handleUpdateLink(action: ReturnType<typeof linkActions.patchLink>) {
  try {
    const res: SagaReturnType<typeof linkService.patchLink> = yield call(linkService.patchLink, action.payload);
    yield put(linkActions.updateLink(new Link(res.link)));
  } catch (e) {
    yield put(linkActions.failLink(e));
  }
}

function* handleDeleteLink(action: ReturnType<typeof linkActions.deleteLink>) {
  try {
    const res: SagaReturnType<typeof linkService.deleteLink> = yield call(linkService.deleteLink, action.payload);
    yield put(linkActions.removeLink(res.id));
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
