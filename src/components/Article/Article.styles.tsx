import styled from 'styled-components';
import { motion } from 'framer-motion';
import mq from '../../theme/breakpoints';

const StyledWrapper = styled(motion.article)<{columns: string | undefined}>`
  border-radius: .5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.color.gray50};
  overflow: hidden;
  
  ${mq.tablet} {
    ${({ columns }) => columns && `grid-column: ${columns}`};
  }
`;

const StyledTop = styled.div`
  height: 200px;
  
  img {
    width: 100%;
  }
`;

const StyledBottom = styled.div`
  padding: ${({ theme }) => theme.size.space.md};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;

const StyledHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.size.space.md};
`;

const StyledCategory = styled.div`
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.blue};
  font-size: ${({ theme }) => theme.size.font.md};
  
  h6 {
    font-weight: ${({ theme }) => theme.size.weight.bold};
  }
`;

const StyledTimeStamp = styled.p`
  font-size: ${({ theme }) => theme.size.font.xs};
`;

const StyledBody = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

const StyledBodyInner = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledDescription = styled.div`

`;

export {
  StyledWrapper,
  StyledTop,
  StyledBottom,
  StyledHead,
  StyledCategory,
  StyledTimeStamp,
  StyledBody,
  StyledDescription,
  StyledBodyInner,
};
