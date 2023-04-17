import React, {useState} from 'react';
import Header from './Header';
import './App.css';
import Menu from './Menu';
import Home from './Home';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pageState, setPageState] = useState('home');
  
  let currentPage = (<></>);

  return (

    <div className='appContainer'>
      
      <Header
      setIsMenuOpen={setIsMenuOpen} 
      isMenuOpen={isMenuOpen}/>
      {/* <Modal
        showModalWindow={isMenuOpen}
        handleClose={() => setIsMenuOpen(false)}
        children={<Menu/>}
      /> */}
      <div className="appContentContainer">
        <Home/>
      </div>
      
    </div>
    
  );
}

export default App;
