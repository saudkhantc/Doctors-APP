import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";

const CountryDp = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Sample data for countries and languages
    const countries = [
        { name: 'United Arab Emirates', languages: ['EN', 'AR'] },
        { name: 'United States', languages: ['EN'] },
        { name: 'United Kingdom', languages: ['EN'] },
        // Add more countries as needed
    ];

    return (
        <div className="relative">
        <button onClick={toggleDropdown} className="flex items-center space-x-2">
            <span>UAE - EN</span>
            <FaAngleDown size={20} className={isOpen ? 'rotate-180' : ''} />
        </button>
        {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <ul className="py-1">
                    {/* Replace with your dynamic list */}
                    <li className="cursor-pointer px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">
                        <div>Country 1</div>
                        <div className="text-xs text-gray-500">EN, AR</div>
                    </li>
                    <li className="cursor-pointer px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">
                        <div>Country 2</div>
                        <div className="text-xs text-gray-500">EN</div>
                    </li>
                </ul>
            </div>
        )}
    </div>
    );
};

export default CountryDp;
