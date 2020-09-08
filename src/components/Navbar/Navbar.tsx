import React, { FC, useEffect, useRef, useState } from 'react';
import Element from 'components/Navbar/Navbar.styles';
import { Search, AccountCircle } from '@material-ui/icons';
import logo from 'assets/logo-right-text.svg';
import * as _ from 'lodash';
// eslint-disable-next-line import/no-cycle
import { Image, Container } from '../index';
import { NAV_ITEMS } from '../../utils/constants';
import HamburgerMenu from './HamburgerMenu';

interface Props {
  toggle: any;
  open: boolean;
}

const Navbar: FC<Props> = ({toggle, open}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const wrapper = useRef(null);

  useEffect(() => {
    const fn = _.debounce(function () {
      setIsScrolled(window.scrollY > 200);
    }, 60);

    window.addEventListener('scroll', fn);

    return () => {
      window.removeEventListener('scroll', fn, true);
    };
  }, []);

  return (
    <Element isOpen={open} scrolled={isScrolled} ref={wrapper}>
      <Container>
        <Element.Navigation>
          <Element.LogoWrapper>
            <Image src={logo} alt="logo" linkTo="/" />
          </Element.LogoWrapper>
          <Element.NavigationInner>
            {NAV_ITEMS.map(({label, to, exact, alt}) => (
              <Element.Item exact={exact} to={to} alt={alt} key={label}>{label}</Element.Item>
            ))}
          </Element.NavigationInner>
          <Element.ButtonWrapper>
            <Element.SearchButton>
              <Search />
            </Element.SearchButton>
            <Element.UserButton to="/settings/:id">
              <AccountCircle />
            </Element.UserButton>
            <HamburgerMenu open={open} toggle={toggle} />
          </Element.ButtonWrapper>
        </Element.Navigation>
      </Container>
    </Element>
  );
};

export default Navbar;
