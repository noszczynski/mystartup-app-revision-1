import React, { FC } from 'react';

type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface Props {
  component?: Headings,
}

const defaultProps = {
  component: undefined,
};

const Title: FC<Props> = ({ component, children }) => {
  const renderHeadline = () => {
    switch (component) {
      case 'h1':
        return <h1>{children}</h1>;
      case 'h3':
        return <h3>{children}</h3>;
      case 'h4':
        return <h4>{children}</h4>;
      case 'h5':
        return <h5>{children}</h5>;
      case 'h6':
        return <h6>{children}</h6>;
      default: return <h2>{children}</h2>;
    }
  };

  return (
    <div>
      {renderHeadline()}
    </div>
  );
};

Title.defaultProps = defaultProps;

export default Title;
