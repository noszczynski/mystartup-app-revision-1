import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface Props {
  match: any
}

const defaultProps = {
  match: null,
};

const Settings: React.FC<Props & RouteComponentProps> = ({ match }) => {
  const { id } = match.params;

  return (
    <div>
      Settings:
      {' '}
      {id}
    </div>
  );
};

Settings.defaultProps = defaultProps;

export default withRouter(Settings);
