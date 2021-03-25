import { combineReducers } from 'redux';

import { ImmutableObject } from 'seamless-immutable';

import collaborators, { CollaboratorsState } from './collaborators';

export interface State {
  collaborators: ImmutableObject<CollaboratorsState>;
}

const rootReducer = combineReducers({
  collaborators,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
