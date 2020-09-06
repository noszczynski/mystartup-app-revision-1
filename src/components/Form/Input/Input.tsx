import React, { FC } from 'react';
import Element from './Input.styles';

type InputTypes = 'text' | 'password' | 'email' | 'number';

interface Props {
  type: InputTypes,
  optional?: boolean,
  change: any,
  // value: string | number,
  name: string,
  label: string,
  // ...props
  [key: string]: any;
}

const defaultProps = {
  optional: false,
};

const Input: FC<Props> = ({type, label, name, optional, change, ...props}) => {
  return (
    <Element>
      <Element.Input
        id={name}
        type={type}
        required={!optional}
        onChange={change}
        // value={value}
        {...props}
      />
      <Element.Label htmlFor={name}>
        <span>{label}</span>
      </Element.Label>
    </Element>
  );
};

Input.defaultProps = defaultProps;

export default Input;
