import React, { FC } from 'react';
import styled from 'styled-components';
import mq from '../../theme/breakpoints';

const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.color.lightGray};
  font-size: ${({ theme }) => theme.size.font.xs};
  max-width: 100%;
  display: block;
  
  ${mq.tablet} {
    font-size: ${({ theme }) => theme.size.font.lg};
  }
`;

const Description: FC = ({ children }) => (
  <StyledParagraph>
    {children}
  </StyledParagraph>
);

export default Description;
