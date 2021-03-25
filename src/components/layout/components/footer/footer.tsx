import React from 'react';

import { Box, Typography } from '@material-ui/core';

const Footer: React.FC = () => (
  <Box
    component="footer"
    display="flex"
    justifyContent="center"
    padding="50px 10px"
    width="100%"
    bgcolor="secondary.main"
  >
    <Typography>
      by diegomarcelino92
    </Typography>
  </Box>
);

export default Footer;
