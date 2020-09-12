import React, { FC, useEffect, useRef } from 'react';
import { Button } from 'components';
import Title from '../Title/Title';
import Description from '../Description/Description';
import Element from './Hero.styles';
import HeroImage from './HeroImage';
import { hot } from 'react-hot-loader/root';
import gsap from "gsap";

<<<<<<< HEAD
const Hero: FC = () => (
  <Element>
    <Element.Content>
      <Title component="h1">Find a project You want to support</Title>
      <Description>
        here you will find lists of startups that you can support as an investor or set up your own
        startup profile
      </Description>
      <Element.ButtonWrapper>
        <Button>Get started</Button>
        <Element.Blob src={blob} alt="" />
        <Button>Get started</Button>
      </Element.ButtonWrapper>
    </Element.Content>
    <Element.ImageWrapper>
      <Element.MacbookImage
        src={macbook}
        alt="apple macbook showing the appearance of the application"
      />
      <Element.AppImage src={mockup} alt="application mockup" />
    </Element.ImageWrapper>
  </Element>
);

export default Hero;
=======
const Hero: FC = () => {
  const wrapper = useRef(null);

  const animate = () => {
    if (wrapper !== null) {

      const tl = gsap.timeline({defaults: {ease: 'Power3.easeOut'}});

      // @ts-ignore
      const items =  wrapper.current.children

      Array.from(items).forEach((item: any) =>
        tl.fromTo(item,
        {
          x: '-=100%',
          autoAlpha: 0
        },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.75,
        }));
    }
  };

  useEffect(animate, []);

  return (
    <Element>
      <Element.Content ref={wrapper}>
        <Title component="h1">
          Find a project You want to support
        </Title>
        <Description>
          here you will find lists of startups that you can support
          as an investor or set up your own startup profile
        </Description>
        <Element.ButtonWrapper>
          <Button>Become an investor</Button>
          <Button>Create a startup</Button>
        </Element.ButtonWrapper>
      </Element.Content>
      <HeroImage />
    </Element>
  );
}

export default hot(Hero);
>>>>>>> develop
