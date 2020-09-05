import React, { FC } from 'react';
import styled from 'styled-components';
import { mq, breakpoints } from '../../theme/theme';

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

const StyledWrapper = styled.main`
  overflow-x: hidden;
  width: 100%;
  max-width: 100%;
`;

const StyledContainer = styled.article`
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  padding: 0 ${({ theme }) => theme.size.space.md};
  
  ${({ theme }) => theme.mq.tablet} {
    padding: 0 ${({ theme }) => theme.size.space.lg};
  }
  
  ${setContainerMedia()}
`;

const Layout: FC = ({ children }) => (
  <StyledWrapper role="main">
    <StyledContainer>
      {children}
    </StyledContainer>
  </StyledWrapper>
);

export default Layout;
