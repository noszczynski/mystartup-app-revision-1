import React, { FC } from 'react';
import Page from 'components/Page/Page';
import { RouteProps } from 'utils/interfaces';

const Categories: FC = () => <Page>Categories view</Page>;

const route: RouteProps = {
  key: 'categories',
  component: Categories,
  path: '/category',
  exact: true,
};

export default route;
