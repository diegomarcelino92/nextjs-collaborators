import { put, takeLatest, call } from 'redux-saga/effects';

import collaboratorsAPI from '@API/collaborator';
import { Types, Creators } from '@reducers/collaborators';

function* collboratorsRequest() {
  try {
    const { data }: { data: Collaborator[] } = yield call(
      collaboratorsAPI.list,
      {}
    );

    yield put(Creators.collaboratorsSuccess(data));
  } catch (error) {
    yield put(Creators.collaboratorsError(error));
  }
}

export default function* watch() {
  yield takeLatest(Types.COLLABORATORS_REQUEST, collboratorsRequest);
}
