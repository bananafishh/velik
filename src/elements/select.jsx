import styled from 'styled-components';

import { BaseField } from '../helpers/base-field';
import { Icon } from './icon';
import { IconName } from '../tokens/icons';
import { Color } from '../tokens/colors';

const StyledSelect = styled(BaseField).attrs({
  as: 'select'
})`
  appearance: none;
  width: 100%;
  padding: 0 26px 2px 4px;
  cursor: pointer;

  &:hover {
    + svg {
      color: ${Color.ORANGE_20};
    }
  }

  &:focus {
    + svg {
      color: ${Color.ORANGE_40};
    }
  }
`;

const StyledChevron = styled(Icon).attrs({
  name: IconName.CHEVRON_DOWN
})`
  position: absolute;
  top: 1px;
  right: 1px;
  pointer-events: none;
`;

const StyledWrapper = styled.div`
  position: relative;
  display: inline-flex;
  width: 200px;
`;

function Select({ className, label, children }) {
  return (
    <StyledWrapper className={className}>
      <StyledSelect aria-label={label}>
        {children}
      </StyledSelect>

      <StyledChevron />
    </StyledWrapper>
  );
}

export { Select };