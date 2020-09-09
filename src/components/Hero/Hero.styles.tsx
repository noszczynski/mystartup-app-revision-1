import styled from 'styled-components';
import Image from '../Image/Image';

const Hero: any = styled.header`
  min-height: calc(100vh - ${({ theme }) => theme.size.space.xxl});
  background-color: ${({ theme }) => theme.color.white};
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  padding-top: ${({ theme }) => theme.size.space.xxl};
  
  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: 50% 50%;
  }
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.size.space.md};
  width: 90%;
  margin: 0 auto;
  
  ${({ theme }) => theme.mq.tablet} {
    gap: ${({ theme }) => theme.size.space.xl};
    width: 80%;
  }
  
  ${({ theme }) => theme.mq.laptopM} {
    width: 70%;
  }
  
`;

const ImageWrapper = styled.section`
  display: none;
  height: 80%;
  justify-content: flex-start;
  align-items: center;
    
    svg {
      transform: scale(0.8);
    }
    
  ${({ theme }) => theme.mq.tablet} {
    display: flex;
  }
`;

const HeroImage = styled(Image)`
  
`;

const ButtonWrapper = styled.section`
  display: flex;
  gap: 1rem;
  position: relative;
`;

Hero.Content = Content;
Hero.ImageWrapper = ImageWrapper;
Hero.HeroImage = HeroImage;
Hero.ButtonWrapper = ButtonWrapper;

export default Hero;
