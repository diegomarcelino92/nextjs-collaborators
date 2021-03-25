import React from 'react';

import { ImmutableArray } from 'seamless-immutable';

import {
  Avatar,
  Box,
  Button,
  Fade,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core';

import CollaboratorFeedback from '@components/collaborator-feedback';
import { createCollaboratorLink } from '@utils/formatters';

import { StyledPaper } from './styles';

type CollaboratorComponentProps = Collaborator & {
  feedbackList?: ImmutableArray<Feedback>;
  showButton?: boolean;
};

const CollaboratorComponent: React.FC<CollaboratorComponentProps> = ({
  feedbackList,
  showButton,
  createdAt,
  company,
  avatar,
  name,
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
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
        }
        secondaryTypographyProps={{ component: 'h6' }}
        secondary={
          <>
            <Box>
              <Typography component="span">{company}</Typography>
              {` - ${role}`}
            </Box>
            <Typography component="span">{createdAt}</Typography>
          </>
        }
      />

      {showButton && (
        <Box width={{ sm: '100%', md: 'fit-content' }} padding="10px 0">
          <Button
            href={createCollaboratorLink(name, id)}
            title={`Ver ${name}`}
            variant="outlined"
          >
            Ver colaborador
          </Button>
        </Box>
      )}

      <CollaboratorFeedback feedbackList={feedbackList} />
    </StyledPaper>
  </Fade>
);

export default CollaboratorComponent;
