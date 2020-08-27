import React, { FC } from 'react';
import { useParams, withRouter } from 'react-router-dom';

const Article: FC = () => {
  const { id } = useParams();

  return (
    <div>
      Article
      {' '}
      {id}
    </div>
  );
};

export default withRouter(Article);
