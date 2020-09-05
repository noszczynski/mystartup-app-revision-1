import React, { FC } from 'react';
import styled from 'styled-components';
import Article from '../Article/Article';
import Container from '../Layout/Container';
import Title from '../Title/Title';
import { ARTICLES_ITEMS } from '../../utils/constants';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  article:first-child,
  article:last-child {
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0 5px 15px -8px rgba(0,0,0,.5);
  }
  
  article:nth-child(1),
  article:nth-child(2),
  article:nth-child(3) {
    display: none;
  }
  
  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: repeat(2, 1fr);
    
    article:nth-child(2),
    article:nth-child(3) {
      display: flex;
    }
  }
  
  ${({ theme }) => theme.mq.laptopS} {
    grid-template-columns: repeat(3, 1fr);
    
    article:nth-child(1) {
      display: flex;
    }
  }
  
`;

const ArticleList: FC = () => (
  <Container>
    <StyledWrapper>
      <Title component="h2">
        Happy start-up Owners are here!
      </Title>
      <StyledGridWrapper>
        {ARTICLES_ITEMS.map(({ article, content, signature }) => (
          <Article article={article} signature={signature} key={article.id}>
            {content}
          </Article>
        ))}
      </StyledGridWrapper>
    </StyledWrapper>
  </Container>
);

export default ArticleList;
