import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

const Project: FC = () => {
  const { id } = useParams();

  return <div>Projects view {id}</div>;
};

export default Project;
