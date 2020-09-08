import React, { FC, useState } from 'react';
import styled, {css} from 'styled-components';
// eslint-disable-next-line import/no-cycle
import ResponsiveMenu from 'components/Navbar/ResponsiveMenu';
// eslint-disable-next-line import/no-cycle
import Navbar from '../Navbar/Navbar';
import ResponsiveContainer from './ResponsiveContainer';

const Wrapper = styled.main<{isMenuOpen: boolean}>`
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

  ${theme.mq.tablet} {
    padding: 0 ${theme.size.space.lg};
  }
`}`;

const Layout: FC = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setMenuOpen((prevState: boolean) => !prevState);
  };

  return (
    <Wrapper isMenuOpen={isMenuOpen} role="main">
      <Navbar toggle={toggleMenu} open={isMenuOpen} />
      <ResponsiveMenu open={isMenuOpen} toggle={toggleMenu} />
      <ResponsiveContainer>
        <StyledContainer>
          {children}
        </StyledContainer>
      </ResponsiveContainer>
    </Wrapper>
  );
};

export default Layout;
