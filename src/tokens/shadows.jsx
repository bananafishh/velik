import { createGlobalStyle } from 'styled-components';
import { Color } from './colors';

const Shadow = {
  CARD_DEFAULT_CHILD: 'var(--shadow-card-default-child)',
  CARD_HOVER_ADULT: 'var(--shadow-card-hover-adult)',
  CARD_HOVER_CHILD: 'var(--shadow-card-hover-child)'
};

const GlobalShadows = createGlobalStyle`
  :root {
    --shadow-card-default-child: 0 4px 10px rgba(0, 0, 0, 0.07);
    --shadow-card-hover-adult: inset 0 0 0 1px ${Color.ORANGE_30};
    --shadow-card-hover-child: inset 0 0 0 1px ${Color.GREEN_30};
  }
`;

export { Shadow, GlobalShadows };
