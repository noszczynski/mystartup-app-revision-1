import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.button.attrs(({ type }) => ({
  type:  type || 'button'
}))`
  z-index: 999;
  background-color: ${({ theme }) => theme.color.blue};
  padding: 0.5rem 1rem;
  border-radius:0.25rem;
  color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.utils.createBoxShadow([
    'minimal'
  ])};
`;

const Btn: FC = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default Btn;