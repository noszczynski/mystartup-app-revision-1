import React, { FC, useState } from 'react';
import { NAV_ITEMS } from 'utils/constants';
import { HamburgerMenu } from 'components';
import _ from 'lodash';
import { hot } from 'react-hot-loader/root';
import Container from '../Layout/Container';
import { useNavbarContext } from '../../contexts/NavbarContext';
import Element from './ResponsiveMenu.styles';

const transitions = {
  type: 'spring',
  stiffness: 10,
  ease: 'anticipate',
};

const itemsContainer = {
  in: {
    transition: {
      duration: 2,
      staggerChildren: 0.1,
    },
  },
  out: {
    transition: {
      duration: 2,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  in: {
    x: '200%',
  },
  out: {
    x: '-200%',
  },
  exit: {
    x: '200%',
  },
};

const menuContainer = {
  initial: {
    x: '-100vw',
    transition: {
      duration: 0.5,
    },
  },
  open: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    x: '-100vw',
    transition: {
      duration: 0.5,
    },
  },
};

const ResponsiveMenu: FC = () => {
  const { isMenuOpen, toggleMenuOpen } = useNavbarContext();
  const [clickedItem, setClickedItem] = useState(false);

  const handleLinkClick = () => {
    const delay = _.debounce(() => {
      toggleMenuOpen();
      setClickedItem(false);
    }, 2000);

    setClickedItem(true);
    delay();
  };

  return (
    <Element
      initial="initial"
      animate={isMenuOpen ? 'open' : 'closed'}
      variants={menuContainer}
      transition={transitions}
    >
      <Container>
        <Element.HamburgerWrapper style={{ height: '30%' }}>
          <Element.HamburgerWrapperInner>
            <HamburgerMenu isLight openVariant />
          </Element.HamburgerWrapperInner>
        </Element.HamburgerWrapper>
        <Element.MenuWrapper variants={itemsContainer} animate={clickedItem ? 'in' : 'out'}>
          {NAV_ITEMS.map(({ label, to, exact }) => (
            <Element.MenuItemWrapper key={label}>
              <Element.MenuItem exact={exact} to={to} onClick={handleLinkClick}>
                {label}
              </Element.MenuItem>
              <Element.AnimationBox
                variants={item}
                initial="out"
                exit="exit"
                transition={{
                  duration: 2,
                }}
              />
            </Element.MenuItemWrapper>
          ))}
        </Element.MenuWrapper>
      </Container>
    </Element>
  );
};

export default hot(ResponsiveMenu);
