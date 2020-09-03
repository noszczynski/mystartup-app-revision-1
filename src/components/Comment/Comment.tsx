import React, { FC } from 'react';
import Image from '../Image/Image';
import {
  StyledWrapper,
  StyledAvatar,
  StyledWrapperInner,
  StyledContent,
} from './Comment.styles';
import Signature from '../Signature/Signature';
import { defaultHover } from '../../utils/animations';

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
    whileHover={defaultHover}
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
      <Signature image={image} name={name} id="user_2">
        {signature}
      </Signature>
    </StyledWrapperInner>
  </StyledWrapper>
);

export default Comment;
