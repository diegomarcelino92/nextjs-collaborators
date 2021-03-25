import { all, fork } from 'redux-saga/effects';

import collaboratorFeebackRequest from './collaborator-feeback-request';
import collaboratorRequest from './collaborator-request';
import collboratorsRequest from './collaborators-request';
import deleteFeedbackRequest from './delete-feedback-request';
import likeFeedbackRequest from './like-feedback-request';
import sendFeedbackRequest from './send-feedback-request';

function* appSagass() {
  yield all([
    fork(collboratorsRequest),
    fork(collaboratorRequest),
    fork(collaboratorFeebackRequest),
    fork(likeFeedbackRequest),
    fork(deleteFeedbackRequest),
    fork(sendFeedbackRequest),
  ]);
}

export default appSagass;
