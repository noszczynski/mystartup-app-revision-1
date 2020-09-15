import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import ResponsiveContainer from './ResponsiveContainer';
import ResponsiveMenu from '../Navbar/ResponsiveMenu';
import { NavbarContextProvider, useNavbarContext } from '../../contexts/NavbarContext';

const Wrapper = styled.main<{isMenuOpen: boolean | undefined}>`
  width: 100%;
  max-width: 100%;
  background-color: ${({ theme }) => theme.color.primaryBackground};
  
  ${({ theme }) => theme.mq.laptopS} {
      overflow: auto;
      height: auto;
  }
`;

const StyledContainer = styled.article`
  ${({ theme }) => css`
  padding: 0 ${theme.size.space.md};
  row-gap: ${theme.size.space.lg};
  column-gap: ${theme.size.space.lg};

  ${theme.mq.tablet} {
    padding: 0 ${theme.size.space.lg};
    row-gap: ${theme.size.space.xxxl};
    column-gap: ${theme.size.space.xxxl};
  }
`}`;

const Layout: FC = ({ children }) => {
  const {isMenuOpen} = useNavbarContext();

  return (
    <NavbarContextProvider>
      <Wrapper isMenuOpen={isMenuOpen} role="main">
        <Navbar />
        <ResponsiveMenu />
        <ResponsiveContainer>
          <StyledContainer>
            {children}
            <Footer />
          </StyledContainer>
        </ResponsiveContainer>
      </Wrapper>
    </NavbarContextProvider>
  );
};

export default Layout;
