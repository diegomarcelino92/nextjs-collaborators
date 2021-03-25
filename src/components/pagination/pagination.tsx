import React from 'react';

import { ImmutableArray } from 'seamless-immutable';

import { Pagination as PaginationMUI } from '@material-ui/lab';

import { anchorTo } from '@utils/transitions';

interface PaginationProps<T> {
  onPaginate: (list: ImmutableArray<T>) => void;
  list: ImmutableArray<T>;
  idAnchorList?: string;
  pages: number;
  show: number;
}

function Pagination<T>({
  idAnchorList,
  onPaginate,
  pages,
  list,
  show,
}: PaginationProps<T>) {
  function onChange(_, page: number) {
    const newList = list.slice((page - 1) * show, page * show);

    onPaginate(newList);

    if (idAnchorList) {
      anchorTo(idAnchorList);
    }
  }

  return <PaginationMUI variant="outlined" count={pages} onChange={onChange} />;
}

export default Pagination;
