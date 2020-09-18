import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Menu: any = styled(motion.div)`
  ${({ theme }) => css`
    z-index: 10000;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: ${theme.color.dark};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    
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

const MenuWrapper = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: flex-start;
`;

const MenuItemWrapper = styled.div`
  width: 320px;
  margin-bottom: ${({theme}) => theme.size.space.sm};
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const AnimationBox = styled(motion.span)`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.color.white};
  z-index: 1;
`;

const MenuItem = styled(NavLink)`
  ${({ theme }) => css`
    padding: ${theme.size.space.sm} ${theme.size.space.md};
    color: ${theme.color.white};
    font-size: ${theme.size.font.xl};
    font-weight: ${theme.size.weight.bold};
    background: ${theme.color.light};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    width: 100%;
    
    &.active {
      background: ${theme.gradient.orange};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `}`;

Menu.HamburgerWrapper = HamburgerWrapper;
Menu.HamburgerWrapperInner = HamburgerWrapperInner;
Menu.MenuWrapper = MenuWrapper;
Menu.MenuItemWrapper = MenuItemWrapper;
Menu.AnimationBox = AnimationBox;
Menu.MenuItem = MenuItem;

export default Menu;
