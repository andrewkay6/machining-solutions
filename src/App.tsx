import { useState, useEffect } from 'react';
import Header from './Header';
import './App.css';
import AnimatedRoutes from './AnimatedRoutes';
import Dropdown from './Dropdown';
import Footer from './Footer';
import Menu from './Menu';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pageState, setPageState] = useState('');
  const [appContentClassName, setAppContentClassName] = useState('appContentContainer');
  const [appContainerClassName, setAppContainerClassName] = useState('appContainer');
  const [footerClassName, setFooterClassName] = useState('footerContainer');

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageState]);

  useEffect(() => {
    if (isMenuOpen) {
      setAppContentClassName('appContentContainer displayOpenMenu');
      setFooterClassName('footerContainer displayOpenMenu');
      setAppContainerClassName('appContainer appContainerOpen');

    } else {
      setAppContentClassName('appContentContainer');
      setFooterClassName('footerContainer');
      setAppContainerClassName('appContainer appContainerClosed');
    }
  }, [isMenuOpen]);

  return (

      <div className={appContainerClassName}>
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
          <AnimatedRoutes setPageState={setPageState}/>
        </div>

        <Footer className={footerClassName} />
      </div>
  
  );
}

export default App;
