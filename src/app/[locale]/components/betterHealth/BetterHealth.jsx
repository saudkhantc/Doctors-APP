"use client";
import React, { useState,useRef,useEffect } from "react";
import Image from "next/image";
import img1 from "@/assets/images/amb4.jpg";
import img2 from "@/assets/images/search-bg.png"
import { LuMapPin } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { FaChevronDown, FaGlobe } from 'react-icons/fa';
import img3 from "@/assets/images/landingpage22.jpg"
import img4 from "@/assets/images/shuttur1.jpg";
import Select from 'react-select';
import { useTranslations } from 'next-intl';


const BetterHealth=()=>{
  const t = useTranslations('Home.Hero');
    const cities = [t('Erbil'),
      t('Duhok'),
      t('Silemani')];
    // const [selectedCity, setSelectedCity] = useState('');
    // const [searchTerm, setSearchTerm] = useState('');
    // const [isOpen, setIsOpen] = useState(false);
    // const dropdownRef = useRef(null);
  
    // const filteredCities = cities.filter(city =>
    //   city.toLowerCase().includes(searchTerm.toLowerCase())
    // );
  
    // const handleCityChange = (city) => {
    //   setSelectedCity(city);
    //   setSearchTerm('');
    //   setIsOpen(false);
    // };
  
    // const handleSearchChange = (e) => {
    //   setSearchTerm(e.target.value);
    // };
  
    // const handleClickOutside = (e) => {
    //   if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
    //     setIsOpen(false);
    //   }
    // };
  
 
    // useEffect(() => {
    //   document.addEventListener('mousedown', handleClickOutside);
    //   return () => document.removeEventListener('mousedown', handleClickOutside);
    // }, []);
  
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCities, setFilteredCities] = useState(cities);
    


    // useEffect(() => {
    //   if (searchTerm === '') {
    //     setFilteredCities(cities);
    //   } else {
    //     setFilteredCities(cities.filter(city => city.toLowerCase().includes(searchTerm.toLowerCase())));
    //   }
    // }, [searchTerm, cities]);
  
    const handleCityChange = (city) => {
      setSelectedCity(city);
      setIsOpen(false);
      setSearchTerm(''); // Reset search term after selection
    };
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
      setIsOpen(true); // Ensure the dropdown is open while typing
    };
  

    
    return(
        <>
         <div className="  bg-white   h-screen md:items-start md:justify-start items-center justify-center flex md:flex-row gap-6 flex-col    " 
      //   style={{
      //   backgroundImage: `url(${img4.src})`,
      //   backgroundSize: "cover", 
    
      
      // }}
      
    > 
         <div className="flex flex-col gap-10 ropa-sans-regular w-[60vw] z-10  md:pt-20 md:pl-14">
         <div className="dev1 flex flex-col gap-4 items-center">
         <h1 className="md:text-4xl text-2xl text-[#2A7798] font-semibold">{t('Title')}</h1>
         <p className="text-[#2A7798] md:text-xl  ">{t('sub-title')}</p>
         </div>

         <div className="dev2 flex md:flex-row flex-col items-center justify-center gap-4 ">
         
         <div className="relative md:w-[270px]">
      <div className="flex items-center relative   border  border-[#2A7798] ">
        <input
          type="text"
          value={selectedCity || searchTerm}
          onChange={handleSearchChange}
          placeholder={t('AlAin')}
          onClick={() => setIsOpen(true)}
          className="w-full p-4 outline-none"
        />
        <FaChevronDown
          size={14}
          className="absolute right-3 text-gray-700 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full border rounded-md shadow-lg bg-white">
          <div className="max-h-60 overflow-y-auto">
            {filteredCities.length > 0 ? (
              filteredCities.map(city => (
                <div
                  key={city}
                  onClick={() => handleCityChange(city)}
                  className="cursor-pointer p-2 flex hover:bg-gray-200 items-center"
                >
                  <LuMapPin className="mr-2 ropa-sans-regular" size={10} />
                  {city}
                </div>
              ))
            ) : (
              <div className="p-2 text-gray-500">No cities found</div>
            )}
          </div>
        </div>
      )}
    </div>
         {/* <div className="relative flex items-center gap-2 p-4 rounded-md border border-[#2A7798]" ref={dropdownRef}>
      
      <div className="relative w-[270px] ">
        <div
          className="flex items-center justify-between cursor-pointer rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selectedCity || 'City'}</span>
          <FaChevronDown size={14} className="text-gray-700" />
        </div>
        {isOpen && (
          <div className="absolute z-10 mt-4  w-[300px] border  rounded-md shadow-lg">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search cities"
              className="w-full p-2 border-b border-gray-200 outline-none bg-gray-100"
            />
            <div className="max-h-60 overflow-y-auto">
              {filteredCities.length > 0 ? (
                filteredCities.map(city => (
                  <div
                    key={city}
                    onClick={() => handleCityChange(city)}
                    className="cursor-pointer p-2 flex hover:bg-gray-200 items-center"
                  >
                   <LuMapPin className="mr-2 ropa-sans-regular" size={10} />
                    {city}
                  </div>
                ))
              ) : (
                <div className="p-2 text-gray-500">No cities found</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div> */}


        

         <div className="flex flex-col gap-2 md:w-[290px]  ">
         <div className="flex gap-2 items-center p-4  bg-white  border  border-[#2A7798] ">
         
         <input type="text" placeholder={t('FindBySpeciality')} className="md:w-[400px] outline-none" />
         </div>
       
         </div>

         <div className="bg-[#2A7798] flex items-center p-5 h-14 rounded-lg">
         <CiSearch size={24} color="white" />

         </div>

         </div>

         
         </div>
         <div className="w-[40vw] ">
          <Image src={img4} ></Image>
         </div>

         </div>

       

     

        </>
    )
};
export default BetterHealth;










