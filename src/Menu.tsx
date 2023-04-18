interface Props {
    setIsMenuOpen: (isMenuOpen: boolean) => void;
    isMenuOpen: boolean;
    setPageState: (pageState: string) => void;
    pageState: string;
    
}

const Menu = ({setIsMenuOpen, isMenuOpen, setPageState, pageState} : Props) => {

    const menuItems =[
        {name: 'Home', pageState: 'home'},
        {name: 'About Us', pageState: 'about'},
        {name: 'Products', pageState: 'products'},
        {name: 'Services', pageState: 'services'}
    ];

    const getClassName = (item: {name: string, pageState: string}) => {
        if (item.pageState === pageState) {
            return 'menuItemButton menuItemSelected';
        } else {
            return 'menuItemButton';
        }
    };

    return (
        <div className="menuContainer">
            <div className="menuItemsContainer">
                {menuItems.map((item, index) => {
                    return (
                        <div className={getClassName(item)} key={index}>
                            <button className="menuItemButton" onClick={() => {
                                setPageState(item.pageState);
                                setIsMenuOpen(false);
                            }}>
                                {item.name}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>

        
    );
};

export default Menu;