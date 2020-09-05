import React, { FC } from 'react';
import styled from 'styled-components';
import mq from '../../theme/breakpoints';

const StyledWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  
  ${mq.laptopM} {
    max-width: 1300px;
  }
  
  ${mq.laptopL} {
    max-width: 1400px;
  }
  
  ${mq.desktopS} {
    max-width: 1500px;
  }
`;

const Container: FC = ({ children }) => (
  <StyledWrapper>
    {children}
  </StyledWrapper>
);

export default Container;
