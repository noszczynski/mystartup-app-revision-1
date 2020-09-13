import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { AnimateContent, Description, Image, Title } from 'components';
import colors from '../../theme/colors';

const Element: any = styled.article`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;

    ${theme.mq.tablet} {
      grid-gap: 64px;
      grid-template-columns: 1fr 1fr;
    }
  `}
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 1rem;

  ${({ theme }) => theme.mq.mobileL} {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContentInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-row-gap: 1rem;
`;

const Cover = styled.div`
  width: 100%;
  height: 100%;
`;

Element.Image = Cover;
Element.Content = Content;
Element.ContentInner = ContentInner;

interface Props {
  item: {
    title: string;
    content: string;
    image: string;
    alt: string;
  };
}

const TwoSideItem: FC<Props> = ({ item: { content, image, title, alt } }) => {
  return (
    <Element>
      <Element.Content>
        <Element.Image>
          <Image src={image} alt={alt} />
        </Element.Image>
        <Element.ContentInner>
          <AnimateContent onScroll color={colors.blue}>
            <Title>{title}</Title>
          </AnimateContent>
          <AnimateContent onScroll delay={0.4}>
            <Description small>{content}</Description>
          </AnimateContent>
        </Element.ContentInner>
      </Element.Content>
    </Element>
  );
};

export default TwoSideItem;
