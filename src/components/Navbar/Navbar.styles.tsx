import { NavLink, Link } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';

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
  width: 30px;
  margin: 15px;
  cursor:pointer;
   
  &:after,
  &:before,
  div{
    background-color: ${({theme})=>theme.color.blue};
    border-radius: 3px;
    content: '';
    display: block;
    height: 5px;
    margin: 7px 0;
    transition: all .2s ease-in-out;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
       div {
       transform: scale(0);
       }

       &:before {
       transform: translateY(12px) rotate(135deg);
       }

       &:after {
       transform: translateY(-12px) rotate(-135deg);
        }
    `}
`;

const SearchButton = styled.div`
  height: 52px;
  line-height:57px;
  font-size:${({theme})=>theme.size.font.lg};
  text-align:center;
  color:${({theme})=>theme.color.blue};
  width: 52px;
  margin: 10px 20px 10px auto;
  background-color: rgba(54, 123, 245, 0.2);
  border-radius: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(54, 123, 245, 0.125);
  }
`;

const AccountButton = styled(SearchButton)`
  margin: 10px 20px;
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

const SearchBar = styled.div`
  display: flex;
  width: 80%;
  margin: 15px auto;
  border: 1px solid lightgrey;
  border-radius: 15px;
  padding: ${({theme})=>theme.size.space.sm};
   
  &:focus {
    border:2px solid red;
  }

  input{
    width:90%;
    margin-left:${({theme})=>theme.size.space.sm};
    border:none;
    font-size:${({theme})=>theme.size.font.s} ;

    &:focus {
    outline: none;
    }
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

export {
  Wrapper,
  StyledNavigation,
  NavLinksContainer,
  Logo,
  appear,
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
};