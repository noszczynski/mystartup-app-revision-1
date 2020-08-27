import React from 'react';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => (
  <main role="main">
    <Navbar />
    <article>
      {children}
    </article>
  </main>
);

export default Layout;
