import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Typography, TypographyVariant } from '../elements/typography';
import { Color } from '../tokens/colors';
import { Radius } from '../tokens/radiuses';
import { Shadow } from '../tokens/shadows';

const StyledWrapper = styled(Link)`
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

const StyledImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;

  @media (min-width: 768px) {
    height: 100px;
  }
`;

const StyledContent = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 8px;
  padding: 4px 8px 8px;
`;

const StyledTitle = styled(Typography).attrs({
  as: 'h3',
  variant: TypographyVariant.TITLE_4
})``;

const StyledDate = styled(Typography).attrs({
  variant: TypographyVariant.TEXT_2,
  color: Color.ORANGE_30
})``;

function NewsCard({ className, title, date, image, imageAlt }) {
  return (
    <StyledWrapper className={className}>
      <article>
        <StyledImage src={image} alt={imageAlt} />

        <StyledContent>
          <StyledTitle>{title}</StyledTitle>
          <StyledDate>{date}</StyledDate>
        </StyledContent>
      </article>
    </StyledWrapper>
  );
}

export { NewsCard };
