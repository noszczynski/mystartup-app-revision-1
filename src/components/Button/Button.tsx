import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { hot } from 'react-hot-loader/root';

const Wrapper = styled.button.attrs(({ type }) => ({
  type: type || 'button',
}))`
  ${({ theme }) => css`
    text-align: center;
    background-color: ${theme.color.blue};
    padding: ${theme.buttonSizes.lg.padding};
    border-radius: ${theme.buttonSizes.lg.borderRadius};
    color: ${theme.color.white};
    font-size: ${theme.buttonSizes.lg.fontSize};
    box-shadow: ${theme.utils.createBoxShadow([ 'minimal' ])};
  `}`;

const Button: FC = ({ children }) => <Wrapper>{children}</Wrapper>;

export default hot(Button);
