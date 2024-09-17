import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Color } from '../tokens/colors';
import { Radius } from '../tokens/radiuses';
import { Shadow } from '../tokens/shadows';

const StyledBaseCard = styled(Link)`
  position: relative;
  display: grid;
  border-radius: ${Radius[4]};
  background-color: ${Color.GRAY_40};
  overflow: hidden;

  &:hover,
  &:focus {
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: ${Radius[4]};
      box-shadow: ${Shadow.CARD_HOVER_ADULT}; 
    }
  }
`;

export { StyledBaseCard as BaseCard }
