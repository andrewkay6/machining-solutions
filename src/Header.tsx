import React, {useEffect, useState} from "react";
import { ReactComponent as MenuIcon } from './images/menu.svg';
import headerImage from './images/header.png';
import HeaderBar from "./HeaderBar";
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
            <div className="headerImageContainer">
                <img src={headerImage} alt="Header" className="headerImage" />
            </div>
            <div className="headerBarContainer">
                <HeaderBar
                    setIsMenuOpen={setIsMenuOpen}
                    isMenuOpen={isMenuOpen}
                    setPageState={setPageState}
                    pageState={pageState}
                />
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