import React, { useEffect, useState, useRef } from 'react';
import Header from './Header';
import './App.css';
import Menu from './Menu';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProductsPage from './ProductsPage';
import ServicesPage from './ServicesPage';
import ContactPage from './ContactPage';
import Dropdown from './Dropdown';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pageState, setPageState] = useState('home');
  const [isMenuAnimating, setIsMenuAnimating] = useState(false);
  const [appContentClassName, setAppContentClassName] = useState('appContentContainer');

  let currentPage = (<></>);

  switch (pageState) {
    case 'home':
      currentPage = <HomePage />;
      break;
    case 'about':
      currentPage = <AboutPage />;
      break;
    case 'products':
      currentPage = <ProductsPage />;
      break;
    case 'services':
      currentPage = <ServicesPage />;
      break;
    case 'contact':
      currentPage = <ContactPage />;
      break;
    default:
      currentPage = <HomePage />;
      break;
  }

  useEffect(() => {
    if (isMenuOpen) {
      setAppContentClassName('appContentContainer displayNone');
    } else {
      setAppContentClassName('appContentContainer');
    }
  }, [isMenuOpen]);

  return (

    <div className='appContainer'>
      <div className='headerAndDropdownContainer'>

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
              isMenuAnimating={isMenuAnimating}
              setIsMenuAnimating={setIsMenuAnimating}
            />
          }
        />
      </div>
      <div className={appContentClassName}>
        {currentPage}
      </div>

    </div>

  );
}

export default App;
