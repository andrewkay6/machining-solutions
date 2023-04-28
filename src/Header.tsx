import React, {useEffect, useState} from "react";
import { ReactComponent as MenuIcon } from './images/menu.svg';
import headerImage from './images/header.png';
import HeaderBar from "./HeaderBar";
import { Link } from "react-router-dom";
interface Props {
    setIsMenuOpen: (isMenuOpen: boolean) => void;
    isMenuOpen: boolean;
    setPageState: (pageState: string) => void;
    pageState: string;
}

const Header = ({ setIsMenuOpen, isMenuOpen, setPageState, pageState }: Props) => {
    
    const [headerContainerClassName, setHeaderContainerClassName] = useState("headerContainer");
    
    const handleMenuClick = () => {
            setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            setHeaderContainerClassName("headerContainer headerContainerOpen");
        } else {
            setHeaderContainerClassName("headerContainer headerContainerClosed");
        }
    }, [isMenuOpen]);


    return (
        <>
        <div className={headerContainerClassName}>
            <Link className="headerImageContainer"
                to="/"
                onClick={() => {
                    setPageState("");
                    setIsMenuOpen(false);
                }}
                >
                <img src={headerImage} alt="Header" className="headerImage" />
            </Link>
            <div className="headerBarContainer">
                <HeaderBar setPageState={setPageState}/>
            </div>

            <div className={"headerMenuContainer"}>
                <MenuIcon 
                onClick={handleMenuClick}
                className="menuIcon" />
            </div>
        </div>
        
    </>
    );
};

export default Header;