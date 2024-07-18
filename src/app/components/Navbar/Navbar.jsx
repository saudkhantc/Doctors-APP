// "use client";
//  import { useState } from "react";
//  import Link from "next/link";
// import CountryDp from "../CountryDropdown/CountryDp";
// import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";
// import Image from "next/image";
//  import logo from "../../../assets/images/appLogo.svg";
//  import { FaAngleDown } from "react-icons/fa6";

// const Navbar=()=>{
//   return(
//     <>
//       <div className="flex items-center justify-between bg-white p-4">
//       <div className="dev1">
//       <Link href="/" className="text-[#2A7798]">            
//             <h1 className="text-4xl font-bold font-white  border-b">Henna</h1>
//           </Link>
//       </div>

//       <div className="dev2 flex gap-4">
//       <div className="dev1">
//       <ul className="flex space-x-8">
//         <li>
//         <Link href="/" className="text-[#2A7798]">            
//           Home
//           </Link>
//         </li>
//         <li>
//         <Link href="/" className="text-[#2A7798]">            
//           About Us
//           </Link>
//         </li>
//         <li>
//         <Link href="/" className="text-[#2A7798]">            
//           Our Services
//           </Link>
//         </li>
//         <li>
//         <Link href="/" className="text-[#2A7798]">            
//           Contact us
//           </Link>
//         </li>
//       </ul>

//       <div className="flex">
//       <div className=" ">
//           <ul className="flex flex-wrap md:space-x-8 items-center mt-4 md:mt-0 ">
          

//            <li className="">
//                <CountryDp />
//              </li>
//              <li className="font-semibold">Login</li>
//          </ul>
//         </div>
//       </div>

//        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
//           <div className="fixed inset-y-0 left-0 bg-white w-64 p-2">
//           <div className="flex justify-end">
//              <div></div>
//            <button className=" mb-4  ">
//              <FaTimes size={24} />
//             </button>
//          </div>
//          <ul className="space-y-4">
//            <li>
//             <Link href="/">
//                 <Image src={logo} width={110} alt="img" />
//              </Link>
//             </li>

//             <li>
//              <div className="flex items-center space-x-2">
//                <span>UAE - EN</span>
//                    <FaAngleDown size={20} />
//                  </div>
//                </li>
//                <li className="font-semibold">Login</li>
//              </ul>
//            </div>
//          </div>



//       </div>

//       </div>
      


//       </div>
           
//     </>
//   )
// };
// export default Navbar;






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
    <nav className="bg-white p-4 border border-b-gray-300 md:px-10">
      <div className="flex  justify-between flex-wrap items-baseline ">
        <div className="flex items-center space-x-4 ">
          <button onClick={toggleMenu} className="md:hidden text-2xl">
            <FaBars />
          </button>
          <div className=" ">
            <Link href="/" className="text-blue-300">
              <h1 className="text-4xl font-white border-b ">Henna</h1>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex ">
          <ul className="flex flex-wrap md:space-x-8 items-center mt-4 ">
          <li>
    <Link href="/" className="text-[#2A7798] text-lg font-semibold">            
         Home
         </Link>
          </li>
          <li>
    <Link href="/" className="text-[#2A7798] text-lg font-semibold">            
         About Us
         </Link>
          </li>
          <li>
    <Link href="/" className="text-[#2A7798] text-lg font-semibold">            
         Our Services
         </Link>
          </li>
          <li>
    <Link href="/" className="text-[#2A7798] text-lg font-semibold">            
         Contact Us
         </Link>
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
                <h1 className="text-4xl font-white ">Henna</h1>
                </Link>
              </li>

              <div className="flex ">
          <ul className="flex flex-col  md:space-x-8 items-center mt-4 md:mt-0 ">
          <li>
    <Link href="/" className="text-[#2A7798]">            
         Home
         </Link>
          </li>
          <li>
    <Link href="/" className="text-[#2A7798]">            
         About Us
         </Link>
          </li>
          <li>
    <Link href="/" className="text-[#2A7798]">            
         Our Services
         </Link>
          </li>
          <li>
    <Link href="/" className="text-[#2A7798]">            
         Contact Us
         </Link>
          </li>
          

            <li className="hidden md:flex">
              <CountryDp />
            </li>
            <li className="hidden md:block font-semibold">Login</li>
          </ul>
        </div>

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
