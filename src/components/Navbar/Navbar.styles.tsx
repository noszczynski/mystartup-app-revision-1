import { Link, NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import SmoothShowItems from '../SmoothShowItems';

const Navigation: any = styled.div<{isOpen: boolean, scrolled: boolean}>`
  ${({ theme, scrolled }) => css`
    position: fixed;
    top: 0;
    left: 0;
    margin: 0 auto;
    width: 100%;
    background-color: ${theme.color.white};
    z-index: 1000;
    
    ::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: 0;
      left: 0;
      opacity: 0;
      transition: opacity .3s ease-in-out;
      box-shadow: ${theme.utils.createBoxShadow(['medium'])};
      z-index: -1;
    }
    
    ${scrolled && css`
      ::after {
        opacity: 1;
      }
    `};
  `}`;

const LogoWrapper = styled.div`
  ${({theme}) => css`
    display: flex;
    justify-content: space-between;
    width: 150px;
    
    ${theme.mq.mobileL} {
      width: 240px;
      max-width: 240px;
      padding: 0 ${theme.size.space.lg};
    }
  `}`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.size.space.md};
`;

const NavigationInner = styled(SmoothShowItems)<{isOpen: boolean}>`
  ${({ theme }) => css`
    display: none;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    transition: transform .3s ease-in-out;
    flex-direction: row;
    position: relative;
    top: auto;
    left: auto;
    transform: none;
    
    ${theme.mq.laptopS} {
      display: flex;
    }
  `}`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 240px;
  align-items: center;
  justify-content: flex-end;
  gap: .5rem;
  
  ${({theme}) => theme.mq.mobileL} {
    gap: 1rem;
  }
`;

const NavigationItem = styled(NavLink)`
  ${({ theme }) => css`
    font-weight: ${theme.size.weight.regular};
    font-size: ${theme.size.font.md};
    text-decoration: none;
    border-radius: .25rem;
    color: ${theme.color.dark};
    padding: ${theme.size.space.xs} ${theme.size.space.lg};
  
    &.active {
      background-color: ${theme.color.gray50};
    }
  `}`;

const iconMixin = () => css`
  ${({ theme }) => css`
    height: 32px;
    width: 32px;
    display: flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    color: ${theme.color.blue};
    background-color: ${theme.color.blue}20;
    border-radius: 100%;
    transition: opacity .1s ease-in-out;
    
    svg {
      font-size:${theme.size.font.s};
    }
    
    :hover {
      opacity: 0.75;
    }
    
    ${theme.mq.mobileL} {
      height: 48px;
      width: 48px;
      
      svg {
        font-size:${theme.size.font.md};
      }
    }
`}`;

const SearchButton = styled.button`
  ${iconMixin()};
  
`;

const UserButton = styled(Link)`
  ${iconMixin()};
  
`;


Navigation.Navigation = Wrapper;
Navigation.NavigationInner = NavigationInner;
Navigation.ButtonWrapper = ButtonWrapper;
Navigation.LogoWrapper = LogoWrapper;
Navigation.Item = NavigationItem;
Navigation.SearchButton = SearchButton;
Navigation.UserButton = UserButton;

export default Navigation;

