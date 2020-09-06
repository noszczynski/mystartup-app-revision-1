import React, { FC } from 'react';
import { useParams } from 'react-router';

const User: FC = () => {
  const { id } = useParams();

  return (
    <div>
      user with id:
      {' '}
      {id}
    </div>
  );
};

export default User;
