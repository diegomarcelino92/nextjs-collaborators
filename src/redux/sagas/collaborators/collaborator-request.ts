import { AnyAction } from 'redux';

import { put, takeLatest, call } from 'redux-saga/effects';

import collaboratorsAPI from '@API/collaborator';
import { Creators as AppCreators } from '@reducers/app';
import { Types, Creators } from '@reducers/collaborators';

function* collboratorRequest({ collaboratorId }: AnyAction) {
  try {
    const { data = {} }: { data: Collaborator } = yield call(
      collaboratorsAPI.collaborator.info,
      {},
      collaboratorId
    );

    yield put(Creators.collaboratorSuccess(data));
  } catch (error) {
    yield put(Creators.collaboratorError({ error: true }));
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
  yield takeLatest(Types.COLLABORATOR_REQUEST, collboratorRequest);
}
