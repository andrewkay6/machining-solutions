import React, { useState, useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
import menuItems from "./MenuItems";
interface Page {
  name: string;
  pageState: string;
}

interface Props {
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  isMenuOpen: boolean;
  setPageState: (pageState: string) => void;
  pageState: string;
}

const Menu = ({ setIsMenuOpen, isMenuOpen, setPageState, pageState }: Props) => {

  const getButtonClassName = (item: Page) => {
    if (item.pageState === pageState) {
      return "menuItemButton menuItemSelected";
    } else {
      return "menuItemButton";
    }
  };

  const getMenuClassName = () => {
    if (isMenuOpen) {
      return "menuContainer menuContainerOpen";
    } else {
      return "menuContainer menuContainerClosed";
    }
  };

  const [menuDisplay, setMenuDisplay] = useState("none");

  useEffect(() => {
    if (isMenuOpen) {
      setMenuDisplay("block");
    }
  }, [isMenuOpen]);

  return (
    <div
      className={getMenuClassName()}
      style={{ display: menuDisplay }}
      onTransitionEnd={() => {
        if (!isMenuOpen) {
          setMenuDisplay("none");
        }
      }}
    >
      {menuItems.map((section, sectionIndex) => {
        return (
          <div className='menuSectionContainer'
          key={`section-${sectionIndex}`}>
            {section.map((item, index) => {
              return (
                <div className={getButtonClassName(item)} key={index}>
                  <Link
                    className="menuItemButton"
                    to={`/${item.pageState}`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setPageState(item.pageState);
                    }}
                  >
                      <span className="linkTextHeader">{item.name}</span>

                  </Link>
                </div>
              );
            })}
            {sectionIndex !== menuItems.length - 1 && (
              <div className="menuBreak"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;