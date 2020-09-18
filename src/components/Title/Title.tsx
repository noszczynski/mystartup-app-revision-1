import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface Props {
  component?: Headings,
  color?: string,
  linkTo?: string
}

const defaultProps = {
  component: undefined,
  color: undefined,
  linkTo: undefined,
};

const Title: FC<Props> = ({
  component, linkTo,color , children,
}) => {
  const renderHeadline = () => {
    switch (component) {
      case 'h1':
        return <h1 style={{ color }}>{children}</h1>;
      case 'h3':
        return <h3 style={{ color }}>{children}</h3>;
      case 'h4':
        return <h4 style={{ color }}>{children}</h4>;
      case 'h5':
        return <h5 style={{ color }}>{children}</h5>;
      case 'h6':
        return <h6 style={{ color }}>{children}</h6>;
      default: return <h2 style={{ color }}>{children}</h2>;
    }
  };

  return linkTo
    ? <Link to={linkTo}>{renderHeadline()}</Link>
    : renderHeadline();
};

Title.defaultProps = defaultProps;

export default Title;
