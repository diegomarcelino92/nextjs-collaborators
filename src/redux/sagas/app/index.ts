import { all, fork } from 'redux-saga/effects';

import appSagas from './app';

function* appSagass() {
  yield all([
    fork(appSagas),
  ]);
}

export default appSagass;
