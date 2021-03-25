import React from 'react';

import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);

export default Layout;
