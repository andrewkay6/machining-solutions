import React from "react";
import menuItems from "./MenuItems";
import { Link } from "react-router-dom";

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

const HeaderBar = ({
  setIsMenuOpen,
  isMenuOpen,
  setPageState,
  pageState,
}: Props) => {
  const getButtonClassName = (item: Page) => {
    if (item.pageState === pageState) {
      return "menuItemButton menuItemSelected";
    } else {
      return "menuItemButton";
    }
  };

  // Flatten the nested menuItems array
  const flattenedMenuItems = menuItems.reduce(
    (acc, section) => [...acc, ...section],
    []
  );

  return (
    <>
      {flattenedMenuItems.map((item, index) => {
        return (
          <div className="menuItemButton" key={index}>
            <Link
              to={`/${item.pageState}`}
              onClick={() => {
                setPageState(item.pageState);
              }}
            >
              <span className="linkText">{item.name}</span>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default HeaderBar;