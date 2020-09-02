import React, { FC } from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  object-fit: cover;
  object-position: center;
`;

interface Props {
  alt: string,
  src: string
}

const Image: FC<Props> = ({ src, alt, ...props }) => (
  <StyledImage src={src} alt={alt} {...props} />
);

export default Image;
