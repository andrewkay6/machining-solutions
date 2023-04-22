import React, { useRef, useEffect } from "react";

interface Props {
    handleClose: () => void;
    showDropdownWindow: boolean;
    children: React.ReactNode;
}

const Dropdown = ({ handleClose, showDropdownWindow, children }: Props) => {
    const dropdownRef = useRef<HTMLDivElement>(null);

    const showHideClassName = showDropdownWindow ? "dropdown dropdownOpen" : "dropdown dropdownClosed";

    return (
        <div className={showHideClassName}>
            <div className="dropdownMain" ref={dropdownRef}>
                {children}  
            </div>
            
            
        </div>
    );
};

export default Dropdown;