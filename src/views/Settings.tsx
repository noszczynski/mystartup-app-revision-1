import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

const Settings: FC = () => {
  const { id } = useParams();

  return (
    <div>
      Settings:
      {' '}
      {id}
    </div>
  );
};

export default Settings;
