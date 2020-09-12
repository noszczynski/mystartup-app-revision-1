import React,{ Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Theme from '../Theme/Theme';
import Box from './Box';

const BoxElement: JSX.Element = (
  <Fragment>
    <Box pt={4}>aaaaa</Box>
    <Box my={6}>bbb</Box>
    <Box width="100%" flex justifyBetween>
      <Box>aa</Box>
      <Box>bbb</Box>
    </Box>
  </Fragment>
);

storiesOf('Box', module)
  .add('Box', (): JSX.Element => <Theme>{BoxElement}</Theme>);
