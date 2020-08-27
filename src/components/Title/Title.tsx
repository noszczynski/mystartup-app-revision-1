import React, { FC } from 'react';

interface Props {
  small?: boolean,
}

const defaultProps = {
  small: false,
};

const Title: FC<Props> = ({ small, children }) => (
  <div>
    {small
      ? <h2>{children}</h2>
      : <h1>{children}</h1>}
  </div>
);

Title.defaultProps = defaultProps;

export default Title;
