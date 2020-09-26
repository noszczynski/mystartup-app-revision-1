import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { hot } from 'react-hot-loader/root';

const Wrapper = styled.button.attrs(({ type }) => ({
  type: type || 'button',
}))`
  ${({ theme }) => css`
    text-align: center;
    padding: .75rem 1.75rem;
    border-radius: ${theme.buttonSizes.lg.borderRadius};
    font-size: ${theme.size.font.xs};
    box-shadow: ${theme.utils.createBoxShadow([ 'minimal' ])};
    background: ${theme.color.button};
    color: ${theme.color.buttonText};
    font-weight: ${theme.size.weight.bold};
    text-transform: uppercase;
  `}`;

const Button: FC = ({ children }) => <Wrapper>{children}</Wrapper>;

export default hot(Button);
