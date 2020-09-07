import React, { FC, useState } from 'react';
import {Link } from 'react-router-dom';
import {
  Wrapper,
  StyledNavigation,
  NavLinksContainer,
  Logo,
  NavbarLink,
  BurgerIcon,
  SearchButton,
  AccountButton,
  SideMenu,
  SearchBar,
  SideLinksContainer,
  SideLink,
  SideButtonsContainer,
  SideButton,
  StyledIcon
} from 'components/Navbar/Navbar.styles';
import {
  Search,
  AccountCircle
} from '@material-ui/icons';
import logoImg from 'assets/logo.svg';
import { NAV_ITEMS, SIDE_NAV_ITEMS } from 'utils/constants';



const renderNavLinks = () =>
  NAV_ITEMS.map(({label, exact, to}) => (
    <NavbarLink key={label} exact={exact} to={to}>
      {label}
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
        <SearchButton>
          <Search />
        </SearchButton>
        <AccountButton>
          <AccountCircle />
        </AccountButton> 
        <BurgerIcon isOpen={isMenuOpen} onClick={toggleMenu}>
          <div />
        </BurgerIcon>
        <SideMenu isOpen={isMenuOpen}>
          <SearchBar>
            <Search />
            <input type="text" />
          </SearchBar>
          <SideLinksContainer>
            {SIDE_NAV_ITEMS.map(({to, icon, label}) => (
              <SideLink key={to} to={to}>
                <StyledIcon>{icon}</StyledIcon>
                {label}
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
