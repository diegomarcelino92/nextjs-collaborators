import React from 'react';

import { Box, IconButton } from '@material-ui/core';
import { Home } from '@material-ui/icons';

import SwitchTheme from '@components/switch-theme';
import { MAX_WIDTH } from '@utils/contants';

const Header: React.FC = () => (
  <Box
    component="header"
    padding="10px"
    display="flex"
    justifyContent="center"
    bgcolor="primary.main"
    width="100%"
  >
    <Box display="flex" flex="1" maxWidth={MAX_WIDTH}>
      <Box flex="1">
        <IconButton href="/">
          <Home fontSize="large" />
        </IconButton>
      </Box>
      <SwitchTheme />
    </Box>
  </Box>
);

export default Header;
