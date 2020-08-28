import React, { FC } from 'react';
import Navbar from '../Navbar/Navbar';

const Layout: FC = ({ children }) => (
  <main role="main">
    <Navbar />
    <article>
      {children}
    </article>
  </main>
);

export default Layout;