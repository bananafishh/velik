import styled from 'styled-components';

import { Typography, TypographyVariant } from '../elements/typography';
import { Color } from '../tokens/colors';
import { BaseCard } from '../helpers/base-card';

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
    <BaseCard className={className} to="#">
      <article>
        <StyledImage src={image} alt={imageAlt} />

        <StyledContent>
          <StyledTitle>{title}</StyledTitle>
          <StyledDate>{date}</StyledDate>
        </StyledContent>
      </article>
    </BaseCard>
  );
}

export { NewsCard };
