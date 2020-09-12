import React, {FC} from 'react';
import styled, { css } from 'styled-components';

const Element: any = styled.input<{noBorder: boolean}>`
  ${({ theme, noBorder }) => css`
    padding: ${theme.size.space.sm};
    border: ${noBorder ? 'none' : `1px solid ${theme.color.gray500}`};
  `}`;

interface Props {
  name: string,
  change: any,
  type: 'text' | 'password' | 'email' | 'number',
  invisible?: boolean,
  // ...rest
  [key: string]: any
}

const defaultProps = {
  invisible: false,
};

const BasicInput: FC<Props> = ({
  name,
  change,
  type,
  invisible,
  ...rest
}) => {
  return (
    <Element
      type="text"
      name={name}
      onChange={change}
      noBorder={invisible}
      {...rest}
    />
  );
};

BasicInput.defaultProps = defaultProps;

export default BasicInput;
