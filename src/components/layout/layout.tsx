import React from 'react';

import Snackbar from '@components/snackbar';

import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />

    <Snackbar />
  </>
);

export default Layout;
