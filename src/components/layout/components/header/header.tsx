import React from 'react';

import { Box } from '@material-ui/core';

import SwitchTheme from '@components/switch-theme';

import { Container } from './styles';

const Header: React.FC = () => (
  <Box
    component="header"
    padding="20px 10px"
    display="flex"
    justifyContent="center"
    bgcolor="primary.main"
    width="100%"
  >
    <SwitchTheme />
  </Box>
);

export default Header;
