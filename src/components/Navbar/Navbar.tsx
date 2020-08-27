import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 900px;
  margin: 0 auto;
`;

const Navbar: React.FC = () => (
  <div>
    <StyledNavigation>
      <Link to="/">Home</Link>
      <Link to="/category">Categories</Link>
      <Link to="/category/test_id_1">Category with id test_id_1</Link>
      <Link to="/news">News</Link>
      <Link to="/news/123">News #1</Link>
      <Link to="/about">About</Link>
      <Link to="/results/search+string">Search results</Link>
      <Link to="/project/123">Start-up</Link>
    </StyledNavigation>
  </div>
);

export default Navbar;
