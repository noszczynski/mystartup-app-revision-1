import React, { FC } from 'react';
import Image from '../Image/Image';
import {
  StyledWrapper,
  StyledAvatar,
  StyledWrapperInner,
  StyledContent,
} from './Comment.styles';
import Signature from '../Signature/Signature';

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
      <Signature image={image} name={name}>
        {signature}
      </Signature>
    </StyledWrapperInner>
  </StyledWrapper>
);

export default Comment;
