import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Theme from '../Theme/Theme';
import Button from './Button';

const ButtonElement: JSX.Element = (
  <Fragment>
    <Button mr={2} color="gray900">
      Button as a button(custom font color).
    </Button>
    <Button to="/home" btnSize="sm" bgColor="yellow">
      Button as a Link(small,custom bg color).
    </Button>
  </Fragment>
);

storiesOf('Button', module)
  /* .addDecorator(StoryRouter()) */
  .add('Button', (): JSX.Element => <Theme>{ButtonElement}</Theme>);
