import React,{ Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Theme from '../Theme/Theme';
import Box from './Box';

const BoxElement: JSX.Element = (
  <Fragment>
    <Box pt={4}>Lorem</Box>
    <Box my={6}>ipsum</Box>
    <Box width="100%" flex justify="space-between">
      <Box color="red">Left</Box>
      <Box color="blue">Right</Box>
    </Box>
  </Fragment>
);

storiesOf('Box', module)
  .add('Box', (): JSX.Element => <Theme>{BoxElement}</Theme>);
