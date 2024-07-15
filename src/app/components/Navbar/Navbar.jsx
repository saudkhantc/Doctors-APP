"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../assets/images/appLogo.svg";
import { LuMapPin } from "react-icons/lu";
import { GrNext } from "react-icons/gr";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import CountryDp from "../CountryDropdown/CountryDp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white p-4 md:px-10 border border-b-gray-300 ">
      <div className="flex  md:justify-around  flex-wrap items-baseline ">
        <div className="flex items-center space-x-4 ">
          <button onClick={toggleMenu} className="md:hidden text-2xl">
            <FaBars />
          </button>
          <div className=" ">
            <Link href="/" className="text-[#56BFDD]  ">
              <Image src={logo} width={110} alt="img" />
            </Link>
          </div>
        </div>
        <div className=" ">
          <ul className="flex flex-wrap md:space-x-8 items-center mt-4 md:mt-0 ">
            <li className="hidden md:flex">
              <Link href="/" className="flex items-center space-x-2">
                <LuMapPin size={24} />
                <span>United Arab Emirates</span>
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <div className="flex bg-gray-100 p-1 rounded-md items-center mt-4 md:mt-0 ">
                <CiSearch size={24} className="ml-2" />
                <input
                  type="text"
                  placeholder="Find by speciality, doctor, clinic or hospital"
                  className="p-2 bg-gray-100 text-black placeholder-gray-400 outline-none w-full md:w-[500px]"
                />
                <div className="bg-[#136C62] p-2 rounded-md">
                  <GrNext color="white" size={24} />
                </div>
              </div>
            </li>

            <li className="hidden md:flex">
              <CountryDp />
            </li>
            <li className="hidden md:block font-semibold">Login</li>
          </ul>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div className="fixed inset-y-0 left-0 bg-white w-64 p-2">
            <div className="flex justify-end">
              <div></div>
              <button onClick={toggleMenu} className=" mb-4  ">
                <FaTimes size={24} />
              </button>
            </div>
            <ul className="space-y-4">
              <li>
                <Link href="/">
                  <Image src={logo} width={110} alt="img" />
                </Link>
              </li>

              <li>
                <div className="flex items-center space-x-2">
                  <span>UAE - EN</span>
                  <FaAngleDown size={20} />
                </div>
              </li>
              <li className="font-semibold">Login</li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
