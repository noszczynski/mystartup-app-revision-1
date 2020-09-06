import React, { FC } from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader/root';
import Hero from '../components/Hero/Hero';
import CommentList from '../components/HomeSections/CommentList';
import Advantages from '../components/Advantages/Advantages';
import ArticleList from '../components/ArticleList/ArticleList';

const StyledWrapper = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.size.space.xxl};
  padding-bottom: 4rem;
`;

const Home: FC = () => {
  return (
    <StyledWrapper>
      <Hero />
      <Advantages />
      <CommentList />
      <ArticleList />
    </StyledWrapper>
  );
};

export default hot(Home);
