import { createGlobalStyle } from 'styled-components';

import commissionerRegular from '../fonts/commissioner-regular.woff2';
import commissionerSemiBold from '../fonts/commissioner-semi-bold.woff2';
import delaGothicOneRegular from '../fonts/dela-gothic-one-regular.woff2';

const Font = {
  COMMISSIONER: 'var(--font-commissioner)',
  DELA_GOTHIC_ONE: 'var(--font-dela-gothic-one)'
};

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: Commissioner;
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${commissionerRegular});
  }

  @font-face {
    font-family: Commissioner;
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(${commissionerSemiBold});
  }

  @font-face {
    font-family: 'Dela Gothic One';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${delaGothicOneRegular});
  }

  :root {
    --font-commissioner: Commissioner, Arial, sans-serif;
    --font-dela-gothic-one: 'Dela Gothic One', var(--font-commissioner);
  }
`;

export { Font, GlobalFonts };