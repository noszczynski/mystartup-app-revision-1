import styled, { css } from 'styled-components';
import { Image } from 'components';

const Hero: any = styled.section`
  ${({ theme }) => css`
    min-height: calc(100vh - ${theme.size.space.xxl});
    background-color: ${theme.color.white};
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;

    ${theme.mq.laptopS} {
      grid-template-columns: 45% 55%;
    }
  `}
`;

const Content = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  row-gap: ${({ theme }) => theme.size.space.md};
  column-gap: ${({ theme }) => theme.size.space.md};
  width: 100%;
  margin: 0 auto;

  ${({ theme }) => theme.mq.tablet} {
    row-gap: ${({ theme }) => theme.size.space.xl};
    column-gap: ${({ theme }) => theme.size.space.xl};
    width: 90%;
  }

  ${({ theme }) => theme.mq.laptopM} {
    width: 80%;
  }
`;

const ImageWrapper = styled.section`
  display: none;
  height: 90%;
  justify-content: flex-start;
  align-items: center;

  svg {
    transform: scale(0.8);
  }

  ${({ theme }) => theme.mq.laptopS} {
    display: flex;
  }
`;

const HeroImage = styled(Image)``;

const ButtonWrapper = styled.div`
  display: flex;
  row-gap: 1rem;
  column-gap: 1rem;
  position: relative;
`;

Hero.Content = Content;
Hero.ImageWrapper = ImageWrapper;
Hero.HeroImage = HeroImage;
Hero.ButtonWrapper = ButtonWrapper;

export default Hero;
