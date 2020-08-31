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
  StyledWrapperInner,
};
