import React, { FC } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from 'components/Button/Button';
import Title from '../Title/Title';
import { ADVANTAGES_ITEMS } from '../../utils/constants';
import Container from '../Layout/Container';
import colors from '../../theme/colors';
import SmoothShowItems from '../SmoothShowItems';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size.space.xl};
  text-align: center;
  align-items: center;
`;

const StyledWrapper = styled(SmoothShowItems)`
  display: grid;
  grid-template-columns: 1fr;
  padding: ${({ theme }) => theme.size.space.sm};
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  
  ${({ theme }) => theme.mq.mobileL} {
    grid-template-columns: repeat(2, 1fr);
  }
  
  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StyledArticle = styled(motion.article)<{backgroundColor: string}>`
  padding: ${({ theme }) => theme.size.space.md};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  row-gap: 1rem;
  max-width: 400px;
  border-radius: .5rem;
  height: 100%;
  background: ${({ backgroundColor }) => backgroundColor};
`;

const StyledIcon = styled.div`
  border-radius: 100%;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
   svg {
      width: 100%;
      height: 100%;
      color: ${({ theme }) => theme.color.light};
   }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  row-gap: 1rem;
  color: ${({ theme }) => theme.color.light};
`;

const StyledDescription = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.color.lightGray}
  
  ${({ theme }) => theme.mq.tabletS} {
    font-size: 13px;
  }
  
  ${({ theme }) => theme.mq.laptopS} {
    font-size: 14px;
  }
  
  ${({ theme }) => theme.mq.laptopL} {
    font-size: 15px;
  }
  
  ${({ theme }) => theme.mq.desktopS} {
    font-size: 16px;
  }
`;

const Advantages: FC = () => (
  <Container>
    <StyledSection>
      <Title>What we offer</Title>
      <StyledWrapper>
        {ADVANTAGES_ITEMS.map(({
          title, description, icon, background,
        }) => (
          <StyledArticle
            key={title}
            backgroundColor={background}
            whileHover={{
              y: -4,
              boxShadow: `0 10px 10px -6px ${background}`,
              transition: { duration: 0.3 },
            }}
          >
            <StyledIcon>{icon}</StyledIcon>
            <StyledContent>
              <Title component="h3" color={colors.white}>{title}</Title>
              <StyledDescription>{description}</StyledDescription>
            </StyledContent>
          </StyledArticle>
        ))}
      </StyledWrapper>
      <Button>Become an Investor</Button>
    </StyledSection>
  </Container>
);

export default Advantages;
