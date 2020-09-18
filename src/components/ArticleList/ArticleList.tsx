import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { ARTICLES_ITEMS } from 'utils/constants';
import { AnimateContent, Description, Button, Article, Container, Title } from 'components';
import SmoothShowItems from '../SmoothShowItems/SmoothShowItems';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: ${({ theme }) => theme.size.space.xl};
  column-gap: ${({ theme }) => theme.size.space.xl};
`;

const StyledGridWrapper = styled(SmoothShowItems)`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
    column-gap: 2rem;

    article:first-child,
    article:last-child {
      background-color: ${theme.color.highlightedElementBg};
      box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.5);
    }

    article:nth-child(1),
    article:nth-child(2),
    article:nth-child(3) {
      display: none;
    }

    ${theme.mq.tablet} {
      grid-template-columns: repeat(2, 1fr);

      article:nth-child(2),
      article:nth-child(3) {
        display: flex;
      }
    }

    ${theme.mq.laptopS} {
      grid-template-columns: repeat(3, 1fr);

      article:nth-child(1) {
        display: flex;
      }

      article:nth-child(5) {
        grid-column: 2 / 4;
      }
    }
  `}
`;

const ArticleList: FC = () => (
  <Container>
    <StyledWrapper>
      <div>
        <AnimateContent onScroll>
          <Title component="h2">See what our editors have been writing about recently</Title>
        </AnimateContent>
        <AnimateContent onScroll delay={1} position="left">
          <Description small width="50%">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eveniet iusto libero
            nemo vel voluptatibus! Adipisci id maiores odit veritatis
          </Description>
        </AnimateContent>
      </div>
      <StyledGridWrapper start="top 90%">
        {ARTICLES_ITEMS.map(({ article, content, signature }) => (
          <Article article={article} signature={signature} key={article.id}>
            {content}
          </Article>
        ))}
      </StyledGridWrapper>
      <Button>More news here</Button>
    </StyledWrapper>
  </Container>
);

export default ArticleList;
