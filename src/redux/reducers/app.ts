import { createReducer, createActions } from 'reduxsauce';
import immutable from 'seamless-immutable';

export const { Types, Creators } = createActions({
  initial: [],
});

export interface AppState {
  loading: boolean;
}

const INITIAL_STATE = immutable<AppState>({
  loading: false,
});

const initial = (state = INITIAL_STATE) => state;

export default createReducer(INITIAL_STATE, {
  [Types.INITIAL]: initial,
});
