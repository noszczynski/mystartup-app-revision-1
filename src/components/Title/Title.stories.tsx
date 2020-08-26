import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import Title from './Title';
import Theme from '../Theme/Theme';

const Normal = <Title>Normal size Header</Title>;
const Small = <Title small>Small size Header</Title>;

storiesOf('Title', module)
  .add('Normal', () => <Theme>{Normal}</Theme>)
  .add('Small', () => <Theme>{Small}</Theme>);
