import React, { FC } from 'react';
import styled from 'styled-components';
import Comment from '../Comment/Comment';
import mq from '../../theme/breakpoints';

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
      <Comment image="https://api.adorable.io/avatars/120/random">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Corporis culpa et eveniet exercitationem facere id, ipsam praesentium quae quasi quo?
        Blanditiis cumque cupiditate earum error iusto praesentium quasi rerum vero?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Corporis culpa et eveniet exercitationem facere id, ipsam praesentium quae quasi quo?
        Blanditiis cumque cupiditate earum error iusto praesentium quasi rerum vero?
      </Comment>
      <Comment image="https://api.adorable.io/avatars/120/random">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Corporis culpa et eveniet exercitationem facere id, ipsam praesentium quae quasi quo?
        Blanditiis cumque cupiditate earum error iusto praesentium quasi rerum vero?
      </Comment>
    </BigCommentsRow>
    <RegularCommentsRow>
      <Comment image="https://api.adorable.io/avatars/120/random">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Corporis culpa et eveniet exercitationem facere id, ipsam praesentium quae quasi quo?
        Blanditiis cumque cupiditate earum error iusto praesentium quasi rerum vero?
      </Comment>
      <Comment image="https://api.adorable.io/avatars/120/random">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Corporis culpa et eveniet exercitationem facere id, ipsam praesentium quae quasi quo?
        Blanditiis cumque cupiditate earum error iusto praesentium quasi rerum vero?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Corporis culpa et eveniet exercitationem facere id, ipsam praesentium quae quasi quo?
        Blanditiis cumque cupiditate earum error iusto praesentium quasi rerum vero?
      </Comment>
      <Comment image="https://api.adorable.io/avatars/120/random">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Corporis culpa et eveniet exercitationem facere id, ipsam praesentium quae quasi quo?
        Blanditiis cumque cupiditate earum error iusto praesentium quasi rerum vero?
      </Comment>
    </RegularCommentsRow>
  </StyledWrapper>
);

export default CommentList;
