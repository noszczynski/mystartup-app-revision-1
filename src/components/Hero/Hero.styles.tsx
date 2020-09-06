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
    grid-template-columns: 60% 40%;
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
  position: absolute;
  top: 50%;
  right: 0;
  width: 40%;
  transform: translateY(-50%);
  height: 80%;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
    
  ${({ theme }) => theme.mq.tablet} {
    display: flex;
  }
`;

const MacbookImage = styled(Image)`
  max-width: none;
`;

const AppImage = styled(Image)`
  z-index: -1;
  position: absolute;
  top: 52px;
  left: 146px;
  height: 63vh;
  width: 40vw;
  max-width: none;
  object-fit: cover;
`;

const ButtonWrapper = styled.section`
  display: flex;
  gap: 1rem;
  position: relative;
`;

const Blob = styled(Image)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-height: 128px;
  min-width: 128px;
  z-index: 0;
  opacity: .18;
`;

Hero.Content = Content;
Hero.ImageWrapper = ImageWrapper;
Hero.MacbookImage = MacbookImage;
Hero.AppImage = AppImage;
Hero.ButtonWrapper = ButtonWrapper;
Hero.Blob = Blob;

export default Hero;
