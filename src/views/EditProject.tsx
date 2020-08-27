import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

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

export default EditProject;
