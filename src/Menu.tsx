import React, { useState, useEffect } from "react";

interface Props {
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  isMenuOpen: boolean;
  setPageState: (pageState: string) => void;
  pageState: string;
}

const Menu = ({ setIsMenuOpen, isMenuOpen, setPageState, pageState }: Props) => {
  const menuItems = [
    { name: "Home", pageState: "home" },
    { name: "About Us", pageState: "about" },
    { name: "Products", pageState: "products" },
    { name: "Services", pageState: "services" },
  ];

  const getButtonClassName = (item: { name: string; pageState: string }) => {
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

        {menuItems.map((item, index) => {
          return (
            <div className={getButtonClassName(item)} key={index}>
              <button
                className="menuItemButton"
                onClick={() => {
                  setPageState(item.pageState);
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
              </button>
            </div>
          );
        })}
      </div>
  );
};

export default Menu;