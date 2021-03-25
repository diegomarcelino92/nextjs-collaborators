import React from 'react';

import { connect, ConnectedProps } from 'react-redux';

import { bindActionCreators } from 'redux';

import { ImmutableArray } from 'seamless-immutable';

import Pagination from '@components/pagination';
import { Creators } from '@reducers/collaborators';
import { RootState } from '@reducers/index';

const mapState = ({ collaborators }: RootState) => ({
  show: collaborators.getIn(['feedbackShow']),
  pages: collaborators.getIn(['feedbackPages']),
  list: collaborators.getIn(['collaboratorFeedbackList']),
});

const mapDispatch = (dispatch) =>
  bindActionCreators(
    {
      paginateCollaboratorsFeedback: Creators.paginateCollaboratorsFeedback,
    },
    dispatch
  );

const connector = connect(mapState, mapDispatch);

type PaginationFeedbackProps = ConnectedProps<typeof connector> & {
  feedbackList: ImmutableArray<Feedback>;
};

const PaginationFeedback: React.FC<PaginationFeedbackProps> = ({
  paginateCollaboratorsFeedback,
  pages,
  show,
  list,
}) => {
  function onPaginate(newList) {
    paginateCollaboratorsFeedback(newList);
  }

  return (
    <Pagination<Feedback>
      onPaginate={onPaginate}
      pages={pages}
      list={list}
      show={show}
    />
  );
};

export default connector(PaginationFeedback);
