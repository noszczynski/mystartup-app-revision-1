import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Router from '../../views/MainRouter';
import Navbar from './Navbar';
import Theme from '../Theme/Theme';

storiesOf('Navbar', module).add('initial', () => {
  return (
    <Router>
      <Theme>
        <Navbar />
        <button type="button" onClick={() => null}>toggle nav</button>
      </Theme>
    </Router>
  );
});
