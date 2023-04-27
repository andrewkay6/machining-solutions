import menuItems from "./MenuItems";
import { Link } from "react-router-dom";


interface Props {setPageState: (pageState: string) => void;}

const HeaderBar = ({setPageState}: Props) => {
 

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