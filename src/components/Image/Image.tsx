import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledImage = styled.img`
  object-fit: cover;
  object-position: center;
`;

interface Props {
  alt: string,
  src: string,
  linkTo?: string,
}

const defaultProps = {
  linkTo: undefined,
};

const Image: FC<Props> = ({
  src, alt, linkTo, ...props
}) => (linkTo ? (
  <Link to={linkTo}>
    <StyledImage src={src} alt={alt} {...props} />
  </Link>
) : (
  <StyledImage src={src} alt={alt} {...props} />
));

Image.defaultProps = defaultProps;

export default Image;
