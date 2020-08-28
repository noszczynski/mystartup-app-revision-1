import React, { FC } from 'react';
import Hero from '../components/Hero/Hero';
import CommentList from '../components/HomeSections/CommentList';

const Home: FC = () => (
  <>
    <Hero />
    <CommentList />
  </>
);

export default Home;
