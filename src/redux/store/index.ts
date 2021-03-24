import { createStore, applyMiddleware, Store } from 'redux';

import { MakeStore, createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';
import immutable from 'seamless-immutable';

import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import rootReducer, { RootState } from '../reducers';
import rootSaga from '../sagas';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

export const makeStore: MakeStore<RootState> = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    immutable(rootReducer),
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper<RootState>(makeStore, { debug: true });
