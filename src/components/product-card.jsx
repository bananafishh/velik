import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';
import { Radius } from '../tokens/radiuses';
import { Typography, TypographyVariant } from '../elements/typography';
import { Button, ButtonVariant } from '../elements/button';
import { IconButton } from '../elements/icon-button';
import { Icon } from '../elements/icon';
import { IconName } from '../tokens/icons';
import { Color } from '../tokens/colors';
import { Shadow } from '../tokens/shadows';

const StyledImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;

  @media (min-width: 768px) {
    height: 100px;
  }
`;

const StyledContent = styled.div`
  padding: 4px 8px 8px;
`;

const StyledTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 8px;
`;

const StyledName = styled(Typography).attrs({
  as: 'h3',
  variant: TypographyVariant.TEXT_1
})``;

const StyledPrice = styled(Typography).attrs({
  variant: TypographyVariant.TITLE_4
})``;

const StyledButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const StyledMoreButton = styled(Button).attrs({
  variant: ButtonVariant.OUTLINED
})``;

const StyledLabels = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;
`;

const StyledLabel = styled(Typography).attrs({
  variant: TypographyVariant.TEXT_2
})`
  padding: 2px 4px 4px;
  border-radius: ${Radius[4]};
  background-color: ${Color.GRAY_40};
`;

const StyledIconButtons = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  display: flex;
  gap: 4px;
`;

const StyledIconButton = styled(IconButton)`
  padding: 4px;
  border-radius: 50%;
  background-color: ${Color.GRAY_40};

  &:disabled {
    color: ${Color.WHITE};
    background-color: ${Color.GRAY_30};
  }
`;

const DISABLED_CSS = css`
  cursor: not-allowed;

  ${StyledImage} {
    opacity: 0.4;
  }
  
  ${StyledName},
  ${StyledPrice} {
    color: ${Color.GRAY_30};
  }

  ${StyledLabel} {
    background-color: ${Color.GRAY_30};
  }

  &::after {
    display: none;
  }
`;

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

  ${({ isDisabled }) => isDisabled && DISABLED_CSS}
`;

function ProductCard({ className, image, imageAlt, name, price, isBestseller, isNewItem, hasDiscount, isDisabled }) {
  return (
    <StyledWrapper className={className} to="#" isDisabled={isDisabled}>
      <article>
        <StyledImage src={image} alt={imageAlt} />

        <StyledContent>
          <StyledTitle>
            <StyledName>{name}</StyledName>
            <StyledPrice>{price}</StyledPrice>
          </StyledTitle>
          
          <StyledButtons>
            <Button disabled={isDisabled}>Купить</Button>
            <StyledMoreButton disabled={isDisabled}>Подробнее</StyledMoreButton>
          </StyledButtons>
        </StyledContent>

        <StyledLabels>
          {isBestseller && <StyledLabel>Хит</StyledLabel>}
          {isNewItem && <StyledLabel>Новинка</StyledLabel>}
          {hasDiscount && <StyledLabel>Скидка</StyledLabel>}
        </StyledLabels>

        <StyledIconButtons>
          <StyledIconButton aria-label="Добавить товар в сравнения" disabled={isDisabled}>
            <Icon name={IconName.BAR_CHART_SMALL} />
          </StyledIconButton>

          <StyledIconButton aria-label="Добавить товар в сравнения" disabled={isDisabled}>
            <Icon name={IconName.HEART_SMALL} />
          </StyledIconButton>
        </StyledIconButtons>
      </article>
    </StyledWrapper>
  );
}

export { ProductCard };
