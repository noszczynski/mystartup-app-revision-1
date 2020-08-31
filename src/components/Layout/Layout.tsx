import React, { FC } from 'react';
import Navbar from '../Navbar/Navbar';

const Layout: FC = ({ children }) => (
  <main role="main" style={{ overflow: 'hidden', minHeight: '100vh' }}>
    <Navbar />
    <article>
      {children}
    </article>
  </main>
);

export default Layout;
