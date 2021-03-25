import React from 'react';

import { connect, ConnectedProps } from 'react-redux';

import { List, ListItem } from '@material-ui/core';

import { generate } from 'shortid';

import CollaboratorComponent from '@components/collaborator/collaborator';
import { RootState } from '@reducers/index';

const mapState = ({ collaborators }: RootState) => ({
  listPage: collaborators.getIn(['listPage']),
});

const connector = connect(mapState);

type ListCollaboratorsProps = ConnectedProps<typeof connector>;

const ListCollaborators: React.FC<ListCollaboratorsProps> = ({ listPage }) => (
  <List id="list-collaborators">
    {listPage.map((collaborator) => (
      <ListItem key={generate()}>
        <CollaboratorComponent {...collaborator} showButton />
      </ListItem>
    ))}
  </List>
);

export default connector(ListCollaborators);
