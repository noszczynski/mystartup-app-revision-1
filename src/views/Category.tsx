import React from 'react';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';

interface Props {
  match: any
}

const defaultProps = {
  match: null,
};

const Category: React.FC<Props & RouteComponentProps> = ({ match }) => {
  const { id } = match.params;

  return (
    <div>
      Category view id:
      {' '}
      {id}
    </div>
  );
};

Category.defaultProps = defaultProps;

export default withRouter(Category);
