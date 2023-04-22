import React, { useState, useEffect } from 'react';
import Header from './Header';
import './App.css';
import Menu from './Menu';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProductsPage from './ProductsPage';
import ServicesPage from './ServicesPage';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pageState, setPageState] = useState('home');

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
    default:
      currentPage = <HomePage />;
      break;
  }


  return (

    <div className='appContainer'>

      <Header
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        pageState={pageState}
        setPageState={setPageState}
      />
      <div className="appContentContainer">
        {currentPage}
      </div>

    </div>

  );
}

export default App;
