import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import GlobalStyle from './globalStyle';

const Root: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <p>content</p>
  </ThemeProvider>
);

export default Root;
