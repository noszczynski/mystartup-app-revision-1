import React, { FC } from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader/root';
import { RouteProps } from 'utils/interfaces';
import { Page,ArticleList } from 'components';
import { Hero,CommentList,Advantages } from './components';

const StyledWrapper = styled(Page)`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.size.space.xxl};
  column-gap: ${({ theme }) => theme.size.space.xxl};
  padding-bottom: ${({ theme }) => theme.size.space.lg};
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

const route:RouteProps = {
  key: 'home',
  component: hot(Home),
  path: '/',
  exact: true,
}

export default route;
