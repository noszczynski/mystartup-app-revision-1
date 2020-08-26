import React from 'react';
import Title from './components/Title/Title';
import Theme from './components/Theme/Theme';

const Root: React.FC = () => (
  <Theme>
    <h1>Regular header</h1>
    <Title>Title Component</Title>
    <Title small>Small title Component</Title>
  </Theme>
);

export default Root;
