import React, { FC, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';
import { NAV_ITEMS } from '../../constants';
import logoImg from '../../assets/logo.svg';
import searchIcon from '../../assets/search.svg';
import accountIcon from '../../assets/account.svg';

const StyledNavigation = styled.nav<{ opened: boolean }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1280px;
  margin:${({ theme }) => (`${theme.size.space.md} auto 0`)};
  position: relative;
  @media (max-width: 1280px) {
    margin-left: ${({ theme }) => theme.size.space.lg};
    margin-right: ${({ theme }) => theme.size.space.lg};
  }

  ::before {
    content: '';
    z-index: 1;
    position: fixed;
    width: 0px;
    height: 0px;
    transform: translate(50%, -50%);
    top: 0px;
    right: 0px;
    background: ${({ theme }) => theme.color.primary};
    border-radius: 100%;
    transition: all 0.4s ease-in-out;
  }

  ${({ opened }) => opened
    && css`
      ::before {
        width: 250vh;
        height: 250vh;
      }
    `}
`;

const Logo = styled.img`
  height: 64px;
`;

const appear = keyframes`
  from {
       background: rgba(108, 99, 255, 0);
  }

  to {
       background: rgba(241, 243, 244, 0.6);
  }
`;

const NavbarLink = styled(NavLink)`
  font-weight: ${({ theme }) => theme.size.weight.medium};
  font-size: ${({ theme }) => theme.size.font.md};
  line-height: 27px;
  text-decoration: none;
  position: relative;
  padding: 5px 25px;
  border-radius: 5px;
  margin: 0px 5px;
  color: black;

  &.active {
    ::after {
      content: '';
      height: 100%;
      position: absolute;
      width: 100%;
      z-index: -1;
      left: 0;
      top: 0;
      border-radius: 5px;
      animation: ${appear} 0.3s ease-in-out forwards;
    }
  }
`;

const NavLinksContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
    display: flex;
  justify-content: space-between;
  `;

const BurgerIcon = styled.div<{ opened: boolean }>`
  z-index: 99;
  width: 25px;
  height: 25px;
  position: absolute;
  top: 0%;
  right: 0%;
  margin: 25px auto;
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
    background: ${({ theme }) => theme.color.primary};
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

  ${({ opened }) => opened
    && css`
      span {
        background: white;
      }
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
  position: absolute;
  background-image: url(${searchIcon});
  top: 50%;
  right: 0px;
    transform: translate(-50%, -50%);
  height: 52px;
  width: 52px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin-left: auto;
  margin-right: 130px;
  background-color: rgba(108, 99, 255, 0.3);
  border-radius: 100%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: rgba(108, 99, 255, 0.5);
  }
`;

// const AccountButton = styled(SearchButton)<{
//   accountIcon: String;
// }>`
//   background-image: url(${accountIcon});
// `;

const AccountButton = styled.div<{ accountIcon: string }>`
  position: absolute;
  top: 50%;
  right: 0px;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  height: 52px;
  width: 52px;
  background-image: url(${accountIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin-left: auto;
  margin-right: 40px;
  background-color: rgba(108, 99, 255, 0.3);
  border-radius: 100%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: rgba(108, 99, 255, 0.5);
  }
`;

const renderNavLinks = () => NAV_ITEMS.map((item) => (
  <NavbarLink key={item.label} exact={item.exact} to={item.to}>
    {item.label}
  </NavbarLink>
));

const Navbar: FC = () => {
  const [isMenuOpen, openMenu] = useState(false);

  return (
    <StyledNavigation opened={isMenuOpen}>
      <Link to="/">
        <Logo src={logoImg} alt="logo" />
        {' '}
      </Link>
      <NavLinksContainer>{renderNavLinks()}</NavLinksContainer>
      <SearchButton searchIcon={searchIcon} />
      <AccountButton accountIcon={accountIcon} />
      <BurgerIcon
        opened={isMenuOpen}
        onClick={() => openMenu((prevState) => !prevState)}
      >
        <span />
        <span />
        <span />
        <span />
      </BurgerIcon>
    </StyledNavigation>
  );
};

export default Navbar;
