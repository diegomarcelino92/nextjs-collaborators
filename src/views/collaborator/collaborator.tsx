import React from 'react';

import { Box } from '@material-ui/core';

import CollaboratorCard from './components/collaborator-card';

// import { Container } from './styles';

const Collaborator: React.FC = () => (
  <Box padding="20px 0">
    <CollaboratorCard />
  </Box>
);

export default Collaborator;
