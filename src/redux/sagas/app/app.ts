import { put, takeLatest, call } from 'redux-saga/effects';

import { Types, Creators } from '@reducers/app';

// import { formatError } from '../../../libs';

// import appAPI from '../../api/app';

function* footerRequest() {
  try {
    // const data = yield call(appAPI.getFooter);

    // yield put(AppCreators.footerSuccess(data));
  } catch (error) {
    // yield put(AppCreators.footerError(formatError(error)));
  }
}

export default function* watch() {
  yield takeLatest(Types.INITIAL, footerRequest);
}
