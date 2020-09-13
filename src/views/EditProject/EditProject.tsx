import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { RouteProps } from 'utils/interfaces';

const EditProject: FC = () => {
  const { id } = useParams();

  return (
    <div>
      Edit project
      {' '}
      {id}
    </div>
  );
};

const route:RouteProps = {
  key: 'editProject',
  component: EditProject,
  path: '/project/:id/settings',
  isProtected:true,
  meta: {
    authenticationPath: "/",
    isAuthenticated: false,
    isAllowed: true,
  }
}

export default route;
