import React from "react";
import { ReactComponent as MenuIcon } from './menu.svg';
import headerImage from './header.png';
import Menu from "./Menu";
import Dropdown from "./Dropdown";

interface Props {
    setIsMenuOpen: (isMenuOpen: boolean) => void;
    isMenuOpen: boolean;
}

const Header = ({setIsMenuOpen, isMenuOpen} : Props) => {
    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log(isMenuOpen);
    };


    return (
        <div className="headerContainer">
            <div className="headerImageContainer">
                <img src={headerImage} alt="Header" className="headerImage" />
            </div>
            <button className={"headerMenuContainer"}
                onClick={handleMenuClick}
                disabled={isMenuOpen}> 
                <MenuIcon className="menuIcon"/>
            </button>
            <Dropdown
                handleClose={() => setIsMenuOpen(false)}
                showDropdownWindow={isMenuOpen}
                children={<Menu/>}
            />
            {/* <Menu/> */}
        </div>
    );
};

export default Header;