import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledWrapper = styled(motion.article)`
  border-radius: .5rem;
  background-color: ${({ theme }) => theme.color.gray50};
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

export {
  StyledWrapper,
  StyledAvatar,
  StyledContent,
  StyledSignature,
  StyledWrapperInner,
  StyledSignatureInner,
};
