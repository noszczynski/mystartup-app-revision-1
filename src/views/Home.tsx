import React, { FC } from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero/Hero';
import CommentList from '../components/HomeSections/CommentList';
import Advantages from '../components/Advantages/Advantages';

const StyledWrapper = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.size.space.xxl};
  padding-bottom: 4rem;
`;

const Home: FC = () => (
  <StyledWrapper>
    <Hero />
    <Advantages />
    <CommentList />
  </StyledWrapper>
);

export default Home;
