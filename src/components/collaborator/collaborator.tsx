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

import { createCollaboratorLink } from '@utils/formatters';

import { StyledPaper } from './styles';

type CollaboratorComponentProps = Collaborator;

const CollaboratorComponent: React.FC<CollaboratorComponentProps> = ({
  avatar,
  name,
  company,
  role,
  id,
}) => (
  <Fade in>
    <StyledPaper>
      <ListItemAvatar>
        <Avatar src={avatar} alt={name} />
      </ListItemAvatar>

      <ListItemText
        primary={
          <Typography component="h6" variant="h6">
            {name}
          </Typography>
        }
        secondary={
          <>
            <Typography component="span">{company}</Typography>
            {` - ${role}`}
          </>
        }
      />

      <Box width={{ sm: '100%', md: 'fit-content' }} padding="10px 0">
        <Button
          href={createCollaboratorLink(name, id)}
          title={`Ver ${name}`}
          variant="outlined"
        >
          Ver colaborador
        </Button>
      </Box>
    </StyledPaper>
  </Fade>
);

export default CollaboratorComponent;
