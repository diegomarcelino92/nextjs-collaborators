import { AnyAction } from 'redux';

import immutable, { ImmutableArray } from 'seamless-immutable';

import { createReducer, createActions } from 'reduxsauce';
import { updatingByIdArrayMerger } from 'seamless-immutable-mergers';

interface CollaboratorTypes {
  PAGINATE_COLLABORATORS: string;
  COLLABORATORS_REQUEST: string;
  COLLABORATORS_SUCCESS: string;
  COLLABORATORS_ERROR: string;
  COLLABORATOR_REQUEST: string;
  COLLABORATOR_SUCCESS: string;
  COLLABORATOR_ERROR: string;
  COLLABORATOR_FEEDBACK_REQUEST: string;
  COLLABORATOR_FEEDBACK_SUCCESS: string;
  COLLABORATOR_FEEDBACK_ERROR: string;
  LIKE_FEEDBACK_REQUEST: string;
  LIKE_FEEDBACK_SUCCESS: string;
  LIKE_FEEDBACK_ERROR: string;
  DELETE_FEEDBACK_REQUEST: string;
  DELETE_FEEDBACK_SUCCESS: string;
  DELETE_FEEDBACK_ERROR: string;
}

interface CollaboratorCreators {
  paginateCollaborators: (data: ImmutableArray<Collaborator>) => AnyAction;
  collaboratorsRequest: () => AnyAction;
  collaboratorsSuccess: (data: Collaborator[]) => AnyAction;
  collaboratorsError: (error: unknown) => AnyAction;
  collaboratorRequest: (collaboratorId: string) => AnyAction;
  collaboratorSuccess: (data: Collaborator) => AnyAction;
  collaboratorError: (error: unknown) => AnyAction;
  collaboratorFeedbackRequest: (collaboratorId: string) => AnyAction;
  collaboratorFeedbackSuccess: (data: Feedback[]) => AnyAction;
  collaboratorFeedbackError: (error: unknown) => AnyAction;
  likeFeedbackRequest: (feedback: Feedback) => AnyAction;
  likeFeedbackSuccess: (data: Feedback[]) => AnyAction;
  likeFeedbackError: (error: unknown) => AnyAction;
  deleteFeedbackRequest: (feedback: Feedback) => AnyAction;
  deleteFeedbackSuccess: (data: Feedback) => AnyAction;
  deleteFeedbackError: (error: unknown) => AnyAction;
}

export const { Types, Creators } = createActions<
  CollaboratorTypes,
  CollaboratorCreators
>({
  paginateCollaborators: ['data'],

  collaboratorsRequest: [],
  collaboratorsSuccess: ['data'],
  collaboratorsError: ['error'],

  collaboratorRequest: ['collaboratorId'],
  collaboratorSuccess: ['data'],
  collaboratorError: ['error'],

  collaboratorFeedbackRequest: ['collaboratorId'],
  collaboratorFeedbackSuccess: ['data'],
  collaboratorFeedbackError: ['error'],

  likeFeedbackRequest: ['feedback'],
  likeFeedbackSuccess: ['data'],
  likeFeedbackError: ['error'],

  deleteFeedbackRequest: ['feedback'],
  deleteFeedbackSuccess: ['data'],
  deleteFeedbackError: ['error'],
});

export interface CollaboratorsState {
  loading: boolean;
  list: Collaborator[];
  listPage: Collaborator[];
  collaborator?: Collaborator;
  collaboratorFeedback?: Feedback[];
  pages: number;
  show: number;
  error: unknown;
}

const INITIAL_STATE = immutable<CollaboratorsState>({
  loading: false,
  list: [],
  listPage: [],
  collaborator: {},
  collaboratorFeedback: [],
  pages: 0,
  show: 10,
  error: {},
});

const defaultRequest = (state = INITIAL_STATE) => state.set('loading', true);

const defaultError = (state = INITIAL_STATE, { error }) =>
  state.merge({
    loading: false,
    error,
  });

const paginateCollaborators = (state = INITIAL_STATE, { data }) =>
  state.merge({
    listPage: data,
  });

const collaboratorsSuccess = (state = INITIAL_STATE, { data }) =>
  state.merge({
    loading: false,
    list: data,
    pages: Math.round(data.length / state.show),
    listPage: data.slice(0, state.show),
  });

const collaboratorSuccess = (state = INITIAL_STATE, { data }) =>
  state.merge({
    loading: false,
    collaborator: data,
  });

const collaboratorFeedbackSuccess = (state = INITIAL_STATE, { data }) =>
  state.merge({
    loading: false,
    collaboratorFeedback: data,
  });

const likeFeedbackSuccess = (state = INITIAL_STATE, { data }) =>
  state.merge(
    {
      loading: false,
      collaboratorFeedback: data,
    },
    {
      merger: updatingByIdArrayMerger,
      mergerObjectIdentifier: 'id',
    }
  );

const deleteFeedbackSuccess = (state = INITIAL_STATE, { data }) =>
  state.merge({
    loading: false,
    collaboratorFeedback: state
      .getIn(['collaboratorFeedback'])
      .filter((feed) => feed.id !== data.id),
  });

export default createReducer(INITIAL_STATE, {
  [Types.PAGINATE_COLLABORATORS]: paginateCollaborators,

  [Types.COLLABORATOR_REQUEST]: defaultRequest,
  [Types.COLLABORATOR_SUCCESS]: collaboratorSuccess,
  [Types.COLLABORATOR_ERROR]: defaultError,

  [Types.COLLABORATOR_FEEDBACK_REQUEST]: defaultRequest,
  [Types.COLLABORATOR_FEEDBACK_SUCCESS]: collaboratorFeedbackSuccess,
  [Types.COLLABORATOR_FEEDBACK_ERROR]: defaultError,

  [Types.LIKE_FEEDBACK_REQUEST]: defaultRequest,
  [Types.LIKE_FEEDBACK_SUCCESS]: likeFeedbackSuccess,
  [Types.LIKE_FEEDBACK_ERROR]: defaultError,

  [Types.DELETE_FEEDBACK_REQUEST]: defaultRequest,
  [Types.DELETE_FEEDBACK_SUCCESS]: deleteFeedbackSuccess,
  [Types.DELETE_FEEDBACK_ERROR]: defaultError,

  [Types.COLLABORATORS_REQUEST]: defaultRequest,
  [Types.COLLABORATORS_SUCCESS]: collaboratorsSuccess,
  [Types.COLLABORATORS_ERROR]: defaultError,
});
