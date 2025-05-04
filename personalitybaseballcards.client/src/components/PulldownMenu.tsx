import React, { useState, useRef, useEffect } from 'react';

function PulldownMenu({ options, onSelect, buttonText }) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        onSelect(option);
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="pulldown-menu" ref={menuRef}>
            <button onClick={toggleMenu} class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">{buttonText}</button>
            {isOpen && (
                <ul>
                    {options.map((option) => (
                        <li key={option} onClick={() => handleOptionClick(option)} list-style-type="none">
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default PulldownMenu;