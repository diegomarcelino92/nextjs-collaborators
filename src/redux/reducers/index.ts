import { combineReducers } from 'redux';
import { ImmutableObject } from 'seamless-immutable';

import app, { AppState } from './app';

export interface State {
  app: ImmutableObject<AppState>;
}

const rootReducer = combineReducers({
  app,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
