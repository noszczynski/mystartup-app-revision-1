import React from 'react';
import { storiesOf } from '@storybook/react';
import Title from './Title';
import Theme from '../Theme/Theme';

const NormalTitle = <Title>Normal size Header</Title>;
const SmallTitle = <Title small>Small size Header</Title>;

storiesOf('Title', module)
  .add('Normal', () => <Theme>{NormalTitle}</Theme>)
  .add('Small', () => <Theme>{SmallTitle}</Theme>);
