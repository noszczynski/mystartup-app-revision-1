import React, { FC } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from '../Image/Image';
import Title from '../Title/Title';

const StyledWrapper = styled(motion.article)`
  border-radius: .5rem;
  background-color: ${({ theme }) => theme.color.gray100};
  padding: ${({ theme }) => theme.size.space.md};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

const StyledAvatar = styled.figure`
  border-radius: 100%;
  border: 1px solid ${({ theme }) => theme.color.white};
  width: 64px;
  height: 64px;
  min-height: 64px;
  overflow: hidden;
  display: flex;
  filter: drop-shadow(0px 2px 6px rgba(8, 35, 48, 0.16)) drop-shadow(0px 1px 2px rgba(8, 35, 48, 0.24));
`;

const StyledContent = styled.p`
  width: 100%;
`;

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

interface Props {
  image: string
}

const StyledSignatureInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: 36px;
`;

const StyledWrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 2rem;
`;

const Comment: FC<Props> = ({ children, image }) => (
  <StyledWrapper
    whileHover={{
      y: -4,
      backgroundColor: '#fff',
      boxShadow: '0 5px 15px -8px rgba(0,0,0,.5)',
    }}
    transition={{
      filter: { delay: 0.1 },
    }}
  >
    <StyledAvatar>
      <Image src={image} alt="comment author avatar" />
    </StyledAvatar>
    <StyledWrapperInner>
      <StyledContent>
        &#34;
        {children}
        &#34;
      </StyledContent>
      <StyledSignature>
        <Image src={image} alt="start-up cover" />
        <StyledSignatureInner>
          <Title component="h5">Adam Noszczyński</Title>
          <Title component="h6">Works in Google as Produce Manager</Title>
        </StyledSignatureInner>
      </StyledSignature>
    </StyledWrapperInner>
  </StyledWrapper>
);

export default Comment;
