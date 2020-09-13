import React, { FC, useEffect, useRef } from 'react';
import { Button, Title, Description } from 'components';
import { hot } from 'react-hot-loader/root';
import gsap from 'gsap';

import Element from './Hero.styles';
import HeroImage from './HeroImage';

const Hero: FC = () => {
  return (
    <Element>
      <Element.Content>
        <Element.ContentInner>
          <AnimateContent>
            <Title component="h1">Find a project You want to support</Title>
          </AnimateContent>
          <AnimateContent delay={1}>
            <Description>
              here you will find lists of startups that you can support as an investor or set up
              your own startup profile
            </Description>
          </AnimateContent>
          <AnimateContent color={colors.blue} delay={1.2}>
            <Element.ButtonWrapper>
              <Button>Become an investor</Button>
              <Button>Create a startup</Button>
            </Element.ButtonWrapper>
          </AnimateContent>
        </Element.ContentInner>
      </Element.Content>
      <HeroImage />
    </Element>
  );
};

export default hot(Hero);
