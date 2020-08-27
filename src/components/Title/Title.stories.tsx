import React from 'react';
import { storiesOf } from '@storybook/react';
import Title from './Title';
import Theme from '../Theme/Theme';

const NormalTitle: JSX.Element = <Title>Normal size Header</Title>;
const SmallTitle: JSX.Element = <Title small>Small size Header</Title>;

storiesOf('Title', module)
  .add('Normal', (): JSX.Element => <Theme>{NormalTitle}</Theme>)
  .add('Small', (): JSX.Element => <Theme>{SmallTitle}</Theme>);
