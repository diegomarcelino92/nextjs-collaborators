import React from 'react';

import { END } from 'redux-saga';
import { SagaStore, wrapper } from 'src/redux/store';

import { Creators } from '@reducers/collaborators';
import Home from '@views/home';

const HomePage = () => <Home />;

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    store.dispatch(Creators.collaboratorsRequest());
    store.dispatch(END);

    await (store as SagaStore).sagaTask.toPromise();

    return {
      props: {},
    };
  },
);

export default HomePage;
