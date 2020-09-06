import React, { FC } from 'react';
import styled from 'styled-components';
import BasicInput from 'components/Form/BasicInput';
import { hot } from 'react-hot-loader/root';
import Hero from '../components/Hero/Hero';
import CommentList from '../components/HomeSections/CommentList';
import Advantages from '../components/Advantages/Advantages';
import ArticleList from '../components/ArticleList/ArticleList';
import LoginInput from '../components/Form/LoginInput/LoginInput';
import Input from '../components/Form/Input/Input';

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
    <ArticleList />
    <div>
      <LoginInput
        change={() => null}
        label="Imię i nazwisko"
        name="name"
        type="text"
      />
    </div>
    <div>
      <BasicInput
        change={() => {
          //
        }}
        name="name"
        type="text"
        placeholder="Imię i nazwisko"
      />
    </div>
    <div>
      <Input
        change={() => {
          //
        }}
        name="name"
        type="text"
        label="Imię i nazwisko"
      />
    </div>
  </StyledWrapper>
);

export default hot(Home);
