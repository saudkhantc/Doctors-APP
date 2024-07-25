import React, { useState,useRef,useEffect } from "react";
import Image from "next/image";
import img1 from "../../../assets/images/amb4.jpg";
import img2 from "../../../assets/images/search-bg.png"
import { LuMapPin } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import img3 from "../../../assets/images/landingpage22.jpg"
import img4 from "../../../assets/images/shuttur1.jpg";
import Select from 'react-select';


const BetterHealth=()=>{
    const cities = ["Dubai", "Abu Dhabi", "Sharjah", "Al Ain", "Ajman","Ras Al-Khaimah","Fujairah"];
    const [selectedCity, setSelectedCity] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
  
    const filteredCities = cities.filter(city =>
      city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const handleCityChange = (city) => {
      setSelectedCity(city);
      setSearchTerm('');
      setIsOpen(false);
    };
  
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
  
    // Add event listener for clicks outside the dropdown
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    
    return(
        <>
         <div className="  bg-white   h-screen  flex md:flex-row gap-6 flex-col p-5  " 
      //   style={{
      //   backgroundImage: `url(${img4.src})`,
      //   backgroundSize: "cover", 
    
      
      // }}
      
    > 
         <div className="flex flex-col gap-10 ropa-sans-regular w-[60vw] z-10  md:pt-20 ">
         <div className="dev1 flex flex-col gap-4 items-center">
         <h1 className="md:text-4xl text-3xl text-[#2A7798] font-semibold">Search Doctor, Make an Appointment</h1>
         <p className="text-[#2A7798] text-xl ">Discover the best doctors, clinic & hospital the city nearist to you.</p>
         </div>

         <div className="dev2 flex md:flex-row flex-col items-center justify-center gap-4 ">
         



         <div className="relative flex items-center gap-2 p-3 rounded-md border border-[#2A7798]" ref={dropdownRef}>
      <LuMapPin size={18} />
      <div className="relative w-[150px]">
        <div
          className="flex items-center justify-between cursor-pointer  rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selectedCity || 'City'}</span>
          <FaChevronDown size={14} className="text-gray-700" />
        </div>
        {isOpen && (
          <div className="absolute z-10 mt-2 w-full border border-[#2A7798] bg-white rounded-md shadow-lg">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="w-full p-2 border-b border-[#2A7798]"
            />
            <div className="max-h-60 overflow-y-auto">
              {filteredCities.length > 0 ? (
                filteredCities.map(city => (
                  <div
                    key={city}
                    onClick={() => handleCityChange(city)}
                    className="cursor-pointer p-2 hover:bg-gray-200"
                  >
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
    </div>
         {/* <div className="flex items-center gap-2">
      <LuMapPin size={18} />
      <div className="relative flex items-center gap-2 p-3 rounded-md bg-white border border-[#2A7798]">
        {!selectedCity }
        <select
          value={selectedCity}
          onChange={handleCityChange}
          className="appearance-none bg-white border-none outline-none text-gray-700   w-[10x   0px] "
        >
          <option value="" disabled hidden>
           City
          </option>
          {cities.map((city) => (
            <option key={city} value={city}  className=" font-medium text-[#2A7798]  "> 
              {city}
            </option>
          ))}
        </select>
        <FaChevronDown size={14} className="absolute right-3 pointer-events-none text-gray-700" />
      </div>
    </div> */}

         <div className="flex flex-col gap-2">
         <div className="flex gap-2 items-center p-3 rounded-md  bg-white  border  border-[#2A7798] ">
         <CiSearch size={20}/>
         <input type="text" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc" className="md:w-[400px] outline-none" />
         </div>
       
         </div>

         <div className="bg-[#2A7798] flex items-center p-4 h-12 rounded-lg">
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










