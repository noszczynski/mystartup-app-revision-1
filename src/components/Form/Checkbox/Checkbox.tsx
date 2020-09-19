import React, { FC } from 'react';
import { hot } from 'react-hot-loader/root';
import Element from './Checkbox.styles';

interface Props {
  label: string,
}

const Checkbox: FC<Props> = ({label}) => {
  const id = 'ass';

  return (
    <Element>
      <Element.Checkbox type='checkbox' id={id} />
      <Element.Label htmlFor={id}>
        <span />
        {label}
        <ins><i>{label}</i></ins>
      </Element.Label>
    </Element>
  );
};

export default hot(Checkbox);
