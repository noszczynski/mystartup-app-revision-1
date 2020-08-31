import React, { FC } from 'react';
import styled from 'styled-components';
import Image from './Image/Image';
import Title from './Title/Title';

const StyledSignature = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
  
  img {
    width: 36px;
    height: 36px;
    border-radius: 100%;
  }
  
  h6 {
    font-weight: ${({ theme }) => theme.size.weight.regular};
  }
`;

const StyledSignatureInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: 36px;
`;

interface Props {
  image: string,
  name: string
}

const Signature: FC<Props> = ({ image, name, children }) => (
  <StyledSignature>
    <Image src={image} alt="start-up cover" />
    <StyledSignatureInner>
      <Title component="h5">{name}</Title>
      <Title component="h6">
        {children}
      </Title>
    </StyledSignatureInner>
  </StyledSignature>
);

export default Signature;
