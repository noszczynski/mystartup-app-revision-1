import React, { FC } from 'react';

interface Props {
  alt: string,
  src: string
}

const Image: FC<Props> = ({ src, alt, ...props }) => (
  <img src={src} alt={alt} {...props} />
);

export default Image;
