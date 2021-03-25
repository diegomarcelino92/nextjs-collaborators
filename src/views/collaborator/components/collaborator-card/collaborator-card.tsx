import React from 'react';

import { connect, ConnectedProps } from 'react-redux';

import CollaboratorComponent from '@components/collaborator';
import { RootState } from '@reducers/index';

const mapState = ({ collaborators }: RootState) => ({
  collaborator: collaborators.getIn(['collaborator']),
  collaboratorFeedback: collaborators.getIn(['collaboratorFeedbackListPage']),
});

const connector = connect(mapState);

type ListCollaboratorsProps = ConnectedProps<typeof connector>;

const CollaboratorCard: React.FC<ListCollaboratorsProps> = ({
  collaborator,
  collaboratorFeedback,
}) => (
  <CollaboratorComponent
    feedbackList={collaboratorFeedback}
    {...collaborator}
    showForm
    showInfo
  />
);

export default connector(CollaboratorCard);
