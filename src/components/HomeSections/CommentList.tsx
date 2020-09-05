import React, { FC } from 'react';
import styled from 'styled-components';
import Comment from '../Comment/Comment';
import { COMMENTS } from '../../utils/constants';
import Title from '../Title/Title';
import Container from '../Layout/Container';

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const BigCommentsRow = styled.div`
  display: none;
  
  ${({ theme }) => theme.mq.laptopS} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  article:last-child {
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0 5px 15px -8px rgba(0,0,0,.5);
  }
`;

const RegularCommentsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  article:nth-child(2) {
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0 5px 15px -8px rgba(0,0,0,.5);
  }
  
  ${({ theme }) => theme.mq.laptopS} {
    grid-template-columns: repeat(3, 1fr);
    
    article:nth-child(1) {
      order: 2
    }
    
    article:nth-child(2) {
      order: 1
    }
    
    article:nth-child(3) {
      order: 3
    }
  }
`;

const CommentList: FC = () => (
  <Container>
    <StyledWrapper>
      <Title component="h2">
        Happy start-up Owners are here!
      </Title>
      <BigCommentsRow>
        {COMMENTS.slice(0, 2).map(({
          avatar, content, signature, author, id,
        }) => (
          <Comment image={avatar} name={author} signature={signature} key={id}>
            {content}
          </Comment>
        ))}
      </BigCommentsRow>
      <RegularCommentsRow>
        {COMMENTS.slice(2, 5).map(({
          avatar, content, signature, author, id,
        }) => (
          <Comment image={avatar} name={author} signature={signature} key={id}>
            {content}
          </Comment>
        ))}
      </RegularCommentsRow>
    </StyledWrapper>
  </Container>
);

export default CommentList;
