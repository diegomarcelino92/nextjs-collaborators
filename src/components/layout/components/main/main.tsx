import React from 'react';

import { Box } from '@material-ui/core';

import { MAX_WIDTH } from '@utils/contants';

// import { Container } from './styles';

const Main: React.FC = ({ children }) => (
  <Box component="main" flex="1" width="100%" maxWidth={MAX_WIDTH}>
    {children}
  </Box>
);

export default Main;
