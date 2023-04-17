import React from "react";
import { ReactComponent as MenuIcon } from './menu.svg';
import headerImage from './header.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="headerContainer">
            <div className="headerImageContainer">
                <img src={headerImage} alt="Header" className="headerImage" />
            </div>
            <button className="headerMenuContainer"
                onClick={handleMenuClick}> 
                <MenuIcon className="menuIcon"/>
            </button>
        </div>
    );
};

export default Header;