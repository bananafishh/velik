import styled from 'styled-components';

import { Icon } from './icon';
import { IconName } from '../tokens/icons';
import { Color } from '../tokens/colors';

const StyledWrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

const StyledFilter = styled.select`
  appearance: none;
  padding-right: 26px;
  font-size: 16px;
  line-height: 22px;
  color: ${Color.WHITE};
  cursor: pointer;
  box-sizing: border-box;

  + svg {
    color: ${Color.WHITE};
  }

  &:hover {
    color: ${Color.ORANGE_20};

    + svg {
      color: ${Color.ORANGE_20};
    }
  }

  &:focus {
    outline: none;
    color: ${Color.ORANGE_40};

    + svg {
      color: ${Color.ORANGE_40};
    }
  }
`;

const StyledChevron = styled(Icon).attrs({
  name: IconName.CHEVRON_DOWN
})`
  position: absolute;
  right: 0;
  pointer-events: none;
`;

function Filter({ className, label, children }) {
  return (
    <StyledWrapper className={className}>
      <StyledFilter aria-label={label}>
        {children}
      </StyledFilter>

      <StyledChevron />
    </StyledWrapper>
  );
}

export { Filter };