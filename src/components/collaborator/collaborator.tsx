import React from 'react';

import {
  Avatar,
  Box,
  Button,
  Fade,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core';

import { StyledPaper } from './styles';

type CollaboratorProps = Collaborator

const CollaboratorComponent: React.FC<CollaboratorProps> = ({
  avatar, name, company, role,
}) => (
  <Fade in>
    <StyledPaper>
      <ListItemAvatar>
        <Avatar src={avatar} alt={name} />
      </ListItemAvatar>
      <ListItemText
        primary={(
          <Typography component="h6" variant="h6">
            {name}
          </Typography>
        )}
        secondary={(
          <>
            <Typography component="span">
              {company}
            </Typography>
            {` - ${role}`}
          </>

        )}
      />

      <Box width={{ sm: '100%', md: 'fit-content' }} padding="10px 0">
        <Button variant="outlined">Ver colaborador</Button>
      </Box>
    </StyledPaper>
  </Fade>
);

export default CollaboratorComponent;
