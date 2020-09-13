import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { RouteProps } from 'utils/interfaces';

const Project: FC = () => {
  const { id } = useParams();

  return (
    <div>
      Project view
      {' '}
      {id}
    </div>
  );
};

const route:RouteProps = {
  key: 'project',
  component: Project,
  path: '/project/:id',
  exact: true,
}

export default route;
