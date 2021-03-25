import React, { ChangeEvent, useState } from 'react';

import { connect, ConnectedProps } from 'react-redux';

import { bindActionCreators } from 'redux';

import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogProps,
  DialogTitle,
  TextField,
} from '@material-ui/core';

import { Creators } from '@reducers/collaborators';

const mapState = () => ({});

const mapDispatch = (dispatch) =>
  bindActionCreators(
    {
      sendFeedbackRequest: Creators.sendFeedbackRequest,
    },
    dispatch
  );

const connector = connect(mapState, mapDispatch);

type FeedbackFormProps = ConnectedProps<typeof connector> & DialogProps;

const FeedbackForm: React.FC<FeedbackFormProps> = ({
  sendFeedbackRequest,
  onClose,
  open,
}) => {
  const [message, setMessage] = useState('');

  const isValid = message.length > 5;

  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    setMessage(target.value);
  }

  function onSubmit() {
    if (isValid) {
      sendFeedbackRequest({ message });
      setMessage('');
      onClose({}, 'escapeKeyDown');
    }
  }

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Criar Feedback</DialogTitle>
      <DialogContent>
        <Box
          flexDirection="column"
          alignContent="center"
          display="flex"
          width="100%"
        >
          <TextField
            helperText={!isValid && 'Feedback muito pequeno'}
            onChange={handleChange}
            variant="outlined"
            label="Descrição"
            error={!isValid}
            value={message}
            fullWidth
          />
          <Box padding="20px 0">
            <Button
              color="secondary"
              variant="contained"
              fullWidth
              onClick={onSubmit}
            >
              Enviar
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default connector(FeedbackForm);
