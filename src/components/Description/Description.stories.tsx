import React from 'react';
import { storiesOf } from '@storybook/react';
import Description from './Description';
import Theme from '../Theme/Theme';

const NormalDescription: JSX.Element = (
  <Description>
    Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Animi asperiores dolorum, eveniet maiores modi officia!
    Ab architecto atque cupiditate dolor non pariatur
    porro quae quam quia tempora vel, vitae voluptatum.
  </Description>
);

const SmallDescription: JSX.Element = (
  <Description small>
    Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Animi asperiores dolorum, eveniet maiores modi officia!
    Ab architecto atque cupiditate dolor non pariatur
    porro quae quam quia tempora vel, vitae voluptatum.
  </Description>
);

storiesOf('Description', module)
  .add('Normal', (): JSX.Element => <Theme>{NormalDescription}</Theme>)
  .add('Small', (): JSX.Element => <Theme>{SmallDescription}</Theme>);
