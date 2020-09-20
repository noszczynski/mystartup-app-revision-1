import React, { FC } from 'react';
import { hot } from 'react-hot-loader/root';
import Element from './Checkbox.styles';

interface Props {
  label: string,
  id: string,
  [key: string]: any,
}

const Checkbox: FC<Props> = ({
   label,
   id,
  ...props
}) => {

  return (
    <Element>
      <Element.Checkbox type='checkbox' id={id} {...props} />
      <Element.Label htmlFor={id}>
        <span />
        {label}
        <ins><i>{label}</i></ins>
      </Element.Label>
    </Element>
  );
};

export default hot(Checkbox);
