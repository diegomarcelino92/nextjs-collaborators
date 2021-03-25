import React from 'react';

import { connect, ConnectedProps } from 'react-redux';

import CollaboratorComponent from '@components/collaborator';
import { RootState } from '@reducers/index';

const mapState = ({ collaborators }: RootState) => ({
  collaborator: collaborators.getIn(['collaborator']),
  collaboratorFeedback: collaborators.getIn(['collaboratorFeedback']),
});

const connector = connect(mapState);

type ListCollaboratorsProps = ConnectedProps<typeof connector>;

const CollaboratorCard: React.FC<ListCollaboratorsProps> = ({
  collaborator,
  collaboratorFeedback,
}) => (
  <CollaboratorComponent
    {...collaborator}
    feedbackList={collaboratorFeedback}
  />
);

export default connector(CollaboratorCard);
