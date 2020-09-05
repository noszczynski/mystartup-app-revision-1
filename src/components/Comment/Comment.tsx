import React, { FC } from 'react';
import Image from '../Image/Image';
import Element from './Comment.styles';
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
  <Element
    whileHover={defaultHover}
    transition={{
      filter: { delay: 0.1 },
    }}
  >
    <Element.Avatar>
      <Image src={image} alt="comment author avatar" />
    </Element.Avatar>
    <Element.WrapperInner>
      <Element.Content>
        &#34;
        {children}
        &#34;
      </Element.Content>
      <Signature image={image} name={name} id="user_2">
        {signature}
      </Signature>
    </Element.WrapperInner>
  </Element>
);

export default Comment;
