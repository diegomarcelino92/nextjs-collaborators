import { AnyAction } from 'redux';

import { put, takeLatest, call } from 'redux-saga/effects';

import collaboratorsAPI from '@API/collaborator';
import { Types, Creators } from '@reducers/collaborators';

function* collboratorRequest({ collaboratorId }: AnyAction) {
  try {
    const { data }: { data: Collaborator } = yield call(
      collaboratorsAPI.collaborator.info,
      {},
      collaboratorId
    );

    yield put(Creators.collaboratorSuccess(data));
  } catch (error) {
    yield put(Creators.collaboratorError(error));
  }
}

export default function* watch() {
  yield takeLatest(Types.COLLABORATOR_REQUEST, collboratorRequest);
}
