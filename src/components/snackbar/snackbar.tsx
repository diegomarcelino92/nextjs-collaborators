import React from 'react';

import { connect, ConnectedProps } from 'react-redux';

import { bindActionCreators } from 'redux';

import { Snackbar } from '@material-ui/core';
import { Alert, AlertProps } from '@material-ui/lab';

import { Creators } from '@reducers/app';
import { RootState } from '@reducers/index';

const mapState = ({ app }: RootState) => ({
  ...app.getIn(['snackbar']),
});

const mapDispatch = (dispatch) =>
  bindActionCreators(
    {
      snackbarRequest: Creators.snackbarRequest,
    },
    dispatch
  );

const connector = connect(mapState, mapDispatch);

type PaginationProps = ConnectedProps<typeof connector> &
  AlertProps & {
    message: string;
  };

const SnackbarComponent: React.FC<PaginationProps> = ({
  snackbarRequest,
  severity,
  message,
  open,
}) => (
  <Snackbar
    open={open}
    autoHideDuration={6000}
    onClose={() => snackbarRequest({ open: false })}
    anchorOrigin={{
      horizontal: 'right',
      vertical: 'top',
    }}
  >
    <Alert severity={severity} onClose={() => snackbarRequest({ open: false })}>
      {message}
    </Alert>
  </Snackbar>
);

export default connector(SnackbarComponent);
