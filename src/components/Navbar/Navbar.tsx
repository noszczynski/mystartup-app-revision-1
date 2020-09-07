import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Wrapper,
  StyledNavigation,
  NavLinksContainer,
  Logo,
  BurgerIcon,
  SearchButton,
  AccountButton,
  SideMenu,
  SearchBar,
  SideLinksContainer,
  SideButtonsContainer,
  SideButton,
} from 'components/Navbar/Navbar.styles';
import {
  Search,
  AccountCircle
} from '@material-ui/icons';
import logoImg from 'assets/logo.svg';
import { SIDE_NAV_ITEMS_MAPPED, NAV_ITEMS_MAPPED } from 'utils/constants';

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  return (
    <Wrapper>
      <StyledNavigation isOpen={isMenuOpen}>
        <Link to="/">
          <Logo src={logoImg} alt="logo" />
        </Link>
        <NavLinksContainer>{NAV_ITEMS_MAPPED}</NavLinksContainer>
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
            {SIDE_NAV_ITEMS_MAPPED}
          </SideLinksContainer>
          <SideButtonsContainer>
            <SideButton to="/">sign in</SideButton>
            <SideButton to="/">download</SideButton>
            <SideButton to="/">register</SideButton>
          </SideButtonsContainer>
        </SideMenu>
      </StyledNavigation>
    </Wrapper>
  );
};

export default Navbar;
