import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'utils/globalStyle';
import theme from 'theme/theme';

const Theme: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default Theme;
