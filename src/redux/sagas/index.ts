import { all, fork } from 'redux-saga/effects';

import appSagas from './app';

function* rootSagas() {
  yield all([
    fork(appSagas),
  ]);
}

export default rootSagas;
