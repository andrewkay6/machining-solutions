import React, { useState, useEffect } from 'react';
import Header from './Header';
import './App.css';
import Menu from './Menu';
import Home from './Home';
import About from './About';
import Products from './Products';
import Services from './Services';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pageState, setPageState] = useState('home');

  let currentPage = (<></>);

  switch (pageState) {
    case 'home':
      currentPage = <Home />;
      break;
    case 'about':
      currentPage = <About />;
      break;
    case 'products':
      currentPage = <Products />;
      break;
    case 'services':
      currentPage = <Services />;
      break;
    default:
      currentPage = <Home />;
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
