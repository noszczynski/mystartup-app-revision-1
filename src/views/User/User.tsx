import React, { FC } from 'react';
import { useParams } from 'react-router';
import { RouteProps } from 'utils/interfaces';

const User: FC = () => {
  const { id } = useParams();

  return <div>user with id: {id}</div>;
};

const route: RouteProps = {
  key: 'user',
  component: User,
  path: '/user/:id',
};

export default route;
