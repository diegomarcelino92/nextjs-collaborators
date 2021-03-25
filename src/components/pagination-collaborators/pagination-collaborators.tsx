import React from 'react';

import { connect, ConnectedProps } from 'react-redux';

import { bindActionCreators } from 'redux';

import { Box } from '@material-ui/core';

import Pagination from '@components/pagination/pagination';
import { Creators } from '@reducers/collaborators';
import { RootState } from '@reducers/index';

const mapState = ({ collaborators }: RootState) => ({
  pages: collaborators.getIn(['pages']),
  list: collaborators.getIn(['list']),
});

const mapDispatch = (dispatch) => bindActionCreators(
    {
      paginateCollaborators: Creators.paginateCollaborators,
    },
    dispatch,
  );

const connector = connect(mapState, mapDispatch);

type PaginationProps = ConnectedProps<typeof connector>;

const PaginationCollaborators: React.FC<PaginationProps> = ({
  pages,
  list,
  paginateCollaborators,
}) => (
  <Box width="100%" display="flex" justifyContent="center" padding="20px 10px">
    <Pagination<Collaborator>
      onPaginate={paginateCollaborators}
      idAnchorList="list-collaborators"
      pages={pages}
      list={list}
      show={10}
    />
  </Box>
);

export default connector(PaginationCollaborators);
