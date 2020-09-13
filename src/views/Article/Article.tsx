import React, { FC } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { RouteProps } from 'utils/interfaces';

const Article: FC = () => {
  const { id } = useParams();

  return (
    <div>
      Article
      {' '}
      {id}
    </div>
  );
};

const route:RouteProps={
  key: 'article',
  component: withRouter(Article),
  path: '/news/:id',
}

export default route;
