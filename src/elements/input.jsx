import styled from 'styled-components';

import { BaseField } from '../helpers/base-field';

const StyledInput = styled(BaseField).attrs(({ type }) => ({
  type: type || 'text'
}))`
  width: 200px;
  padding: 2px 6px 4px;

  &::placeholder {
    color: currentColor;
  }
`;

export { StyledInput as Input };