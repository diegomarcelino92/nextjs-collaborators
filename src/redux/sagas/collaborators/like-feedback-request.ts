import { AnyAction } from 'redux';

import { put, takeLatest, call, select } from 'redux-saga/effects';

import collaboratorsAPI from '@API/collaborator';
import { Creators as AppCreators } from '@reducers/app';
import { Types, Creators } from '@reducers/collaborators';

function* likeFeedbackRequest({ feedback }: AnyAction) {
  try {
    const { collaborators } = yield select((state) => state);

    const collaboratorId = collaborators.getIn(['collaborator', 'id']);

    const { data = {} }: { data: Feedback } = yield call(
      collaboratorsAPI.feedback.like,
      {
        like: feedback.like + 1,
      },
      collaboratorId,
      feedback.id
    );

    yield put(Creators.likeFeedbackSuccess([data]));
  } catch (error) {
    yield put(Creators.likeFeedbackError({ error: true }));
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
  yield takeLatest(Types.LIKE_FEEDBACK_REQUEST, likeFeedbackRequest);
}
