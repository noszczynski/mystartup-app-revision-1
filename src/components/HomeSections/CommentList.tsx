import React, { FC } from 'react';
import styled from 'styled-components';
import Comment from '../Comment/Comment';
import mq from '../../theme/breakpoints';
import { COMMENTS } from '../../constants';

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const BigCommentsRow = styled.div`
  display: none;
  
  ${mq.laptopS} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;

const RegularCommentsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  ${mq.laptopS} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CommentList: FC = () => (
  <StyledWrapper>
    <BigCommentsRow>
      {COMMENTS.slice(0, 2).map(({
        avatar, content, signature, author,
      }) => (
        <Comment image={avatar} name={author} signature={signature}>
          {content}
        </Comment>
      ))}
    </BigCommentsRow>
    <RegularCommentsRow>
      {COMMENTS.slice(2, 5).map(({
        avatar, content, signature, author,
      }) => (
        <Comment image={avatar} name={author} signature={signature}>
          {content}
        </Comment>
      ))}
    </RegularCommentsRow>
  </StyledWrapper>
);

export default CommentList;
