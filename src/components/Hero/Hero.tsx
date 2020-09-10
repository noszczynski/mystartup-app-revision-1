import React, { FC } from 'react';
import { Button } from 'components';
import Title from '../Title/Title';
import Description from '../Description/Description';
import Element from './Hero.styles';
import HeroImage from './HeroImage';

const Hero: FC = () => (
  <Element>
    <Element.Content duration={1} delay={1}>
      <Title component="h1">
        Find a project You want to support
      </Title>
      <Description>
        here you will find lists of startups that you can support
        as an investor or set up your own startup profile
      </Description>
      <Element.ButtonWrapper delay={2}>
        <Button>Become an investor</Button>
        <Button>Create a startup</Button>
      </Element.ButtonWrapper>
    </Element.Content>
    <HeroImage />
  </Element>
);

export default Hero;
