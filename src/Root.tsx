import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeContextProvider } from 'contexts/ThemeContext';
import Theme from './components/Theme/Theme';
import MainRouter from './views/MainRouter';

const Root: FC = () => {
  return (
    <ThemeContextProvider>
      <Theme>
        <Router>
          <MainRouter />
        </Router>
      </Theme>
    </ThemeContextProvider>
  );
};

export default Root;
