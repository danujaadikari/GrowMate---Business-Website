import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;