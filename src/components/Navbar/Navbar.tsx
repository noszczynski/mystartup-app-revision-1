import React, { FC, useEffect, useRef, useState } from 'react';
import Element from 'components/Navbar/Navbar.styles';
import { Search, AccountCircle, Brightness7, Brightness4 } from '@material-ui/icons';
import * as _ from 'lodash';
import gsap from 'gsap';
import { NAV_ITEMS, THEME } from 'utils/constants';
import { logoRight as logo } from 'assets';
import Image from '../Image/Image';
import Container from '../Layout/Container';
import HamburgerMenu from './HamburgerMenu';
import { useNavbarContext } from '../../contexts/NavbarContext';

const Navbar: FC = () => {
  const { isMenuOpen, theme, toggleTheme } = useNavbarContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const navigation = useRef(null);
  const wrapper = useRef(null);

  useEffect(() => {
    const delay = _.debounce(() => {
      setIsScrolled(window.scrollY > 200);
    }, 60);

    window.addEventListener('scroll', delay);

    return () => {
      window.removeEventListener('scroll', delay, true);
    };
  }, []);

  return (
    <Element isOpen={isMenuOpen} scrolled={isScrolled} ref={wrapper}>
      <Container>
        <Element.Navigation ref={navigation}>
          <Element.LogoWrapper>
            <Image src={logo} alt="logo" linkTo="/" />
          </Element.LogoWrapper>
          <Element.ButtonWrapper>
            <Element.SearchButton>
              <Search />
            </Element.SearchButton>
            <Element.SearchButton onClick={toggleTheme}>
              {theme === THEME.LIGHT ? <Brightness4 /> : <Brightness7 />}
            </Element.SearchButton>
            <Element.UserButton to="/settings/:id">
              <AccountCircle />
            </Element.UserButton>
            <HamburgerMenu />
          </Element.ButtonWrapper>
        </Element.Navigation>
      </Container>
    </Element>
  );
};

export default Navbar;
