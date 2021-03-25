import { AnyAction } from 'redux';

import immutable from 'seamless-immutable';

import { SnackbarProps } from '@material-ui/core';
import { AlertProps } from '@material-ui/lab';

import { createReducer, createActions } from 'reduxsauce';

interface CollaboratorTypes {
  SNACKBAR_REQUEST: string;
}

interface CollaboratorCreators {
  snackbarRequest: (props: SnackbarProps & AlertProps) => AnyAction;
}

export const { Types, Creators } = createActions<
  CollaboratorTypes,
  CollaboratorCreators
>({
  snackbarRequest: ['props'],
});

export interface AppState {
  loading: boolean;
  snackbar: SnackbarProps;
}

const INITIAL_STATE = immutable<AppState>({
  loading: false,
  snackbar: {},
});

const snackbarRequest = (state = INITIAL_STATE, { props }) =>
  state.merge({ snackbar: props }, { deep: true });

export default createReducer(INITIAL_STATE, {
  [Types.SNACKBAR_REQUEST]: snackbarRequest,
});
