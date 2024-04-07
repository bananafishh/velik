import { useState, useId } from 'react';
import styled from 'styled-components';

import { BaseButton } from '../helpers/base-button';
import { Typography, TypographyVariant } from './typography';
import { Color } from '../tokens/colors';
import { Radius } from '../tokens/radiuses';

const StyledToggle = styled(BaseButton)`
  position: relative;
  width: 22px;
  height: 22px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 8px;
    border-radius: ${Radius[4]};
    background-color: ${Color.GRAY_10};
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${Color.GRAY_20};
    transition: transform .1s ease-out;
  }

  &[aria-checked='true'] {
    &::before {
      background-color: ${Color.ORANGE_10};
    }

    &::after {
      background-color: ${Color.ORANGE_30};
      transform: translate(10px, -50%);
    }

    &:hover,
    &:focus {
      &::after {
        background-color: ${Color.ORANGE_20};
      }
    }

    &:active {
      &::after {
        background-color: ${Color.ORANGE_40};
      }
    }
  }
`;

const StyledLabel = styled(Typography).attrs({
  as: 'label',
  variant: TypographyVariant.TEXT_1
})`
  padding-left: 8px;
  cursor: pointer;
`;

const StyledWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

function Toggle({ className, label }) {
  const id = useId();
  const [isChecked, setIsChecked] = useState('false');

  const toggle = () => setIsChecked(!isChecked);

  return (
    <StyledWrapper className={className}>
      <StyledToggle
        id={id}
        role='checkbox'
        aria-checked={isChecked}
        onClick={toggle}
      />

      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </StyledWrapper>
  );
}

export { Toggle };