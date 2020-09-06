import React, {FC} from 'react';
import styled, { css } from 'styled-components';

const Element = styled.input`
  ${({ theme }) => css`
    padding: ${theme.size.space.sm};
  `}`;

interface Props {
  name: string,
  change: any,
  type: 'text' | 'password' | 'email' | 'number'
  // ...rest
  [key: string]: any
}

const BasicInput: FC<Props> = ({
  name,
  change,
  type,
  ...rest
}) => {
  return (
    <Element
      type="text"
      name={name}
      onChange={change}
      {...rest}
    />
  );
};

export default BasicInput;
