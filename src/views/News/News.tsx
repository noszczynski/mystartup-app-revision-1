import React, { FC } from 'react';
import Page from 'components/Page/Page';
import { RouteProps } from 'utils/interfaces';
import { ArticleList } from 'components';

const News: FC = () => (
  <Page>
    <ArticleList />
  </Page>
);

const route: RouteProps = {
  key: 'news',
  component: News,
  path: '/news',
  exact: true,
};

export default route;
