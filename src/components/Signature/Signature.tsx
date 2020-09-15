import React, { FC } from 'react';
import styled from 'styled-components';
import Image from '../Image/Image';
import Title from '../Title/Title';
import { colors } from '../../theme/colors';

const StyledSignature = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  row-gap: 1rem;
  column-gap: 1rem;
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
  name: string,
  id: string,
}

const Signature: FC<Props> = ({
  image, name, id, children,
}) => (
  <StyledSignature>
    <Image src={image} alt="start-up cover" linkTo={`/user/${id}`} />
    <StyledSignatureInner>
      <Title component="h5" color={colors.dark} linkTo={`/user/${id}`}>{name}</Title>
      <Title component="h6" color={colors.dark}>
        {children}
      </Title>
    </StyledSignatureInner>
  </StyledSignature>
);

export default Signature;
