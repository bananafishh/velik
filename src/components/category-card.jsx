import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Typography, TypographyVariant } from '../elements/typography';
import { Color } from '../tokens/colors';
import { Radius } from '../tokens/radiuses';
import { Shadow } from '../tokens/shadows';

const StyledCategoryCard = styled.article`
  position: relative;
  height: 140px;
  padding: 0 8px;
  border-radius: ${Radius[4]};
  overflow: hidden;

  @media (min-width: 768px) {
    height: 100px;
  }
`;

const StyledWrapper = styled(Link)`
  &:hover,
  &:focus {
    ${StyledCategoryCard} {
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: ${Radius[4]};
        box-shadow: ${Shadow.CARD_HOVER_ADULT};
        pointer-events: none;
      }
    }
  }
`;

const StyledName = styled(Typography).attrs({
  as: 'h3',
  variant: TypographyVariant.TITLE_3
})`
  position: relative;
`;

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledAmount = styled(Typography).attrs({
  variant: TypographyVariant.TEXT_2
})`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0 4px 4px;
  border-radius: ${Radius[4]};
  background-color: ${Color.ORANGE_30};
`;

function CategoryCard({ className, name, amount, image, imageAlt }) {
  return (
    <StyledWrapper className={className} to='#'>
      <StyledCategoryCard>
        <StyledImage src={image} imageAlt={imageAlt} />
        <StyledName>{name}</StyledName>
        <StyledAmount>{amount}</StyledAmount>
      </StyledCategoryCard>
    </StyledWrapper>
  );
}

export { CategoryCard };