import React from 'react';
import { useParams } from 'react-router-dom';

const Project: React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      Project view
      {' '}
      {id}
    </div>
  );
};

export default Project;
