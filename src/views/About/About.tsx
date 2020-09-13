import React, { FC } from 'react';
import Page from 'components/Page/Page';
import { RouteProps } from 'utils/interfaces';

const About: FC = () => <Page>About</Page>;

const route: RouteProps = {
  key: 'about',
  component: About,
  path: '/about',
};

export default route;
