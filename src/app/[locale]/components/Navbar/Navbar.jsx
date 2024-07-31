"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FlagIcon } from "react-flag-kit";
import Image from "next/image";
import HanaaLogo from "@/assets/images/HanaaLogo.png";
import { usePathname } from '@/navigation';
import {LocalizedLink} from '@/navigation'


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: "IQ",
    language: "English",
    country: "Iraq",
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLanguageSelect = (code, language, country) => {
    setSelectedLanguage({ code, language, country });
    setDropdownOpen(false);
  };

  const languages = [
   
    { code: "IQ", language: "English", country: "Iraq" },
    { code: "IQ", language: "كوردى", country: "عێراق" },
    { code: "IQ", language: "العربية", country: "العراق" }
  ];

  
  const pathname = usePathname();
  console.log("🚀 ~ Navbar ~ pathname:", pathname)
  
  const isActive = (path) => path === pathname;

  return (
    <div>
      <nav className="p-4 md:px-3 bg-white border-b text-[#2A7798] ropa-sans-regular">
        <div className="md:flex justify-between items-center">
          <div className="md:flex gap-8 items-center md:w-[75%]">
            <div className="">
              <Link href="/">
                <Image
                  src={HanaaLogo}
                  alt="Logo"
                  className="w-[200px] h-[60px] object-cover mix-blend-multiply"
                />
              </Link>
            </div>
            {/* <div>
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
                  <h1 className="text-xl pt-2 md:pt-0 hover:border-b border-blue-600">
                    Find Doctor
                  </h1>
                </Link>
                <Link href="/">
                  <h1 className="text-xl pt-2 md:pt-0 hover:border-b border-blue-600">
                    Medicines
                  </h1>
                </Link>
                <Link href="/">
                  <h1 className="text-xl pt-2 md:pt-0 hover:border-b border-blue-600">
                    Lab Tests
                  </h1>
                </Link>
                <Link href="/">
                  <h1 className="text-xl pt-2 md:pt-0 hover:border-b border-blue-600">
                    Surgeries
                  </h1>
                </Link>
                <Link href="/">
                  <h1 className="text-xl pt-2 md:pt-0 hover:border-b border-blue-600">
                    Diabetes
                  </h1>
                </Link>
              </div>
            </div> */}
          </div>

          {/* <div className="relative pt-2 md:pt-0 md:px-5 md:flex md:justify-end md:w-[250px] ">
            <div
              className="flex items-center gap-2 cursor-pointer focus:outline-none"
              onClick={toggleDropdown}
            >
              <FlagIcon code={selectedLanguage.code} size={24} />
              <span className="flex justify-between w-full ">
                <span className="text-xl">{selectedLanguage.country} - </span>
                <span className="text-lg">{selectedLanguage.language}</span>
              </span>
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
            </div> */}
            <div className="relative pt-2 md:pt-0 md:px-5 md:flex md:justify-end md:w-[250px]">
      <div
        className="flex items-center gap-2 cursor-pointer focus:outline-none"
        onClick={toggleDropdown}
      >
        <FlagIcon code={selectedLanguage.code} size={24} />
        <span className="flex justify-between w-full">
          <span className="text-xl">{selectedLanguage.country} - </span>
          <span className="text-lg">{selectedLanguage.language}</span>
        </span>
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
            {/* {dropdownOpen && (
              <div className="absolute right-0 mt-10 md:w-[250px] md:p-3 bg-white rounded-md shadow-lg overflow-hidden z-20">
                <div className="py-1 p-2">
                  <span className="text-black text-[12px] flex justify-center">
                    Select your region and language
                  </span>
                  {languages.map((lang) => (
                    <button
                      key={lang.code + lang.language}
                      onClick={() =>
                        handleLanguageSelect(
                          lang.code,
                          lang.language,
                          lang.country
                        )
                      }
                      className="block w-full p-2 text-gray-800 hover:bg-gray-200"
                    >
                      <div className="flex items-center justify-between mt-2 w-[200px] ">
                        <FlagIcon code={lang.code} size={24} />
                        <div className="flex-1 mx-2 text-[12px] text-left">
                          {lang.country}
                          <span className="ps-1"> - </span>
                          {lang.language}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )} */}

          
            {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <div className="py-1">
            <LocalizedLink href={pathname} locale="en" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              🏴 English
            </LocalizedLink>
            <LocalizedLink href={pathname} locale="ar" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Arabic
            </LocalizedLink>
          </div>
        </div>
      )}

          </div>
          <div className="md:flex">
            <Link href="/">
              <h1 className=" text-[#2A7798]  px-4 py-1 text-xl rounded-md  md:mt-0 md:text-start text-center">
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

