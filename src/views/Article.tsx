import React from 'react';
import { useParams, withRouter } from 'react-router-dom';

const Article: React.FC = () => {
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
