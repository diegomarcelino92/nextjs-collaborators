import React from 'react';

import { connect, ConnectedProps } from 'react-redux';

import { bindActionCreators } from 'redux';

import { ImmutableArray } from 'seamless-immutable';

import {
  Badge,
  Box,
  CircularProgress,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { Delete, ThumbUp } from '@material-ui/icons';

import dayjs from 'dayjs';

import { Creators } from '@reducers/collaborators';
import { RootState } from '@reducers/index';
import { diffInMin } from '@utils/date';

const mapState = ({ collaborators }: RootState) => ({
  loading: collaborators.getIn(['loading']),
});

const mapDispatch = (dispatch) =>
  bindActionCreators(
    {
      likeFeedbackRequest: Creators.likeFeedbackRequest,
      deleteFeedbackRequest: Creators.deleteFeedbackRequest,
    },
    dispatch
  );

const connector = connect(mapState, mapDispatch);

type CollaboratorFeedbackProps = ConnectedProps<typeof connector> & {
  feedbackList: ImmutableArray<Feedback>;
};

const CollaboratorFeedback: React.FC<CollaboratorFeedbackProps> = ({
  deleteFeedbackRequest,
  likeFeedbackRequest,
  feedbackList,
  loading,
}) => (
  <>
    {feedbackList && feedbackList.length > 0 && (
      <Box width="100%">
        <List>
          {feedbackList.map((feed) => (
            <ListItem divider key={feed.id}>
              <ListItemText primary={<Typography>{feed.message}</Typography>} />
              {console.log(diffInMin(feed.createdAt))}

              <ListItemSecondaryAction>
                <IconButton
                  onClick={() => likeFeedbackRequest(feed)}
                  disabled={loading}
                >
                  <Badge color="secondary" badgeContent={feed.like}>
                    {loading && (
                      <CircularProgress color="secondary" size={23} />
                    )}
                    {!loading && <ThumbUp />}
                  </Badge>
                </IconButton>

                <IconButton
                  onClick={() => deleteFeedbackRequest(feed)}
                  disabled={loading}
                >
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>
    )}
  </>
);

export default connector(CollaboratorFeedback);
