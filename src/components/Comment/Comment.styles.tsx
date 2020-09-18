import styled from 'styled-components';
import { motion } from 'framer-motion';

const Comment: any = styled(motion.article)`
  border-radius: .5rem;
  background-color: ${({ theme }) => theme.color.secondaryBackground};
  padding: ${({ theme }) => theme.size.space.md};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 2rem;
  column-gap: 2rem;
`;

const Avatar = styled.figure`
  border-radius: 100%;
  border: 1px solid ${({ theme }) => theme.color.white};
  width: 64px;
  height: 64px;
  min-height: 64px;
  overflow: hidden;
  display: flex;
  filter: drop-shadow(0px 2px 6px rgba(8, 35, 48, 0.16)) drop-shadow(0px 1px 2px rgba(8, 35, 48, 0.24));
`;

const Content = styled.p`
  width: 100%;
`;

const WrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  row-gap: 2rem;
  column-gap: 2rem;
`;

Comment.Avatar = Avatar;
Comment.Content = Content;
Comment.WrapperInner = WrapperInner;

export default Comment;
