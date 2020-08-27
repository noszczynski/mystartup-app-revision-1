import React, { FC } from 'react';
import styled from 'styled-components';
import mq from '../../theme/breakpoints';

interface Props {
  small?: boolean
}

interface StyledProps {
  theme: any,
  small?: boolean
}

const defaultProps = {
  small: false,
};

const StyledParagraph = styled.p<StyledProps>`
  color: ${({ theme }) => theme.color.lightGray};
  font-size: ${({ theme, small }) => (small ? theme.size.font.xxs : theme.size.font.xs)};
  max-width: 100%;
  display: block;
  font-family: Poppins, serif;
  
  ${mq.tablet} {
    font-size: ${({ theme, small }) => (small ? theme.size.font.md : theme.size.font.lg)};
  }
`;

const Description: FC<Props> = ({ small, children }) => (
  <StyledParagraph small={small}>
    {children}
  </StyledParagraph>
);

Description.defaultProps = defaultProps;

export default Description;
