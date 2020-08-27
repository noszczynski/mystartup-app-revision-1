import React, { FC } from 'react';
import Title from './components/Title/Title';
import Description from './components/Description/Description';
import Theme from './components/Theme/Theme';
import MainRouter from './views/MainRouter';

const Root: FC = () => (
  <Theme>
    <MainRouter />
    <h1>Regular header</h1>
    <Title>Title Component</Title>
    <Title small>Small title Component</Title>
    <Description>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Consectetur dolorem ea incidunt minus nam quibusdam tenetur ut voluptatem?
      Expedita inventore, maxime necessitatibus placeat praesentium provident
      quaerat quibusdam tempora veniam voluptatibus!
    </Description>
  </Theme>
);

export default Root;
