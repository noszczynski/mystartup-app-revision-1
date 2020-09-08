import React, { FC } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  
  ${({ theme }) => theme.mq.laptopM} {
    max-width: 1300px;
    width: 1300px;
  }
  
  ${({ theme }) => theme.mq.laptopL} {
    max-width: 1400px;
    width: 1400px;
  }
  
  ${({ theme }) => theme.mq.desktopS} {
    max-width: 1500px;
    width: 1500px;
  }
`;

const Container: FC = ({ children }) => (
  <StyledWrapper>
    {children}
  </StyledWrapper>
);

export default Container;
