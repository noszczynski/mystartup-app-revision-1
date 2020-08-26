import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/theme';
import GlobalStyle from '../../globalStyle';

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default Theme;
