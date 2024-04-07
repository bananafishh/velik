import { createGlobalStyle } from 'styled-components';

const Radius = {
  4: 'var(--radius-4)'
};

const GlobalRadiuses = createGlobalStyle`
  :root {
    --radius-4: 4px;
  }
`;

export { Radius, GlobalRadiuses };