import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import GlobalStyle from './globalStyle';

const Root: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <h1>Header</h1>
    <h2>Header</h2>
    <h3>Header</h3>
    <h4>Header</h4>
    <h5>Header</h5>
    <p>content</p>
  </ThemeProvider>
);

export default Root;
