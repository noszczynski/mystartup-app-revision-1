import React from 'react';
import { storiesOf } from '@storybook/react';
import Title from './Title';
import Theme from '../Theme/Theme';

const H1: JSX.Element = <Title component="h1">Header component h1</Title>;
const H2: JSX.Element = <Title component="h2">Header component h2</Title>;
const H3: JSX.Element = <Title component="h3">Header component h3</Title>;
const H4: JSX.Element = <Title component="h4">Header component h4</Title>;
const H5: JSX.Element = <Title component="h5">Header component h5</Title>;
const H6: JSX.Element = <Title component="h6">Header component h6</Title>;

storiesOf('Title', module)
  .add('H1', (): JSX.Element => <Theme>{H1}</Theme>)
  .add('H2', (): JSX.Element => <Theme>{H2}</Theme>)
  .add('H3', (): JSX.Element => <Theme>{H3}</Theme>)
  .add('H4', (): JSX.Element => <Theme>{H4}</Theme>)
  .add('H5', (): JSX.Element => <Theme>{H5}</Theme>)
  .add('H6', (): JSX.Element => <Theme>{H6}</Theme>);
