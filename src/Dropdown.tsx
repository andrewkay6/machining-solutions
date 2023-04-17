import React, { useRef, useEffect } from "react";

interface Props {
    handleClose: () => void;
    showDropdownWindow: boolean;
    children: React.ReactNode;
}

const Dropdown = ({ handleClose, showDropdownWindow, children }: Props) => {
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef != null ) {
                if (
                    dropdownRef.current &&
                    !dropdownRef.current.contains(event.target as Node) &&
                    showDropdownWindow
                ) {
                    handleClose();
                }
            }

        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef, handleClose, showDropdownWindow]);

    const showHideClassName = showDropdownWindow ? "dropdown" : "dropdown displayNone";

    return (
        <div className={showHideClassName}>
            <div className="dropdownMain" ref={dropdownRef}>
                {children}
            </div>
        </div>
    );
};

export default Dropdown;