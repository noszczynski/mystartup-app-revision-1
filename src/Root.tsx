import React, { FC } from 'react';
import Theme from './components/Theme/Theme';
import MainRouter from './views/MainRouter';

const Root: FC = () => (
  <Theme>
    <MainRouter />
  </Theme>
);

export default Root;
