import { all, fork } from 'redux-saga/effects';

import appSagas from './collboratorsRequest';

function* appSagass() {
  yield all([fork(appSagas)]);
}

export default appSagass;
