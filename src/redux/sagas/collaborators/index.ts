import { all, fork } from 'redux-saga/effects';

import collaboratorFeebackRequest from './collaboratorFeebackRequest';
import collaboratorRequest from './collaboratorRequest';
import collboratorsRequest from './collaboratorsRequest';
import deleteFeedbackRequest from './deleteFeedbackRequest';
import likeFeedbackRequest from './likeFeedbackRequest';

function* appSagass() {
  yield all([
    fork(collboratorsRequest),
    fork(collaboratorRequest),
    fork(collaboratorFeebackRequest),
    fork(likeFeedbackRequest),
    fork(deleteFeedbackRequest),
  ]);
}

export default appSagass;
