import React, { useState } from 'react';

import Link from 'next/link';

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
import FeedbackForm from '@components/feedback-form';
import { toLocaleDate } from '@utils/date';
import { createCollaboratorLink } from '@utils/formatters';

import { StyledPaper, StyledTypography } from './styles';

type CollaboratorComponentProps = Collaborator & {
  feedbackList?: ImmutableArray<Feedback>;
  showButton?: boolean;
  showForm?: boolean;
  showInfo?: boolean;
};

const CollaboratorComponent: React.FC<CollaboratorComponentProps> = ({
  feedbackList,
  showButton,
  createdAt,
  showForm,
  showInfo,
  company,
  avatar,
  name,
  role,
  id,
}) => {
  const [open, setOpen] = useState(false);

  function handleModal() {
    setOpen((old) => !old);
  }

  return (
    <Fade in>
      <StyledPaper>
        {showInfo && (
          <ListItemAvatar>
            <Avatar src={avatar} alt={name} />
          </ListItemAvatar>
        )}

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

              {showInfo && (
                <StyledTypography component="span" variant="caption">
                  {`Cadastrado em ${toLocaleDate(createdAt)}`}
                </StyledTypography>
              )}
            </>
          }
        />

        {showButton && (
          <Box width={{ sm: '100%', md: 'fit-content' }} padding="10px 0">
            <Link href={createCollaboratorLink(name, id)}>
              <Button
                color="secondary"
                title={`Ver ${name}`}
                variant="outlined"
              >
                Ver colaborador
              </Button>
            </Link>
          </Box>
        )}

        {showForm && (
          <Box width={{ sm: '100%', md: 'fit-content' }} padding="10px 0">
            <Button
              color="secondary"
              title="Criar feedback"
              variant="outlined"
              onClick={handleModal}
            >
              Criar feedback
            </Button>
          </Box>
        )}

        {showForm && <FeedbackForm open={open} onClose={handleModal} />}
        <CollaboratorFeedback feedbackList={feedbackList} />
      </StyledPaper>
    </Fade>
  );
};

export default CollaboratorComponent;
