import React from 'react';
import { storiesOf } from '@storybook/react';
import Router from '../../views/MainRouter';
import Navbar from './Navbar';
import Theme from '../Theme/Theme';

storiesOf('Navbar', module).add('initial', () => (
  <Router>
    <Theme>
      <Navbar />
    </Theme>
  </Router>
));
