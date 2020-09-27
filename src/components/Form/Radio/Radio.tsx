import React, { ChangeEvent, FC } from 'react';
import { hot } from 'react-hot-loader/root';
import { RadioSchema } from 'utils/interfaces';
import Element from './Radio.styles';

interface Props {
  schema: RadioSchema;
  name: string;
  value: string | null | undefined;
  change: any;
}

const Radio: FC<Props> = ({ schema, name, value, change }) => {
  const handleChange = (e: ChangeEvent): void => {
    const selectedId = e.target.getAttribute('id');
    change(selectedId);
  };

  return (
    <>
      {schema &&
        schema.map(({ label, id }) => (
          <Element key={id}>
            <Element.Radio
              type="radio"
              id={id}
              name={name}
              checked={value === id}
              onChange={handleChange}
            />
            <Element.Label htmlFor={id}>
              <span />
              {label}
              <ins>
                <i>{label}</i>
              </ins>
            </Element.Label>
          </Element>
        ))}
    </>
  );
};

export default hot(Radio);
