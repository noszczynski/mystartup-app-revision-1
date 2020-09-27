import React, { FC, useState } from 'react';
import { ExpandMore } from '@material-ui/icons';
import Element from './Select.styles';

interface Props {
  options: Array<{label: string, value: number}>,
  valid?: boolean,
  optional?: boolean,
  change: any,
  name: string,
  label: string,
  value?: {label: string, value: string | number},
  // ...props
  [key: string]: any;
}

const defaultProps = {
  optional: false,
  valid: false,
  value: {label: '', value: ''},
};

const Select: FC<Props> = ({
  options,
  value,
  label,
  name,
  valid,
  optional,
  change,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  const handleChange = ():void => {
    // TODO
  };

  return (
    <Element>
      <Element.Input
        id={name}
        required={!optional}
        valid={valid}
        value=""
        option=""
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        {...props}
      />
      <Element.Label htmlFor={name}>
        <span>{label}</span>
      </Element.Label>
      <Element.Icon isOpen={open}>
        <ExpandMore />
      </Element.Icon>
      {open && options ? (
        <Element.Options>
          {options.map((option) => (
            <Element.Option
              type="button"
              data-value={option.value}
              data-label={option.label}
              onClick={handleChange}
            >
              {label}
            </Element.Option>
          )
          )}
        </Element.Options>
      ) : null}
    </Element>
  );
};

Select.defaultProps = defaultProps;

export default Select;
