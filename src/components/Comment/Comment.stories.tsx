import React from 'react';
import { storiesOf } from '@storybook/react';
import Theme from '../Theme/Theme';
import Comment from './Comment';

const CommentElement: JSX.Element = (
  <Comment
    image="https://api.adorable.io/avatars/120/random"
    name="John Doe"
    signature="Works in Google as Frontend developer"
  >
    Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Animi asperiores dolorum, eveniet maiores modi officia!
    Ab architecto atque cupiditate dolor non pariatur
    porro quae quam quia tempora vel, vitae voluptatum.
  </Comment>
);

storiesOf('Comment', module)
  .add('Comment', (): JSX.Element => <Theme>{CommentElement}</Theme>);
