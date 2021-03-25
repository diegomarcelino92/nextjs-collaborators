import React from 'react';

import { connect, ConnectedProps } from 'react-redux';

import { List, ListItem } from '@material-ui/core';

import { generate } from 'shortid';

import CollaboratorComponent from '@components/collaborator/collaborator';
import { RootState } from '@reducers/index';

// import { Container } from './styles';

const mapState = ({ collaborators }: RootState) => ({
  listPage: collaborators.getIn(['listPage']),
});

const mapDispatch = {
  // toggleOn: () => ({ type: 'TOGGLE_IS_ON' })
};

const connector = connect(mapState, mapDispatch);

type ListCollaboratorsProps = ConnectedProps<typeof connector>

const ListCollaborators: React.FC<ListCollaboratorsProps> = ({ listPage }) => (
  <List id="list-collaborators">
    {listPage.map((collaborator) => (
      <ListItem key={generate()}>
        <CollaboratorComponent {...collaborator} />
      </ListItem>
    ))}
  </List>
);

export default connector(ListCollaborators);
