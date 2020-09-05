/* eslint-disable no-nested-ternary */
import React, { FC, RefObject } from 'react';
import styled from 'styled-components';

interface StyledButtonProps {
  submit?: boolean;
  reset?: boolean;
  label: string;
  disabled?: boolean;
  ref?: RefObject<HTMLButtonElement> | null | undefined;
}

const ButtonStyled = styled.button.attrs<StyledButtonProps>(
  ({ submit, reset, label, disabled, ...props }) => ({
    type: submit ? 'submit' : reset ? 'reset' : 'button',
    disabled,
    role: 'button',
    'aria-label': label,
    'aria-disabled': Boolean(disabled).toString(),
    tabindex: 0,
    ...props,
  }),
)`
  cursor: pointer;
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: inherit;
  line-height: inherit;
  -webkit-appearance: none;
`;

interface ButtonProps {
  innerRef: RefObject<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ innerRef, ...props }) => (
  <ButtonStyled ref={innerRef} {...props} />
);

Button.displayName = 'Button';

export default Button;
