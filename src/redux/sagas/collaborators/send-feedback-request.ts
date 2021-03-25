import { AnyAction } from 'redux';

import { put, takeLatest, call, select } from 'redux-saga/effects';

import collaboratorsAPI from '@API/collaborator';
import { Creators as AppCreators } from '@reducers/app';
import { Types, Creators } from '@reducers/collaborators';

function* sendFeedbackRequest({ feedback }: AnyAction) {
  try {
    const { collaborators } = yield select((state) => state);

    const collaboratorId = collaborators.getIn(['collaborator', 'id']);
    const show = collaborators.getIn(['feedbackShow']);
    const list = collaborators.getIn(['collaboratorFeedbackListPage']);

    const { data }: { data: Feedback } = yield call(
      collaboratorsAPI.feedback.send,
      {
        ...feedback,
        collaboratorId,
        like: 0,
        createdAt: new Date(),
      },
      collaboratorId
    );

    yield put(Creators.sendFeedbackSuccess([data]));
    yield put(
      AppCreators.snackbarRequest({
        open: true,
        message: 'Feedback enviado com successo!',
      })
    );

    if (list.length >= show) {
      yield put(Creators.collaboratorFeedbackRequest(collaboratorId));
    }
  } catch (error) {
    yield put(
      AppCreators.snackbarRequest({
        open: true,
        severity: 'error',
        message: 'Houve algum erro ao enviar feedback',
      })
    );
    yield put(Creators.sendFeedbackError(error));
  }
}

export default function* watch() {
  yield takeLatest(Types.SEND_FEEDBACK_REQUEST, sendFeedbackRequest);
}
