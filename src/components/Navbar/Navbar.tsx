import React, { FC, useEffect, useRef, useState } from 'react';
import Element from 'components/Navbar/Navbar.styles';
import { Search, AccountCircle, Brightness7, Brightness4 } from '@material-ui/icons';
import logo from 'assets/logo-right-text.svg';
import * as _ from 'lodash';
import gsap from 'gsap';
import { Image, Container } from '../index';
import { NAV_ITEMS, THEME } from '../../utils/constants';
import HamburgerMenu from './HamburgerMenu';
import { useNavbarContext } from '../../contexts/NavbarContext';

const Navbar: FC = () => {
  const { isMenuOpen, theme, toggleTheme } = useNavbarContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLinksDisabled, setIsLinksDisabled] = useState(false);
  const navigation = useRef(null);
  const wrapper = useRef(null);

  useEffect(() => {
    const fn = _.debounce( () => {
      setIsScrolled(window.scrollY > 200);
    }, 60);

    window.addEventListener('scroll', fn);

    return () => {
      window.removeEventListener('scroll', fn, true);
    };
  }, []);

  const toggleDisableNavItems = () => {
    setIsLinksDisabled(prevState => !prevState);
  };

  const handleMenuClick = (e: Event) => {
    if (isLinksDisabled) {
      e.preventDefault();
    } else {
      setIsLinksDisabled(true);
      const tl = gsap.timeline();

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const [,items] = navigation.current.children;
      const {children} = items;

      tl
        .to(children, {y: '-=100', stagger: 0.2})
        .to(children, {y: 0})
        .call(toggleDisableNavItems);
    }
  };

  return (
    <Element isOpen={isMenuOpen} scrolled={isScrolled} ref={wrapper}>
      <Container>
        <Element.Navigation ref={navigation}>
          <Element.LogoWrapper>
            <Image src={logo} alt="logo" linkTo="/" />
          </Element.LogoWrapper>
          <Element.NavigationInner startHeight="-=100" duration={0.75}>
            {NAV_ITEMS.map(({label, to, exact, alt}) => (
              <Element.Item
                exact={exact}
                to={to}
                alt={alt}
                key={label}
                onClick={handleMenuClick}
              >
                {label}
              </Element.Item>
            ))}
          </Element.NavigationInner>
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
