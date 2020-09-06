import React, { FC, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';
import { NAV_ITEMS, SIDE_NAV_ITEMS } from '../../constants';
import logoImg from '../../assets/logo.svg';
import searchIcon from '../../assets/search.svg';
import accountIcon from '../../assets/account.svg';
import { mq } from '../../theme/theme';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  z-index: 9999;
`;

const StyledNavigation = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1280px;
  margin: ${({ theme }) => theme.size.space.sm} auto 0;
  position: relative;
  ${mq.desktopS} {
    margin: ${({ theme }) => theme.size.space.md} ${({ theme }) => theme.size.space.lg} 0;
  }
`;

const NavLinksContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 5% 0 25%;
`;

const Logo = styled.img`
  height: 64px;
`;

const appear = keyframes`
  from {
       opacity:0;
  }

  to {
       opacity:0.6;
  }
`;

const NavbarLink = styled(NavLink)`
  font-weight: ${({ theme }) => theme.size.weight.medium};
  font-size: ${({ theme }) => theme.size.font.md};
  line-height: 27px;
  text-decoration: none;
  position: relative;
  padding: 5px 25px;
  border-radius: ${({ theme }) => theme.size.space.sm};
  margin: 20px 5px;
  color: ${({ theme }) => theme.color.dark};

  &.active {
    ::after {
      content: '';
      height: 100%;
      position: absolute;
      background: rgba(241, 243, 244, 0.6);
      opacity: 0;
      width: 100%;
      z-index: -1;
      left: 0;
      top: 0;
      border-radius: 5px;
      animation: ${appear} 0.3s ease-in-out forwards;
    }
  }
`;

const BurgerIcon = styled.div<{ isOpen: boolean }>`
  z-index: 99;
  width: 25px;
  height: 25px;
  margin: 25px 10px 0 10px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: ${({ theme }) => theme.color.blue};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  span:nth-child(1) {
    top: 0px;
  }

  span:nth-child(2),
  span:nth-child(3) {
    top: 9px;
  }

  span:nth-child(4) {
    top: 18px;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      span:nth-child(1) {
        top: 18px;
        width: 0%;
        left: 50%;
      }
      span:nth-child(2) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      span:nth-child(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
      span:nth-child(4) {
        top: 18px;
        width: 0%;
        left: 50%;
      }
    `}
`;

const SearchButton = styled.div<{ searchIcon: string }>`
  background-image: url(${searchIcon});
  height: 52px;
  width: 52px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin: 10px 20px 10px auto;
  background-color: rgba(108, 99, 255, 0.3);
  border-radius: 100%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: rgba(108, 99, 255, 0.5);
  }
`;

const AccountButton = styled.div<{ accountIcon: string }>`
  height: 52px;
  width: 52px;
  background-image: url(${accountIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin: 10px 20px;
  background-color: rgba(108, 99, 255, 0.3);
  border-radius: 100%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: rgba(108, 99, 255, 0.5);
  }
`;

const SideMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 100px;
  width: 400px;
  height: calc(100vh - 90px);
  background-color: white;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? null : 'translateX(-100%)')};
`;

const SearchBar = styled.input`
  display: block;
  width: 80%;
  margin: 15px auto;
  border: 1px solid lightgrey;
  border-radius: 15px;
  padding: 10px 5px 7px 15%;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: 5% 50%;
  &:focus {
    outline: none;
  }
`;

const SideLinksContainer = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SideLink = styled(Link)`
  display: flex;
  width: 80%;
  margin: 10px auto;
  height: 50px;
  font-size: ${({ theme }) => theme.size.font.md};
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
  text-decoration: none;
  color: black;
  line-height: 50px;
  font-weight: ${({ theme }) => theme.size.weight.medium};
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateX(10px);
  }
`;

const SideButtonsContainer = styled.nav`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 5%;
  margin: 0 auto ${({ theme }) => theme.size.font.lg};
  display: flex;
  justify-content: space-around;
`;

const SideButton = styled(Link)`
  font-size: ${({ theme }) => theme.size.font.md};
  font-weight: ${({ theme }) => theme.size.weight.medium};
  color: ${({ theme }) => theme.color.primary};
  padding: ${({ theme }) => theme.size.space.sm} ${({ theme }) => theme.size.space.md};
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  border-radius: ${({ theme }) => theme.size.space.sm};
  &:hover {
    background-color: #e1ebfd;
  }
`;

const StyledIcon = styled.div`
  border-radius: 100%;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 50%;
    height: 50%;
    transform: translateY(-25%);
    color: ${({ theme }) => theme.color.blue};
  }
`;

const renderNavLinks = () =>
  NAV_ITEMS.map((item: any) => (
    <NavbarLink key={item.label} exact={item.exact} to={item.to}>
      {item.label}
    </NavbarLink>
  ));

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  return (
    <Wrapper>
      <StyledNavigation isOpen={isMenuOpen}>
        <Link to="/">
          <Logo src={logoImg} alt="logo" />
        </Link>
        <NavLinksContainer>{renderNavLinks()}</NavLinksContainer>
        <SearchButton searchIcon={searchIcon} />
        <AccountButton accountIcon={accountIcon} />
        <BurgerIcon isOpen={isMenuOpen} onClick={toggleMenu}>
          <span />
          <span />
          <span />
          <span />
        </BurgerIcon>
        <SideMenu isOpen={isMenuOpen}>
          <SearchBar />
          <SideLinksContainer>
            {SIDE_NAV_ITEMS.map((item: any) => (
              <SideLink to={item.to}>
                <StyledIcon>{item.icon}</StyledIcon>
                {item.label}
              </SideLink>
            ))}
          </SideLinksContainer>
          <SideButtonsContainer>
            <SideButton to="#">sign in</SideButton>
            <SideButton to="#">download</SideButton>
            <SideButton to="#">register</SideButton>
          </SideButtonsContainer>
        </SideMenu>
      </StyledNavigation>
    </Wrapper>
  );
};

export default Navbar;
