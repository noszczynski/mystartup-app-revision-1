import styled from 'styled-components';
import mq from '../../theme/breakpoints';
import Image from '../Image/Image';

const StyledHero = styled.header`
  min-height: calc(100vh - ${({ theme }) => theme.size.space.xxl});
  background-color: ${({ theme }) => theme.color.light};
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  padding-top: ${({ theme }) => theme.size.space.xxl};
  
  ${mq.tablet} {
    grid-template-columns: 60% 40%;
  }
`;

const StyledContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.size.space.md};
  width: 90%;
  margin: 0 auto;
  
  ${mq.tablet} {
    gap: ${({ theme }) => theme.size.space.xl};
    width: 80%;
  }
  
  ${mq.laptopM} {
    width: 70%;
  }
  
`;

const StyledImageWrapper = styled.section`
  display: none;
  position: absolute;
  top: 50%;
  right: 0;
  width: 40%;
  transform: translateY(-50%);
  height: 80%;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
    
  ${mq.tablet} {
    display: flex;
  }
`;

const StyledMacbookImage = styled(Image)`
  max-width: none;
`;

const StyledAppImage = styled(Image)`
  z-index: -1;
  position: absolute;
  top: 52px;
  left: 146px;
  height: 63vh;
  width: 40vw;
  max-width: none;
  object-fit: cover;
`;

const StyledButtonWrapper = styled.section`
  display: flex;
  gap: 1rem;
  position: relative;
`;

const StyledBlob = styled(Image)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 32px;
  width: 32px;
`;

export {
  StyledHero,
  StyledContent,
  StyledImageWrapper,
  StyledMacbookImage,
  StyledAppImage,
  StyledButtonWrapper,
  StyledBlob,
};
