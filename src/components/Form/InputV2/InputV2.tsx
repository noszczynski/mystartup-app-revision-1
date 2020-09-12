import React, { FC } from 'react';
import { Done } from '@material-ui/icons';
import Element from './InputV2.styles';

type InputTypes = 'text' | 'password' | 'email' | 'number';

interface Props {
  type: InputTypes,
  optional?: boolean,
  valid?: boolean,
  change: any,
  name: string,
  label: string,
  // ...props
  [key: string]: any;
}

const defaultProps = {
  optional: false,
  valid: false,
};

const InputV2: FC<Props> = ({type, label, name, valid, optional, change, ...props}) => {
  return (
    <Element>
      <Element.Input
        id={name}
        type={type}
        required={!optional}
        onChange={change}
        autoComplete="off"
        valid={valid}
        {...props}
      />
      <Element.Label htmlFor={name}>
        <span>{label}</span>
      </Element.Label>
      {valid && (
        <Element.Icon>
          <Done />
        </Element.Icon>
      )}
    </Element>
  );
};

InputV2.defaultProps = defaultProps;

export default InputV2;
