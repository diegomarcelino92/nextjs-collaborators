import { all, fork } from 'redux-saga/effects';

import collaboratorsSagas from './collaborators';

function* rootSagas() {
  yield all([
    fork(collaboratorsSagas),
  ]);
}

export default rootSagas;
