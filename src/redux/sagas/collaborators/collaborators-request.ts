import { put, takeLatest, call } from 'redux-saga/effects';

import collaboratorsAPI from '@API/collaborator';
import { Creators as AppCreators } from '@reducers/app';
import { Types, Creators } from '@reducers/collaborators';

function* collboratorsRequest() {
  try {
    const { data = [] }: { data: Collaborator[] } = yield call(
      collaboratorsAPI.list,
      {}
    );

    yield put(Creators.collaboratorsSuccess(data));
  } catch (error) {
    yield put(Creators.collaboratorsError({ error: true }));
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
  yield takeLatest(Types.COLLABORATORS_REQUEST, collboratorsRequest);
}
