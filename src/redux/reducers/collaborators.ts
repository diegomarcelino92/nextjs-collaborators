import { AnyAction } from 'redux';
import { createReducer, createActions } from 'reduxsauce';
import immutable from 'seamless-immutable';

interface CollaboratorTypes {
  COLLABORATORS_REQUEST: string;
  COLLABORATORS_SUCCESS: string;
  COLLABORATORS_ERROR: string;

}

interface CollaboratorCreators {
  collaboratorsRequest: () => AnyAction;
  collaboratorsSuccess: (data: Collaborator[]) => AnyAction;
  collaboratorsError: (error: unknown) => AnyAction;
}

export const { Types, Creators } = createActions<CollaboratorTypes, CollaboratorCreators>({
  collaboratorsRequest: [],
  collaboratorsSuccess: ['data'],
  collaboratorsError: ['error'],
});

export interface CollaboratorsState {
  loading: boolean;
  collaborators: Collaborator[];
  error: unknown;
}

const INITIAL_STATE = immutable<CollaboratorsState>({
  loading: false,
  collaborators: [],
  error: {}
});

const collaboratorsRequest = (state = INITIAL_STATE) => state;
const collaboratorsSuccess = (state = INITIAL_STATE, { data }) => state.merge({ loading: false, collaborators: data });
const collaboratorsError = (state = INITIAL_STATE, { error }) => state.merge({ loading: false, collaborators: error });

export default createReducer(INITIAL_STATE, {
  [Types.COLLABORATORS_REQUEST]: collaboratorsRequest,
  [Types.COLLABORATORS_SUCCESS]: collaboratorsSuccess,
  [Types.COLLABORATORS_ERROR]: collaboratorsError,
});
