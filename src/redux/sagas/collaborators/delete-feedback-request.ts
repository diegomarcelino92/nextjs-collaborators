import { AnyAction } from 'redux';

import { put, takeLatest, call, select } from 'redux-saga/effects';

import collaboratorsAPI from '@API/collaborator';
import { Creators as AppCreators } from '@reducers/app';
import { Types, Creators } from '@reducers/collaborators';

function* deleteFeedbackRequest({ feedback }: AnyAction) {
  try {
    const { collaborators } = yield select((state) => state);

    const collaboratorId = collaborators.getIn(['collaborator', 'id']);
    const list = collaborators.getIn(['collaboratorFeedbackListPage']);

    const { data = {} }: { data: Feedback } = yield call(
      collaboratorsAPI.feedback.delete,
      collaboratorId,
      feedback.id
    );

    yield put(Creators.deleteFeedbackSuccess(data));

    if (list.length <= 1) {
      yield put(Creators.collaboratorFeedbackRequest(collaboratorId));
    }
  } catch (error) {
    yield put(Creators.deleteFeedbackError({ error: true }));
    yield put(
      AppCreators.snackbarRequest({
        open: true,
        severity: 'error',
        message: 'Houve algum erro ao deletar feedback',
      })
    );
  }
}

export default function* watch() {
  yield takeLatest(Types.DELETE_FEEDBACK_REQUEST, deleteFeedbackRequest);
}
