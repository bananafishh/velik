import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Typography, TypographyVariant } from '../elements/typography';
import { Color } from '../tokens/colors';
import { Radius } from '../tokens/radiuses';
import { Shadow } from '../tokens/shadows';

const StyledWrapper = styled(Link)`
  position: relative;
  display: grid;
  height: 140px;
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

  @media (min-width: 768px) {
    height: 100px;
  }
`;

const StyledCategoryCard = styled.article`
  position: relative;
  padding: 0 8px;
`;

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledName = styled(Typography).attrs({
  as: 'h3',
  variant: TypographyVariant.TITLE_3
})`
  position: relative;
`;

const StyledAmount = styled(Typography).attrs({
  variant: TypographyVariant.TEXT_2
})`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 2px 4px 4px;
  border-radius: ${Radius[4]};
  background-color: ${Color.ORANGE_30};
`;

function CategoryCard({ className, name, amount, image, imageAlt }) {
  return (
    <StyledWrapper className={className} to='#'>
      <StyledCategoryCard>
        <StyledImage src={image} alt={imageAlt} />
        <StyledName>{name}</StyledName>
        <StyledAmount>{amount}</StyledAmount>
      </StyledCategoryCard>
    </StyledWrapper>
  );
}

export { CategoryCard };
