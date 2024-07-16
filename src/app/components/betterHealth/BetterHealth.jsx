"use client";
import { useState } from 'react';
import Image from "next/image";
import img1 from "../../../assets/images/healthcare.jpg"
import img2 from "../../../assets/images/d2.jpg"
import { FaBookMedical } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import img3 from "../../../assets/images/shamel-logo.webp"
import CustomButton from "../customButton/CustomBotton";
import img4 from "../../../assets/images/pharm.png";
import MultiCarousel from "../multiCarousel/MultiCarousel";
import { FaHeadphones, FaSearch, FaPhoneAlt } from "react-icons/fa";

const BetterHealth = () => {
    const [dropdowns, setDropdowns] = useState([false, false, false, false]);
    const [selectedOptions, setSelectedOptions] = useState(["", "", "", ""]);
    const [searchInput, setSearchInput] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);
    const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);

    const toggleDropdown = (index) => {
        setDropdowns(dropdowns.map((dropdown, i) => i === index ? !dropdown : dropdown));
    };
    const toggleSearchDropdown = (e) => {
        e.stopPropagation();
        setSearchDropdownOpen(!searchDropdownOpen);
    };

    const handleSearch = () => {
        console.log('Searching for:', searchInput);
    };

    const handleSelectItem = (item) => {
        setSelectedItem(item);
    };

    const handleOptionSelect = (index, option) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[index] = option;
        setSelectedOptions(newSelectedOptions);
        toggleDropdown(index);
    };
    return (
        <>
            <div className="relative md:h-[100vh] h-auto bg-cover bg-center" style={{ backgroundImage: `url(${img2.src})` }}>
                <div className="flex flex-col md:p-20 p-8">
                    <h1 className="text-gray-800 md:text-5xl text-3xl font-bold">Better Healthcare for a Better Life</h1>
                    <div className="flex md:flex-row flex-col md:gap-4 gap-2 items-center">
                        <p className="text-gray-700 text-3xl">Book online or call </p>
                        <span> <FaPhoneAlt size={20} color="red" /></span>
                        <span className="text-gray-700 text-3xl">16676</span>
                    </div>
                </div>

                <div className="w-[90vw] rounded-lg flex flex-col mx-auto md:mt-10 bg-white">
                    <div className="div1 flex flex-row p-2 border-b border-b-gray-400">
                        <div
                            className={`w-[50vw] items-center justify-center flex md:flex-row flex-col gap-2 cursor-pointer ${selectedItem === 'bookDoctor' ? 'border-b-2 border-blue-500' : ''}`}
                            onClick={() => handleSelectItem('bookDoctor')}
                        >
                            <div>
                                <FaBookMedical color="#0070CD" size={24} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[#0070CD] font-semibold text-xl">Book A Doctor</span>
                                <span className="text-black">Examination or Procedure</span>
                            </div>
                        </div>
                        <div
                            className={`w-[50vw] items-center justify-center flex md:flex-row flex-col gap-2 cursor-pointer ${selectedItem === 'telehealth' ? 'border-b-2 border-blue-500' : ''}`}
                            onClick={() => handleSelectItem('telehealth')}
                        >
                            <div>
                                <FaHeadphones color="#0070CD" size={24} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[#0070CD] font-semibold text-xl">Telehealth</span>
                                <span className="text-black">Call consultation with doctor</span>
                            </div>
                        </div>
                    </div>

                    <div className="dev2 ">
                        <div className="flex p-4 md:flex-row flex-col">
                            {[0, 1, 2, 3].map((index) => (
                                <div key={index} className="relative border border-gray-400 flex justify-between items-center p-2 w-full" onClick={() => toggleDropdown(index)}>
                                    <div className="flex flex-col gap-2">
                                        <p>select a speciality</p>
                                        <p className="font-semibold text-lg text-[#0070CD]">
                                            {selectedOptions[index] || "choose speciality"}
                                        </p>
                                    </div>
                                    <div>
                                        <IoMdArrowDropdown size={20} />
                                    </div>
                                    {dropdowns[index] && (
                                        <div className="absolute top-full left-0 mt-2 w-full z-10 bg-gray-300 border border-gray-400 rounded shadow-lg">
                                            <p className="p-2 cursor-pointer" onClick={() => handleOptionSelect(index, 'Speciality 1')}>Speciality 1</p>
                                            <p className="p-2 cursor-pointer" onClick={() => handleOptionSelect(index, 'Speciality 2')}>Speciality 2</p>
                                            <p className="p-2 cursor-pointer" onClick={() => handleOptionSelect(index, 'Speciality 3')}>Speciality 3</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="relative border border-gray-400 flex items-center justify-center p-2 w-full bg-red-700 cursor-pointer" onClick={toggleSearchDropdown}>
                                <div className="flex gap-4">
                                    <FaSearch size={24} color="white" />
                                    <span className="text-white text-xl">Search</span>
                                </div>
                                {searchDropdownOpen && (
                                    <div className="dropdown-container absolute top-full  mt-2 w-auto bg-white border border-gray-400 rounded shadow-lg p-2 flex" onClick={(e) => e.stopPropagation()}>
                                        <input
                                            type="text"
                                            className="flex-grow p-2 border outline-none border-gray-300 rounded"
                                            placeholder="Type to search..."
                                            value={searchInput}
                                            onChange={(e) => setSearchInput(e.target.value)}
                                        />
                                        <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
                                            <FaSearch size={20} />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${img2.src})` }}>
        <div className="flex flex-col p-20">
        <h1 className="text-gray-800 text-5xl font-bold">Better Healthcare for a Better Life</h1>
        <div className="flex gap-4 items-center">
        <p className="text-gray-700 text-3xl">Book online or call </p>
        <span> <FaPhoneAlt size={20} color="red" /></span>
        <span className="text-gray-700 text-3xl">16676</span>
        </div>
        </div>

        <div className="w-[90vw] rounded-lg  flex flex-col mx-auto mt-10 bg-white">
        <div className="div1 flex flex-row p-2 border-b border-b-gray-400 ">
        <div className="1 w-[50vw] items-center justify-center  flex gap-2 ">
        <div>
        <FaBookMedical  color="#0070CD" size={24}/>

        </div>
        <div className="flex flex-col"> 
        <span className="text-[#0070CD] font-semibold text-xl">Book A Doctor</span>
        <span className="text-black">Examination or Procedure</span>

        </div>

        </div>
        <div className="2 w-[50vw] items-center  justify-center flex gap-2">
        <div>
        <FaHeadphones  color="#0070CD" size={24}/>

        </div>
        <div className="flex flex-col"> 
        <span className="text-[#0070CD] font-semibold text-xl">Telehealth</span>
        <span className="text-black">Call consultation with doctor</span>

        </div>

        </div>
        
        

        </div>
        <div className="dev2 ">
        <div className="flex p-4 ">
        <div className="border border-gray-400 flex justify-between items-center p-2 w-[25vw] ">
        <div className="flex flex-col gap-2">
            <p>select a speciality</p>
            <p className="font-semibold text-l text-[#0070CD]">choose speciality</p>
        </div>
        <div>
        <IoMdArrowDropdown size={20} />
        </div>
        </div>
        <div className="border border-gray-400 justify-between flex items-center p-2  w-[25vw]">
        <div className="flex flex-col gap-2">
            <p>select a speciality</p>
            <p className="font-semibold text-lg text-[#0070CD]">choose speciality</p>
        </div>
        <div>
        <IoMdArrowDropdown size={20} />
        </div>
        </div>
        <div className="border border-gray-400 flex items-center justify-between p-2 w-[25vw]">
        <div className="flex flex-col gap-2">
            <p>select a speciality</p>
            <p className="font-semibold text-lg text-[#0070CD]">choose speciality</p>
        </div>
        <div>
        <IoMdArrowDropdown size={20} />
        </div>
        </div>
        <div className="border border-gray-400 flex items-center justify-between  p-2 w-[25vw]">
        <div className="flex flex-col gap-2">
            <p>select a speciality</p>
            <p className="font-semibold text-lg  text-[#0070CD]">choose speciality</p>
        </div>
        <div>
        <IoMdArrowDropdown size={20} />
        </div>
        </div>
        <div className="border border-gray-400 flex items-center justify-center   p-2 w-[25vw] bg-red-700">
        <div className="flex gap-4">
        <FaSearch size={24} color="white" />
        <span className="text-white  text-xl">Search</span>

        </div>

        
        </div>

        </div>
        </div>

        </div>
           
        </div> */}


            {/* <div className="p-20">
        <h1 className="text-4xl font-bold">New services for better healthcare</h1>
        <div className="flex flex-col mt-10 gap-6">
        <div className="flex justify-between bg-[#0070CD] p-4 rounded-lg items-center ">
        <div className="1 flex gap-3">
        <div>
        <Image src={img3}/>
        </div>
        <div className="flex flex-col ">
        <h1 className="text-2xl font-bold text-white">Shamel</h1>
        <p className="text-white">Save up to 80% on all medical services</p>
        <p className="text-white">The network is available only through the App - In Cairo and Giza till now</p>

        </div>
        </div>
        <div className="2">
        <CustomButton buttonText="See More" width="200px" />

        </div>
        <div>

        </div>

        </div>

        <div className="flex flex-col bg-gray-300 p-6 rounded-lg gap-2">
        <h1 className="text-2xl font-bold">Have A Medical Questions?</h1>
        <p> Submit your medical question and recieve an answer from  a specialized doctor</p>
        <div>
        <CustomButton  buttonText="Ask Now"/>
        </div>
        </div>

        <div className="flex bg-[#0070CD] p-6 rounded-lg gap-2 justify-between ">
        <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-white">Pharmacy</h1>
        <p className="text-white"> Gey your medicine  and all your pharmacy needs.</p>
        <div>
        <CustomButton buttonText="Place order"/>
        </div>
        </div>
        <div>
            <Image src={img4} width={150} />
        </div>
        </div>
        </div>
        </div>

        <div className="bg-gray-200 p-20">
        <h1 className="text-3xl font-bold">Choose from top offers</h1>
        {/* <MultiCarousel /> */}

            {/* </div> */}
        </>
    );
};
export default BetterHealth;