import React from 'react';
import { storiesOf } from '@storybook/react';
import Description from './Description';
import Theme from '../Theme/Theme';

const NormalDescription = (
  <Description>
    Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Animi asperiores dolorum, eveniet maiores modi officia!
    Ab architecto atque cupiditate dolor non pariatur
    porro quae quam quia tempora vel, vitae voluptatum.
  </Description>
);

const SmallDescription = (
  <Description small>
    Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Animi asperiores dolorum, eveniet maiores modi officia!
    Ab architecto atque cupiditate dolor non pariatur
    porro quae quam quia tempora vel, vitae voluptatum.
  </Description>
);

storiesOf('Description', module)
  .add('Normal', () => <Theme>{NormalDescription}</Theme>)
  .add('Small', () => <Theme>{SmallDescription}</Theme>);
