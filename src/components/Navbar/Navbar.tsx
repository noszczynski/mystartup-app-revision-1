import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import logoImg from '../../assets/Logo.png';
import searchButton from '../../assets/Search.png';
import burgerMenuButton from '../../assets/BurgerMenuButton.png';

const StyledNavigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1100px;
  margin: 64px auto 0;
  position: relative;
`;

const Logo = styled.img`
  height: 64px;
`;

const appear = keyframes`
  from {
   
    background: rgba(108, 99, 255, 0);
  }

  to {
   
    background: rgba(108, 99, 255, 0.3);
  }
`;

const NavbarLink = styled(NavLink)`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  text-decoration: none;
  position: relative;

  &.active {
    ::after {
      content: '';
      height: 100%;
      position: absolute;
      width: 100%;
      z-index: -1;
      left: -20%;
      top: -10%;
      animation: ${appear} 0.3s ease-in-out forwards;
    }
  }
`;

const NavLinksContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 300px;
  /* border: 2px solid green; */
  display: flex;
  justify-content: space-between;
`;

const BurgerMenuButton = styled.img`
  height: 16px;
  position: absolute;
  top: 50%;
  right: 0%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  height: 16px;
`;

const SearchButton = styled.img`
  position: absolute;
  top: 50%;
  right: 0px;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  height: 16px;
  margin-left: auto;
  margin-right: 70px;
`;

const Navbar: FC = () => (
  <div>
    <StyledNavigation>
      <Logo src={logoImg} alt="logo" />
      <NavLinksContainer>
        <NavbarLink exact to="/">
          Home
        </NavbarLink>
        <NavbarLink to="/projects">Projects</NavbarLink>
        <NavbarLink to="/news">News</NavbarLink>{' '}
      </NavLinksContainer>
      <SearchButton src={searchButton} alt="" />
      <BurgerMenuButton src={burgerMenuButton} alt="" />
    </StyledNavigation>
  </div>
);

export default Navbar;
