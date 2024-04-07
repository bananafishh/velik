import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';
import { BaseButton } from '../helpers/base-button';
import { Color } from '../tokens/colors';
import { Radius } from '../tokens/radiuses';


const ButtonSize = {
  MEDIUM: 'medium',
  LARGE: 'large'
};

const ButtonVariant = {
  FILLED: 'filled',
  OUTLINED: 'outlined'
};

const ButtonColor = {
  ORANGE: 'orange',
  GREEN: 'green'
};

const ButtonSizeToCSS = {
  [ButtonSize.MEDIUM]: css`
    padding: 0px 4px 2px;
  `,
  [ButtonSize.LARGE]: css`
    padding: 2px 6px 4px;
  `
};

const ButtonVariantToCss = {
  [ButtonVariant.FILLED]: css`
    color: ${Color.WHITE};
    border-color: transparent;
    background-color: var(--color-button);
  `,
  [ButtonVariant.OUTLINED]: css`
    border-color: var(--color-button);
    color: var(--color-button);
  `
};

const ButtonColorToCss = {
  [ButtonColor.ORANGE]: css`
    --color-button: ${Color.ORANGE_30};

    &:hover,
    &:focus {
      --color-button: ${Color.ORANGE_20};
    }

    &:active {
      --color-button: ${Color.ORANGE_40};
    }
  `,
  [ButtonColor.GREEN]: css`
    --color-button: ${Color.GREEN_30};

    &:hover,
    &:focus {
      --color-button: ${Color.GREEN_20};
    }

    &:active {
      --color-button: ${Color.GREEN_40};
    }
  `
};

const CSS = css`
  ${({ size }) => ButtonSizeToCSS[size]}
  ${({ variant }) => ButtonVariantToCss[variant]}
  ${({ color }) => ButtonColorToCss[color]}

  display: inline-flex;
  align-items: center;
  gap: 4px;

  font-size: 16px;
  line-height: 22px;
  border-width: 1px;
  border-style: solid;
  border-radius: ${Radius[4]};

  &:disabled {
    --color-button: ${Color.GRAY_30};
  }

  svg {
    color: currentColor;
  }
`;

const attrsFactory = ({ size, variant, color }) => ({
  size: size || ButtonSize.MEDIUM,
  variant: variant || ButtonVariant.FILLED,
  color: color || ButtonColor.ORANGE
});

const StyledButton = styled(BaseButton).attrs(attrsFactory)`
  ${CSS}
`;

const StyledLink = styled(Link).attrs(attrsFactory)`
  ${CSS}
`;

export { 
  ButtonSize, 
  ButtonVariant, 
  ButtonColor, 
  StyledButton as Button,
  StyledLink as Link
};
