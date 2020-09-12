import React, { FC } from 'react';
import styled, {css} from 'styled-components';
// eslint-disable-next-line import/no-cycle
import ResponsiveMenu from 'components/Navbar/ResponsiveMenu';
// eslint-disable-next-line import/no-cycle
import Navbar from '../Navbar/Navbar';
import ResponsiveContainer from './ResponsiveContainer';
import { Footer } from '../index';
import { NavbarContextProvider, useNavbarContext } from '../../contexts/NavbarContext';

const Wrapper = styled.main<{isMenuOpen: boolean | undefined}>`
  width: 100%;
  max-width: 100%;
  
  ${({ theme }) => theme.mq.laptopS} {
      overflow: auto;
      height: auto;
  }
`;

const StyledContainer = styled.article`
  ${({ theme }) => css`
  padding: 0 ${theme.size.space.md};
  gap: ${theme.size.space.lg};

  ${theme.mq.tablet} {
    padding: 0 ${theme.size.space.lg};
    gap: ${theme.size.space.xxxl};
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
