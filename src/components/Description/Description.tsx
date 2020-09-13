import React, { FC } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  small?: boolean | undefined;
  width?: string | undefined;
}

interface StyledProps {
  small?: boolean | undefined;
  width?: string | undefined;
}

const defaultProps = {
  small: false,
  width: 'auto',
};

const StyledParagraph = styled.p<StyledProps>`
  ${({ theme, small, width }) => css`
    display: inline-block;
    color: ${theme.color.gray500};
    font-size: ${small ? theme.size.font.xxs : theme.size.font.xs};
    max-width: 100%;
    font-family: Poppins, serif;
    width: 100%;

    ${theme.mq.tablet} {
      font-size: ${small ? theme.size.font.md : theme.size.font.lg};
      width: ${width || 'auto'};
    }
  `};
`;

const Description: FC<Props> = ({ small, width, children }) => (
  <StyledParagraph small={small} width={width}>
    {children}
  </StyledParagraph>
);

Description.defaultProps = defaultProps;

export default Description;
