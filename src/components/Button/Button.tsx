import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { hot } from 'react-hot-loader/root';
import { marginable, MarginableProps, fontable, FontableProps } from 'utils/mixins';
import Link from '../Link/Link';

interface Props extends MarginableProps, FontableProps {
  btnSize?: 'sm' | 'md' | 'lg' | 'xl';
  bgColor?:
    | 'light'
    | 'dark'
    | 'white'
    | 'black'
    | 'blue'
    | 'yellow'
    | 'red'
    | 'ocean'
    | 'gray900'
    | 'gray700'
    | 'gray500'
    | 'gray300'
    | 'gray100'
    | 'gray50';
  to?: string;
}

const Wrapper = styled.button<Props>`
  ${({ theme, btnSize = 'lg', bgColor }) => css`
    text-align: center;
    background: ${bgColor ? theme.color[bgColor] : theme.color.button};
    padding: ${theme.buttonSizes[btnSize].padding};
    border-radius: ${theme.buttonSizes[btnSize].borderRadius};
    color: ${theme.color.white};
    font-size: ${theme.buttonSizes[btnSize].fontSize};
    box-shadow: ${theme.utils.createBoxShadow(['minimal'])};
  `}

  ${marginable.css}
  ${fontable.css}
`;

const Button: FC<Props> = ({ to, children, ...props }) => {
  return to ? (
    <Wrapper as={Link} to={to} {...props}>
      {children}
    </Wrapper>
  ) : (
    <Wrapper {...props} type="button">
      {children}
    </Wrapper>
  );
};

export default hot(Button);
