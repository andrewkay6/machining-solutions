import React, {useEffect, useState} from "react";
import { ReactComponent as MenuIcon } from './images/menu.svg';
import headerImage from './images/header.png';
import Menu from "./Menu";
import Dropdown from "./Dropdown";

interface Props {
    setIsMenuOpen: (isMenuOpen: boolean) => void;
    isMenuOpen: boolean;
    setPageState: (pageState: string) => void;
    pageState: string;
}

const Header = ({ setIsMenuOpen, isMenuOpen, setPageState, pageState }: Props) => {
    
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
                <MenuIcon className="menuIcon" />
            </button>
            <Dropdown
                handleClose={() => setIsMenuOpen(false)}
                showDropdownWindow={isMenuOpen}
                children={<Menu
                    setIsMenuOpen={setIsMenuOpen}
                    isMenuOpen={isMenuOpen}
                    pageState={pageState}
                    setPageState={setPageState}
                    
                />}
            />
            {/* <Menu/> */}
        </div>
    );
};

export default Header;