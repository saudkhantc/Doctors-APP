// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { FlagIcon } from "react-flag-kit";
// import Image from "next/image";
// import HanaaLogo from "@/assets/images/HanaaLogo.png";
// import { usePathname } from '@/navigation';
// import { LocalizedLink } from '@/navigation';
// import { useTranslations } from 'next-intl';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState({
//     code: "IQ",
//     language: "English",
//     country: "Iraq",
//   });
//   const t = useTranslations('Home.Hero');

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const handleLanguageSelect = (code, language, country) => {
//     setSelectedLanguage({ code, language, country });
//     setDropdownOpen(false);
//   };

//   const pathname = usePathname();
  
//   const isActive = (path) => path === pathname;

//   return (
//     <div>
//       <nav className="p-4 md:px-3 bg-white border-b text-[#2A7798] ropa-sans-regular">
//         <div className="md:flex justify-between items-center">
//           <div className="md:flex gap-8 items-center md:w-[75%]">
//             <div className="">
//               <Link href="/">
//                 <Image
//                   src={HanaaLogo}
//                   alt="Logo"
//                   className="w-[200px] h-[60px] object-cover mix-blend-multiply"
//                 />
//               </Link>
//             </div>
//           </div>

//           <div className="relative pt-2 md:pt-0 md:px-5 md:flex md:justify-end md:w-[250px] ">
//             <div
//               className="flex items-center gap-2 cursor-pointer focus:outline-none"
//               onClick={toggleDropdown}
//             >
//               <FlagIcon code={selectedLanguage.code} size={24} />
//               <span className="flex justify-between w-full">
//                 <span className="text-xl">{selectedLanguage.country} - </span>
//                 <span className="text-lg">{selectedLanguage.language}</span>
//               </span>
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
//             {dropdownOpen && (
//               <div className="absolute right-0 mt-10 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
//                 <div className="py-1">
//                   <LocalizedLink
//                     href={pathname}
//                     locale="en"
//                     className="flex gap-4 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     onClick={() => handleLanguageSelect("IQ", "English", "Iraq")}
//                   >
//                     <FlagIcon code="IQ" size={20} /> Iraq - English
//                   </LocalizedLink>
//                   <LocalizedLink
//                     href={pathname}
//                     locale="ar"
//                     className="flex gap-4 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     onClick={() => handleLanguageSelect("IQ", "العربية", "العراق")}
//                   >
//                     <FlagIcon code="IQ" size={20} /> العربية - العراق
//                   </LocalizedLink>
//                   <LocalizedLink
//                     href={pathname}
//                     locale="ku"
//                     className="flex gap-4 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     onClick={() => handleLanguageSelect("IQ", "كوردى", "عێراق")}
//                   >
//                     <FlagIcon code="IQ" size={20} /> كوردى - عێراق
//                   </LocalizedLink>
//                 </div>
//               </div>
//             )}
//           </div>
//           <div className="md:flex">
//             <Link href="/">
//               <h1 className=" text-[#2A7798]  px-4 border-2 py-1 text-xl rounded-md  md:mt-0 md:text-start text-center">
//               {t('Login')}
//               </h1>
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;


"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FlagIcon } from "react-flag-kit";
import Image from "next/image";
import HanaaLogo from "@/assets/images/HanaaLogo.png";
import { usePathname } from '@/navigation';
import { LocalizedLink } from '@/navigation';
import { useTranslations } from 'next-intl';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: "IQ",
    language: "English",
    country: "Iraq",
  });
  const t = useTranslations('Home.Hero');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      setSelectedLanguage(JSON.parse(savedLanguage));
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLanguageSelect = (code, language, country) => {
    const newLanguage = { code, language, country };
    setSelectedLanguage(newLanguage);
    localStorage.setItem('selectedLanguage', JSON.stringify(newLanguage));
    setDropdownOpen(false);
  };

  const pathname = usePathname();

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
          </div>

          <div className="relative pt-2 md:pt-0 md:px-5 md:flex md:justify-end md:w-[250px] ">
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
            {dropdownOpen && (
              <div className="absolute right-0 mt-10 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                <div className="py-1">
                  <LocalizedLink
                    href={pathname}
                    locale="en"
                    className="flex gap-4 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => handleLanguageSelect("IQ", "English", "Iraq")}
                  >
                    <FlagIcon code="IQ" size={20} /> Iraq - English
                  </LocalizedLink>
                  <LocalizedLink
                    href={pathname}
                    locale="ar"
                    className="flex gap-4 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => handleLanguageSelect("IQ", "العربية", "العراق")}
                  >
                    <FlagIcon code="IQ" size={20} /> العربية - العراق
                  </LocalizedLink>
                  <LocalizedLink
                    href={pathname}
                    locale="ku"
                    className="flex gap-4 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => handleLanguageSelect("IQ", "كوردى", "عێراق")}
                  >
                    <FlagIcon code="IQ" size={20} /> كوردى - عێراق
                  </LocalizedLink>
                </div>
              </div>
            )}
          </div>
          <div className="md:flex">
            <Link href="/">
              <h1 className=" text-[#2A7798]  px-4 border-2 py-1 text-xl rounded-md  md:mt-0 md:text-start text-center">
              {t('Login')}
              </h1>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

