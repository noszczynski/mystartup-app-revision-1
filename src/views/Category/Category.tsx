import React, { FC } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { RouteProps } from 'utils/interfaces';
import Page from 'components/Page';

const Category: FC = () => {
  const { id } = useParams();

  return (
    <Page>
      <p>
        Category view id:
        {id}
      </p>
    </Page>
  );
};

const route:RouteProps={
  key: 'category',
  component: withRouter(Category),
  path: '/category:id',
}

export default route;
