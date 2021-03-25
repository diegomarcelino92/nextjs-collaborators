import { Paper, Typography } from '@material-ui/core';

import styled from 'styled-components';

export const StyledPaper = styled(Paper)`
  width: 100% !important;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px;
`;

export const StyledTypography = styled(Typography)`
  font-style: italic;
` as typeof Typography;
