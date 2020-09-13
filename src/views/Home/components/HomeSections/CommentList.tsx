import React, { FC } from 'react';
import styled, {css} from 'styled-components';
import Button from 'components/Button/Button';
import Comment from '../../../../components/Comment/Comment';
import { COMMENTS } from '../../../../utils/constants';
import Title from '../../../../components/Title/Title';
import Container from '../../../../components/Layout/Container';
import SmoothShowItems from '../../../../components/SmoothShowItems';

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: ${({ theme }) => theme.size.space.xl};
  column-gap: ${({ theme }) => theme.size.space.xl};
`;

const CommentSections = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.size.space.xl};
  column-gap: ${({ theme }) => theme.size.space.xl};
`;

const BigCommentsRow = styled(SmoothShowItems)`
  ${({ theme }) => css`
    display: none;
    
    ${theme.mq.laptopS} {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 2rem;
      column-gap: 2rem;
      
      article:nth-child(3) {
        display: none;
      }
    }
    
    ${theme.mq.laptopL} {
      grid-template-columns: repeat(3, 1fr);
      row-gap: 3rem;
      column-gap: 3rem;
      
      article:nth-child(3) {
        display: flex;
      }
    }
    
    article:nth-child(n+2) {
      background-color: ${theme.color.white};
      box-shadow: 0 5px 15px -8px rgba(0,0,0,.5);
    }
  `}`;

const RegularCommentsRow = styled(SmoothShowItems)`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
    column-gap: 2rem;
  
    article:nth-child(n+3) {
      display: none;
    }
  
    article:nth-child(2) {
      background-color: ${theme.color.white};
      box-shadow: 0 5px 15px -8px rgba(0,0,0,.5);
    }
  
    ${theme.mq.tablet} {
      grid-template-columns: repeat(2, 1fr);
    }
    
    ${theme.mq.laptopS} {
      grid-template-columns: repeat(3, 1fr);
      
      article:nth-child(3) {
        display: flex;
      }
    }
    
    ${theme.mq.laptopL} {
      grid-template-columns: repeat(4, 1fr);
      
      article:nth-child(4) {
        display: flex;
      }
    }
    
  `}`;

const CommentList: FC = () => (
  <Container>
    <StyledWrapper>
      <Title component="h2">
        Hey, see what our specialists are writing
      </Title>
      <CommentSections>
        <BigCommentsRow>
          {COMMENTS.slice(0, 3).map(({
            avatar, content, signature, author, id,
          }) => (
            <Comment image={avatar} name={author} signature={signature} key={id}>
              {content}
            </Comment>
          ))}
        </BigCommentsRow>
        <RegularCommentsRow>
          {COMMENTS.slice(3, 7).map(({
            avatar, content, signature, author, id,
          }) => (
            <Comment image={avatar} name={author} signature={signature} key={id}>
              {content}
            </Comment>
          ))}
        </RegularCommentsRow>
      </CommentSections>
      <Button>Read more comments</Button>
    </StyledWrapper>
  </Container>
);

export default CommentList;
