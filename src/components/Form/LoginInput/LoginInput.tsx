import React, { FC } from 'react';
import Element from './LoginInput.styles';

interface Props {
  type: 'text' | 'password' | 'email' | 'number',
  optional?: boolean,
  change: any,
  label: string,
  name: string,
  // ..rest
  [key: string]: any
}

const defaultProps = {
  optional: false,
};

const LoginInput: FC<Props> = ({type, label, name, optional, change, ...props}) => {
  return (
    <Element>
      <Element.Background>
        <Element.Input
          id={name}
          type={type}
          required={!optional}
          onChange={change}
          {...props}
        />
        <Element.Label htmlFor={name}>
          <span>{label}</span>
        </Element.Label>
      </Element.Background>
    </Element>
  );
};

LoginInput.defaultProps = defaultProps;

export default LoginInput;
