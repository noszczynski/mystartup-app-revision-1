import React, { FC } from 'react';
import { Button } from 'components';
import Title from '../Title/Title';
import Description from '../Description/Description';
import blob from '../../assets/blob.svg';
import macbook from '../../assets/macbook.png';
import mockup from '../../assets/aplication-mockup.png';
import {
  StyledHero,
  StyledButtonWrapper,
  StyledBlob,
  StyledMacbookImage,
  StyledAppImage,
  StyledImageWrapper,
  StyledContent,
} from './Hero.styles';

const Hero: FC = () => (
  <StyledHero>
    <StyledContent>
      <Title component="h1">
        Find a project You want to support
      </Title>
      <Description>
        here you will find lists of startups that you can support
        as an investor or set up your own startup profile
      </Description>
      <StyledButtonWrapper>
        <Button>Get started</Button>
        <StyledBlob src={blob} alt="" />
        <Button>Get started</Button>
      </StyledButtonWrapper>
    </StyledContent>
    <StyledImageWrapper>
      <StyledMacbookImage src={macbook} alt="apple macbook showing the appearance of the application" />
      <StyledAppImage src={mockup} alt="application mockup" />
    </StyledImageWrapper>
  </StyledHero>
);

export default Hero;
