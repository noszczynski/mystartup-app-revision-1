import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { useNavbarContext } from '../../contexts/NavbarContext';

const hamburgerBarMixin = () => css`
  background-color: ${({theme}) => theme.color.dark};
  display: block;
  border-radius: 3px;
  height: .125rem;
  width: 16px;
`;

const Element = styled.button<{ isOpen: boolean | undefined }>`
  ${({ theme }) => css`
    cursor:pointer;
    padding: ${theme.size.space.sm};
    display: flex;
    align-items:center;
    justify-content:center;
    height: 32px;
    width: 32px;
    z-index: 1000;
    
    span {
      ${hamburgerBarMixin()};
      
      position: relative;
      
      ::after,
      ::before {
        ${hamburgerBarMixin()};
        background-color: inherit;
        position: absolute;
        top: 0;
        left: 0;
        content: '';
      }
      
      ::after {
        top: 4px;
      }
      
      ::before {
        top: -4px;
      }
    }
  `}`;

const HamburgerMenu: FC = () => {
  const {isMenuOpen, toggleMenuOpen} = useNavbarContext()

  return (
    <Element isOpen={isMenuOpen} onClick={toggleMenuOpen}>
      <span />
    </Element>
  );
};

export default HamburgerMenu;
