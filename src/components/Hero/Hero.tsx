import React, { FC } from 'react';
import { Button,Box } from 'components';
import Title from '../Title/Title';
import Description from '../Description/Description';
import blob from '../../assets/blob.svg';
import macbook from '../../assets/macbook.png';
import mockup from '../../assets/aplication-mockup.png';
import Element from './Hero.styles';

const Hero: FC = () => (
  <Element>
    <Element.Content>
      <Title component="h1">
        Find a project You want to support
      </Title>
      <Description>
        here you will find lists of startups that you can support
        as an investor or set up your own startup profile
      </Description>
      <Element.ButtonWrapper>
        <Button>Get started</Button>
        <Element.Blob src={blob} alt="" />
        <Button>Get started</Button>
        <Box>aaa</Box>
      </Element.ButtonWrapper>
    </Element.Content>
    <Element.ImageWrapper>
      <Element.MacbookImage src={macbook} alt="apple macbook showing the appearance of the application" />
      <Element.AppImage src={mockup} alt="application mockup" />
    </Element.ImageWrapper>
  </Element>
);

export default Hero;
