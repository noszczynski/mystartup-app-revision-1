import React, { FC, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'utils/globalStyle';
import { useThemeContext } from '../../contexts/ThemeContext';
import { THEME } from '../../utils/constants';
import { contrastTheme, darkTheme, lightTheme } from '../../theme/theme';

const Theme: FC = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState(null)
  const { theme } = useThemeContext()

  const getTheme = (): any => {
    switch (theme) {
      case THEME.DARK: return darkTheme
      case THEME.CONTRAST: return contrastTheme
      default: return lightTheme
    }
  };

  useEffect(() => setActiveTheme(getTheme()), [theme, getTheme])

  return activeTheme && (
    <ThemeProvider theme={activeTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default Theme;
