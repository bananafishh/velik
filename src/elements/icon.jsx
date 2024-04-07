import styled, { css } from 'styled-components';
import { IconName } from '../tokens/icons';
import { Color } from '../tokens/colors';

const IconSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

const IconSizeToCss = {
  [IconSize.SMALL]: css`
    width: 16px;
    height: 16px;
  `,
  [IconSize.MEDIUM]: css`
    width: 22px;
    height: 22px;
  `,
  [IconSize.LARGE]: css`
    width: 36px;
    height: 36px;
  `
};

const IconNameToIconSize = {
  [IconName.BAR_CHART_SMALL]: IconSize.SMALL,
  [IconName.HEART_SMALL]: IconSize.SMALL,
  [IconName.ARROW_RIGHT]: IconSize.MEDIUM,
  [IconName.BAR_CHART]: IconSize.MEDIUM,
  [IconName.BIKE_ADULT]: IconSize.MEDIUM,
  [IconName.BIKE_CHILD]: IconSize.MEDIUM,
  [IconName.CHEVRON_DOWN]: IconSize.MEDIUM,
  [IconName.FILTERS]: IconSize.MEDIUM,
  [IconName.HEART]: IconSize.MEDIUM,
  [IconName.SEARCH]: IconSize.MEDIUM,
  [IconName.SHOPPING_CART]: IconSize.MEDIUM,
  [IconName.TELEGRAM]: IconSize.MEDIUM,
  [IconName.USER]: IconSize.MEDIUM,
  [IconName.VK]: IconSize.MEDIUM,
  [IconName.YOUTUBE]: IconSize.MEDIUM,
  [IconName.MENU]: IconSize.LARGE
};

const StyledIcon = styled.svg.attrs(({ color }) => ({
  color: color || Color.ORANGE_30
}))`
  ${({ name }) => IconSizeToCss[IconNameToIconSize[name]]}

  color: ${({ color }) => color};
`;

function Icon({ className, name, color }) {
  const xlinkHref = `#${name}`;  

  return (
    <StyledIcon className={className} name={name} color={color} xmlns='http://www.w3.org/2000/svg'>
      <use xlinkHref={xlinkHref} />
    </StyledIcon>
  );
}

export { Icon };
