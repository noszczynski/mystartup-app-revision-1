import React, { FC } from 'react';
import Image from '../Image/Image';
import Title from '../Title/Title';
import {
  StyledWrapper,
  StyledAvatar,
  StyledWrapperInner,
  StyledContent,
  StyledSignature,
  StyledSignatureInner,
} from './Comment.styles';

interface Props {
  image: string,
  name: string,
  signature: string
}

const Comment: FC<Props> = ({
  children,
  image,
  name,
  signature,
}) => (
  <StyledWrapper
    whileHover={{
      y: -4,
      backgroundColor: '#fff',
      boxShadow: '0 5px 15px -8px rgba(0,0,0,.5)',
    }}
    transition={{
      filter: { delay: 0.1 },
    }}
  >
    <StyledAvatar>
      <Image src={image} alt="comment author avatar" />
    </StyledAvatar>
    <StyledWrapperInner>
      <StyledContent>
        &#34;
        {children}
        &#34;
      </StyledContent>
      <StyledSignature>
        <Image src={image} alt="start-up cover" />
        <StyledSignatureInner>
          <Title component="h5">{name}</Title>
          <Title component="h6">
            {signature}
          </Title>
        </StyledSignatureInner>
      </StyledSignature>
    </StyledWrapperInner>
  </StyledWrapper>
);

export default Comment;
