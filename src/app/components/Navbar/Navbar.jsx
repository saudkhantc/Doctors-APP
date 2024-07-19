"use client"
import React, { useState } from "react";
import Link from "next/link";
import { FlagIcon } from "react-flag-kit";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: "US",
    language: "English",
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLanguageSelect = (code, language) => {
    setSelectedLanguage({ code, language });
    setDropdownOpen(false);
  };

  const languages = [
    { code: "US", language: "English" },
    { code: "SA", language: "العربية" },
    { code: "IQ", language: "Kurdî" },
  ];

  return (
    <div>
      <nav className="p-2 md:px-6 border bg-blue-300 text-black border-b-gray-300">
        <div className="md:flex justify-between items-center">
          <div className="md:flex md:justify-between items-center md:w-[75%]">
            <div>
              <Link href="/">
                <h1 className="text-3xl font-semibold font-white  p-3 bg-blue-800 text-white rounded-xl md:text-start text-center">
                  Henaa
                </h1>
              </Link>
            </div>
            <div>
              <button
                onClick={toggleMenu}
                className="md:hidden text-xl md:text-2xl p-2 rounded"
              >
                &#9776;
              </button>
              <div
                className={`${
                  menuOpen ? "block" : "hidden"
                } md:flex flex-col md:flex-row items-center gap-4`}
              >
                <Link href="/">
                  <h1 className="text-xl pt-2 md:pt-0 hover:border-b border-blue-600">Find Doctor</h1>
                </Link>
                <Link href="/">
                  <h1 className="text-xl pt-2 md:pt-0 hover:border-b border-blue-600">Medicines</h1>
                </Link>
                <Link href="/">
                  <h1 className="text-xl pt-2 md:pt-0 hover:border-b border-blue-600">Lab Tests</h1>
                </Link>
                <Link href="/">
                  <h1 className="text-xl pt-2 md:pt-0 hover:border-b border-blue-600">Surgeries</h1>
                </Link>
                <Link href="/">
                  <h1 className="text-xl pt-2 md:pt-0 hover:border-b border-blue-600">Diabetes</h1>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative pt-2 md:pt-0 md:px-5 md:flex md:justify-end md:w-[300px]">
            <div
              className="flex items-center gap-2 cursor-pointer focus:outline-none"
              onClick={toggleDropdown}
            >
              <FlagIcon code={selectedLanguage.code} size={24} />
              <span>{selectedLanguage.language}</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20">
                <div className="py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang.code, lang.language)}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      <div className="flex items-center gap-2">
                        <FlagIcon code={lang.code} size={24} />
                        <span>{lang.language}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="md:flex ">
            <Link href="/">
              <h1 className="text-2xl bg-blue-800 text-white p-3 px-5 font-semibold rounded-xl mt-4 md:mt-0 md:text-start text-center">
                Login
              </h1>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
