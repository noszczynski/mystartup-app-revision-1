import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { RouteProps } from 'utils/interfaces';

const Settings: FC = () => {
  const { id } = useParams();

  return <div>Settings: {id}</div>;
};

const route: RouteProps = {
  key: 'settings',
  component: Settings,
  path: '/settings/:id',
  isProtected: true,
  meta: {
    authenticationPath: '/',
    isAuthenticated: true,
    isAllowed: true,
  },
};

export default route;
