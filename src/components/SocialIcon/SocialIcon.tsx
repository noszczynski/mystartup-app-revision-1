import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { hot } from 'react-hot-loader/root';

const Wrapper = styled.div<{background?: string | undefined}>`
  ${({ theme, background }) => css`
    border-radius: 100%;
    background-color: ${background};
    color: ${theme.color.white};
    display: flex;
    justify-content:center;
    align-items:center;
    height: 2rem;
    width: 2rem;
    
    svg {
      width: 1rem;
      height: 1rem;
    }
    
    ${theme.mq.laptopS} {
      height: 3rem;
      width: 3rem;
      
      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
`}`;

interface Props {
  linkTo?: string | undefined,
  background?: string | undefined,
}

const defaultProps = {
  linkTo: undefined
};

const SocialIcon:FC<Props> = ({background, linkTo, children}) => {
  const renderIcon = () => (
    <Wrapper background={background}>
      {children}
    </Wrapper>
  );

  return linkTo ? (
    <Link to={linkTo}>
      {renderIcon()}
    </Link>
  ) : renderIcon();
};

SocialIcon.defaultProps = defaultProps;

export default hot(SocialIcon);
