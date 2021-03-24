import { put, takeLatest, call } from 'redux-saga/effects';

import { Types, Creators } from '@reducers/collaborators';

import collaboratorsAPI from '@API/collaborator'

function* collboratorsRequest() {
  try {
    const data: Collaborator[] = yield call(collaboratorsAPI.list);

    yield put(Creators.collaboratorsSuccess(data));
  } catch (error) {
    yield put(Creators.collaboratorsError(error));
  }
}

export default function* watch() {
  yield takeLatest(Types.COLLABORATORS_REQUEST, collboratorsRequest);
}
