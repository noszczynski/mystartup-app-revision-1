import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Theme from './components/Theme/Theme';
import MainRouter from './views/MainRouter';

const Root: FC = () => {
  return (
    <Theme>
      <Router>
        <MainRouter />
      </Router>
    </Theme>
  );
};

export default Root;
