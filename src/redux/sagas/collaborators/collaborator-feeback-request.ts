import { AnyAction } from 'redux';

import { put, takeLatest, call } from 'redux-saga/effects';

import collaboratorsAPI from '@API/collaborator';
import { Creators as AppCreators } from '@reducers/app';
import { Types, Creators } from '@reducers/collaborators';

function* collboratorFeedbackRequest({ collaboratorId }: AnyAction) {
  try {
    const { data = [] }: { data: Feedback[] } = yield call(
      collaboratorsAPI.collaborator.feedback,
      {},
      collaboratorId
    );

    yield put(Creators.collaboratorFeedbackSuccess(data));
  } catch (error) {
    yield put(Creators.collaboratorFeedbackError({ error: true }));
    yield put(
      AppCreators.snackbarRequest({
        open: true,
        severity: 'error',
        message: 'Houve algum erro ao listar colaboradores',
      })
    );
  }
}

export default function* watch() {
  yield takeLatest(
    Types.COLLABORATOR_FEEDBACK_REQUEST,
    collboratorFeedbackRequest
  );
}
