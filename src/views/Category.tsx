import React, { FC } from 'react';
import { useParams, withRouter } from 'react-router-dom';

const Category: FC = () => {
  const { id } = useParams();

  return (
    <div>
      Category view id:
      {' '}
      {id}
    </div>
  );
};

export default withRouter(Category);
