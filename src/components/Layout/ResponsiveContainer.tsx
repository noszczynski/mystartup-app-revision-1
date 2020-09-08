import React, { FC } from 'react';
import styled from 'styled-components';
import { breakpoints, mq } from '../../theme/theme';

const setContainerMedia = () => {
  let str = '';

  for (const device in mq) {
    if (Object.prototype.hasOwnProperty.call(mq, device)) {
      const query = `${mq[device]}{max-width: ${breakpoints[device]}px}`;
      str = str.concat(query);
    }
  }

  return str;
};

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 100%;

  ${setContainerMedia()}
`;

const ResponsiveContainer: FC = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default ResponsiveContainer;
