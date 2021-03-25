import React from 'react';

import { END } from 'redux-saga';
import { SagaStore, wrapper } from 'src/redux/store';

import { Creators } from '@reducers/collaborators';
import Collaborator from '@views/collaborator';

const CollaboratorPage = () => <Collaborator />;

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, params }) => {
    const param = params.collaborator as string;

    const collboratorId = param.replace(/.*-id-/g, '');

    store.dispatch(Creators.collaboratorRequest(collboratorId));
    store.dispatch(Creators.collaboratorFeedbackRequest(collboratorId));
    store.dispatch(END);

    await (store as SagaStore).sagaTask.toPromise();

    return {
      props: {},
    };
  }
);

export default CollaboratorPage;
