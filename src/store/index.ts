import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import link from './module/link';
import auth from './module/auth';

const rootReducer = combineReducers({
  link: link.reducer,
  auth: auth.reducer,
});

const rootSagas = () => function* () {
  const sagas = [
    ...auth.sagas,
    ...link.sagas,
  ];

  for (let i = 0; i < sagas.length; i += 1) {
    yield sagas[i];
  }
};

export default {
  rootReducer,
  rootSagas,
};

export type RootState = ReturnType<typeof rootReducer>
