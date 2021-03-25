import {
 createStore, applyMiddleware, Store, AnyAction 
} from 'redux';

import immutable from 'seamless-immutable';

import {
 MakeStore, createWrapper, HYDRATE 
} from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import createSagaMiddleware, { Task } from 'redux-saga';

import rootReducer, { RootState } from '../reducers';
import rootSaga from '../sagas';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const wrappedRootReducer = (state: RootState, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return immutable({
      ...state,
      ...action.payload,
    });
  }

  return rootReducer(state, action);
};

export const makeStore: MakeStore<RootState> = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    immutable(wrappedRootReducer),
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper<RootState>(makeStore, { debug: true });
