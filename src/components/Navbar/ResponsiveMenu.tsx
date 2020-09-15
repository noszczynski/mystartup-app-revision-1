import React, { FC } from 'react';
import styled, {css} from 'styled-components';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from 'utils/constants';
import Container from '../Layout/Container';
import HamburgerMenu from './HamburgerMenu';
import { useNavbarContext } from '../../contexts/NavbarContext';

const Wrapper = styled.div<{isOpen: boolean | undefined}>`
  ${({ theme, isOpen }) => css`
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: ${theme.color.primaryBackground};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    transition: transform .2s ease-in-out;
    transform: translateX(-${isOpen ? 0 : 100}%);
    
    > div {
      height: 100%;
    }
  `}`;

const HamburgerWrapper = styled.div`
    height: 30%;
`;

const HamburgerWrapperInner = styled.div`
  ${({theme}) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 76px;
    padding: 0 ${theme.size.space.md};
    
    ${theme.mq.mobileL} {
      height: 90px;
    }
  `}`;

const MenuWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: flex-start;
`;

const MenuItem = styled(NavLink)`
  ${({ theme }) => css`
    padding: ${theme.size.space.sm} ${theme.size.space.md};
    color: ${theme.color.light};
    font-size: ${theme.size.font.xl};
    font-weight: ${theme.size.weight.bold};
    border-radius: .5rem;
    background: ${theme.gradient.violet};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    &.active {
      background: ${theme.gradient.orange};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `}`;

const ResponsiveMenu: FC = () => {
  const { isMenuOpen, toggleMenuOpen } = useNavbarContext()

  const handleLinkClick = () => {
    toggleMenuOpen()
  };

  return (
    <Wrapper isOpen={isMenuOpen}>
      <Container>
        <HamburgerWrapper style={{ height: '30%' }}>
          <HamburgerWrapperInner>
            <HamburgerMenu />
          </HamburgerWrapperInner>
        </HamburgerWrapper>
        <MenuWrapper>
          {NAV_ITEMS.map(({label, to, exact}) => (
            <MenuItem exact={exact} to={to} key={label} onClick={handleLinkClick}>
              {label}
            </MenuItem>
          ))}
        </MenuWrapper>
      </Container>
    </Wrapper>
  );
};

export default ResponsiveMenu;
