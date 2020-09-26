import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { useNavbarContext } from '../../contexts/NavbarContext';

const hamburgerBarMixin = (isLight: boolean | undefined) => css`
  background-color: ${({theme}) => isLight ? theme.color.white : theme.color.hamburger};
  display: block;
  border-radius: 8px;
  height: .125rem;
  width: 80%;
`;

const Element = styled.button<{ isLight: boolean | undefined, isOpen: boolean | undefined }>`
  ${({ theme, isLight, isOpen }) => css`
    cursor:pointer;
    padding: 0.4rem;
    display: flex;
    align-items:center;
    justify-content:center;
    height: 32px;
    width: 32px;
    z-index: 1000;
    
    :hover span::after{
      transform: translateY(2px);
    }
    
    :hover span::before{
      transform: translateY(-2px);
    }
    
    ${theme.mq.mobileL} {
      height: 48px;
      width: 48px;
      
      svg {
        font-size:${theme.size.font.md};
      }
    }
    
    span {
      ${hamburgerBarMixin(isLight)};
      
      position: relative;
      
      ::after,
      ::before {
        ${hamburgerBarMixin(isLight)};
        content: '';
        background-color: inherit;
        position: absolute;
        top: 0;
        transition: transform .2s ease-in-out;
        ${isOpen ? css` right: 0; ` : css` left: 0; `};
      }
      
      ::after {
        top: 5px;
      }
      
      ::before {
        top: -5px;
      }
    }
  `}`;

interface Props {
  isLight?: boolean | undefined,
  openVariant?: boolean | undefined,
}

const defaultProps = {
  isLight: false,
  openVariant: false,
};

const HamburgerMenu: FC<Props> = ({isLight, openVariant}) => {
  const { toggleMenuOpen } = useNavbarContext();

  return (
    <Element
      isOpen={openVariant}
      onClick={toggleMenuOpen}
      isLight={isLight}
    >
      <span />
    </Element>
  );
};

HamburgerMenu.defaultProps = defaultProps;

export default HamburgerMenu;
