import React  from 'react';
import { storiesOf } from '@storybook/react';
import Navbar from './Navbar';
import Theme from '../Theme/Theme';
import MainRouter from '../../views/MainRouter';

storiesOf('Navbar', module).add('initial', () => {
  return (
    <MainRouter>
      <Theme>
        <Navbar />
        <button type="button" onClick={() => null}>toggle nav</button>
      </Theme>
    </MainRouter>
  );
});
