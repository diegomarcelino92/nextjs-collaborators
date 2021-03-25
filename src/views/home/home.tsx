import React from 'react';

import ListCollaborators from '@components/list-collaborators';
import PaginationCollaborators from '@components/pagination-collaborators';

import { Container } from './styles';

const Home: React.FC = () => (
  <Container>
    <ListCollaborators />
    <PaginationCollaborators />
  </Container>
);

export default Home;
