import styled, { css } from 'styled-components';
import { Image } from 'components';

const Hero: any = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.color.gray50};
    display: flex;
    align-items: center;
    height: calc(100vh - 10rem);
    margin-bottom: ${theme.size.space.xxl};
  `}
`;

const Content = styled.header`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mq.laptopS} {
    width: 50%;
    padding-left: 4rem;
  }
`;

const ContentInner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1rem;
  align-items: center;
  justify-content: center;
`;

const ImageWrapper = styled.section`
  display: none;
  height: 100%;
  width: 50%;
  justify-content: flex-start;
  align-items: center;

  ${({ theme }) => theme.mq.laptopS} {
    display: flex;
  }
`;

const HeroImage = styled(Image)``;

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  position: relative;
  padding: ${({ theme }) => theme.size.space.md} 0;
`;

Hero.Content = Content;
Hero.ContentInner = ContentInner;
Hero.ImageWrapper = ImageWrapper;
Hero.HeroImage = HeroImage;
Hero.ButtonWrapper = ButtonWrapper;

export default Hero;
