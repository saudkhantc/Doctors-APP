// import React, { useState } from "react";
// import Link from "next/link";
// import { FlagIcon } from "react-flag-kit";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div>
//       <nav className="p-2 md:px-3 border bg-blue-300 text-black border-b-gray-300">
//         <div className="md:flex justify-between items-center">
//           <div className="md:flex md:justify-between items-center md:w-[75%]">
//             <div>
//               <Link href="/">
//                 <h1 className="text-4xl font-white text-black p-3 bg-blue-500 rounded-xl md:text-start text-center">
//                   Hanaa
//                 </h1>
//               </Link>
//             </div>
//             <div>
//               <button
//                 onClick={toggleMenu}
//                 className="md:hidden text-xl md:text-2xl p-2 rounded"
//               >
//                 &#9776;
//               </button>
//               <div
//                 className={`${
//                   menuOpen ? "block" : "hidden"
//                 } md:flex flex-col md:flex-row items-center gap-4`}
//               >
//                 <Link href="/">
//                   <h1 className="text-xl pt-2 md:pt-0">Find Doctor</h1>
//                 </Link>
//                 <Link href="/">
//                   <h1 className="text-xl pt-2 md:pt-0">Medicines</h1>
//                 </Link>
//                 <Link href="/">
//                   <h1 className="text-xl pt-2 md:pt-0">Lab Tests</h1>
//                 </Link>
//                 <Link href="/">
//                   <h1 className="text-xl pt-2 md:pt-0">Surgeries</h1>
//                 </Link>
//                 <Link href="/">
//                   <h1 className="text-xl pt-2 md:pt-0">Diabetes</h1>
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="relative pt-2 md:pt-0 md:px-5 md:flex md:justify-end md:w-[300px]">
//             <div className="flex items-center gap-2 focus:outline-none">
//               <FlagIcon code="US" size={24} />
//               <span>English</span>
//               <svg
//                 className="w-4 h-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M19 9l-7 7-7-7"
//                 ></path>
//               </svg>
//             </div>
//             <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20">
//               <div className="py-1">
//                 <Link
//                   href="/"
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                 >
//                   <div className="flex items-center gap-2">
//                     <FlagIcon code="US" size={24} />
//                     <span>English</span>
//                   </div>
//                 </Link>
//                 <Link
//                   href="/"
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                 >
//                   <div className="flex items-center gap-2">
//                     <FlagIcon code="SA" size={24} />
//                     <span>العربية</span>
//                   </div>
//                 </Link>
//                 <Link
//                   href="/"
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                 >
//                   <div className="flex items-center gap-2">
//                     <FlagIcon code="IQ" size={24} />
//                     <span>Kurdî</span>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="">
//             <Link href="/">
//               <h1 className="text-2xl bg-blue-500 p-3 rounded-xl mt-4 md:mt-0 md:text-start text-center">
//                 Login/Signup
//               </h1>
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
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
      <nav className="p-2 md:px-3 border bg-blue-300 text-black border-b-gray-300">
        <div className="md:flex justify-between items-center">
          <div className="md:flex md:justify-between items-center md:w-[75%]">
            <div>
              <Link href="/">
                <h1 className="text-4xl font-white text-black p-3 bg-blue-500 rounded-xl md:text-start text-center">
                  Hanaa
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
                  <h1 className="text-xl pt-2 md:pt-0">Find Doctor</h1>
                </Link>
                <Link href="/">
                  <h1 className="text-xl pt-2 md:pt-0">Medicines</h1>
                </Link>
                <Link href="/">
                  <h1 className="text-xl pt-2 md:pt-0">Lab Tests</h1>
                </Link>
                <Link href="/">
                  <h1 className="text-xl pt-2 md:pt-0">Surgeries</h1>
                </Link>
                <Link href="/">
                  <h1 className="text-xl pt-2 md:pt-0">Diabetes</h1>
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
          <div className="">
            <Link href="/">
              <h1 className="text-2xl bg-blue-500 p-3 rounded-xl mt-4 md:mt-0 md:text-start text-center">
                Login/Signup
              </h1>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
