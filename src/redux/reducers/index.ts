import { combineReducers } from 'redux';

import { ImmutableObject } from 'seamless-immutable';

import app, { AppState } from './app';
import collaborators, { CollaboratorsState } from './collaborators';

export interface State {
  app: ImmutableObject<AppState>;
  collaborators: ImmutableObject<CollaboratorsState>;
}

const rootReducer = combineReducers({
  app,
  collaborators,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
