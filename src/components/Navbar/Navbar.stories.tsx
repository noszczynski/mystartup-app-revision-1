import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Router from '../../views/MainRouter';
import Navbar from './Navbar';
import Theme from '../Theme/Theme';

storiesOf('Navbar', module).add('initial', () => {
  const [state, setState] = useState(false);

  const toggleOpen = (): void => {
    setState((prevState: boolean) => !prevState);
  };

  return (
    <Router>
      <Theme>
        <Navbar open={state} toggle={toggleOpen} />
        <button type="button" onClick={toggleOpen}>toggle nav</button>
      </Theme>
    </Router>
  );
});
