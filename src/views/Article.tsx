import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface Props {
  match: any
}

const defaultProps = {
  match: null,
};

const Article: React.FC<Props & RouteComponentProps> = ({ match }) => {
  const { id } = match.params;

  return (
    <div>
      Article
      {' '}
      {id}
    </div>
  );
};

Article.defaultProps = defaultProps;

export default withRouter(Article);
