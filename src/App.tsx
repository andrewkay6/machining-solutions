import React, { useState, useEffect } from 'react';
import Header from './Header';
import './App.css';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProductsPage from './ProductsPage';
import ServicesPage from './ServicesPage';
import ContactPage from './ContactPage';
import Dropdown from './Dropdown';
import Footer from './Footer';
import Menu from './Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pageState, setPageState] = useState('home');
  const [appContentClassName, setAppContentClassName] = useState('appContentContainer');
  const [footerClassName, setFooterClassName] = useState('footerContainer');

  useEffect(() => {
    if (isMenuOpen) {
      setAppContentClassName('appContentContainer displayNone');
      setFooterClassName('footerContainer displayNone');
    } else {
      setAppContentClassName('appContentContainer');
      setFooterClassName('footerContainer');
    }
  }, [isMenuOpen]);

  return (
    <Router>
      <div className="appContainer">
        <Header
          setIsMenuOpen={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
          pageState={pageState}
          setPageState={setPageState}
        />
        <Dropdown
          handleClose={() => setIsMenuOpen(false)}
          showDropdownWindow={isMenuOpen}
          children={
            <Menu
              setIsMenuOpen={setIsMenuOpen}
              isMenuOpen={isMenuOpen}
              pageState={pageState}
              setPageState={setPageState}
            />
          }
        />

        <div className={appContentClassName}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>

        <Footer className={footerClassName} />
      </div>
    </Router>
  );
}

export default App;
