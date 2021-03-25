import { AnyAction } from 'redux';

import immutable, { ImmutableArray } from 'seamless-immutable';

import { HYDRATE } from 'next-redux-wrapper';
import { createReducer, createActions } from 'reduxsauce';

interface CollaboratorTypes {
  PAGINATE_COLLABORATORS: string;

  COLLABORATORS_REQUEST: string;
  COLLABORATORS_SUCCESS: string;
  COLLABORATORS_ERROR: string;

}

interface CollaboratorCreators {
  paginateCollaborators: (data: ImmutableArray<Collaborator>) => AnyAction;
  collaboratorsRequest: () => AnyAction;
  collaboratorsSuccess: (data: Collaborator[]) => AnyAction;
  collaboratorsError: (error: unknown) => AnyAction;
}

export const { Types, Creators } = createActions<
  CollaboratorTypes, CollaboratorCreators
>(
  {
    paginateCollaborators: ['data'],

    collaboratorsRequest: [],
    collaboratorsSuccess: ['data'],
    collaboratorsError: ['error'],
  },
);

export interface CollaboratorsState {
  loading: boolean;
  list: Collaborator[];
  listPage: Collaborator[];
  pages: number;
  show: number;
  error: unknown;
}

const INITIAL_STATE = immutable<CollaboratorsState>({
  loading: false,
  list: [],
  listPage: [],
  pages: 0,
  show: 10,
  error: {},
});

const hydrate = (state = INITIAL_STATE, action) => state.merge(
  action.payload.collaborators,
);

const collaboratorsRequest = (state = INITIAL_STATE) => state.set('loading', true);

const collaboratorsSuccess = (state = INITIAL_STATE, { data }) => state.merge({
  loading: false,
  list: data,
  pages: Math.round(data.length / state.show),
  listPage: data.slice(0, state.show),
});

const paginateCollaborators = (state = INITIAL_STATE, { data }) => state.merge({
  listPage: data,
});

const collaboratorsError = (state = INITIAL_STATE, { error }) => state.merge({
  loading: false,
  error,
});

export default createReducer(INITIAL_STATE, {
  [HYDRATE]: hydrate,

  [Types.PAGINATE_COLLABORATORS]: paginateCollaborators,

  [Types.COLLABORATORS_REQUEST]: collaboratorsRequest,
  [Types.COLLABORATORS_SUCCESS]: collaboratorsSuccess,
  [Types.COLLABORATORS_ERROR]: collaboratorsError,
});
