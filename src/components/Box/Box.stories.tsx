import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { storiesOf } from '@storybook/react';
import Theme from '../Theme/Theme';
import Box from './Box';

const RedBox = styled(Box)`
  ${({ theme }) => css`
    background: ${theme.color.red};
  `}
`;

const BlueBox = styled(Box)`
  ${({ theme }) => css`
    background: ${theme.color.blue};
    border: 1px dotted black;
  `}
`;

const BoxElement: JSX.Element = (
  <Fragment>
    <Box flex column>
      <RedBox color="red">
        <BlueBox pt={1} mb={2}>
          Padding top 1 unit (0.25rem). Margin bottom 2 unit (0.5rem).
        </BlueBox>
      </RedBox>
      <RedBox color="red">
        <BlueBox pb={1} mt={2}>
          Padding bottom 1 unit (0.25rem). Margin top 2 unit (0.5rem).
        </BlueBox>
      </RedBox>
      <Box my={6} flex width="100%" justify="center">
        Flex, justify center, width=100%, margin top&bottom = 6 unit (1.5rem).
      </Box>
      <Box width="100%" height="100px" flex justify="space-between">
        <Box color="red">Left</Box>
        <Box color="blue">Right</Box>
      </Box>
    </Box>
  </Fragment>
);

storiesOf('Box', module).add('Box', (): JSX.Element => <Theme>{BoxElement}</Theme>);
