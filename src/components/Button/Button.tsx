import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.button.attrs(({ type }) => ({
  type: type || 'button',
}))`
  ${({ theme }) => css`
    z-index: 999;
    background-color: ${theme.color.blue};
    padding: ${theme.buttonSizes.lg.padding};
    border-radius: ${theme.buttonSizes.lg.borderRadius};
    color: ${theme.color.white};
    font-size: ${theme.buttonSizes.lg.fontSize};
    box-shadow: ${theme.utils.createBoxShadow(['minimal'])};
  `}`;

const Button: FC = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Button;
