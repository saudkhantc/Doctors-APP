import Image from "next/image";
import img1 from "../../../assets/images/amb4.jpg";
import img2 from "../../../assets/images/search-bg.png"
import { LuMapPin } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";

const BetterHealth=()=>{
    return(
        <>
         <div className="relative  bg-[#F0F7FC]   h-screen  flex  items-center justify-center" >
         <div className="flex flex-col gap-10 ">
         <div className="dev1 flex flex-col gap-4 items-center">
         <h1 className="md:text-5xl text-3xl text-[#2A7798] font-semibold">Search Doctor, Make an Appointment</h1>
         <p className="text-[#2A7798] text-xl ">Discover the best doctors, clinic & hospital the city nearist to you.</p>
         </div>

         <div className="dev2 flex md:flex-row flex-col  gap-2 ">
         <div className="flex flex-col gap-2">
         <div className="flex gap-2 items-center p-3 rounded-md  bg-white border border-gray-300">
         <LuMapPin size={18} />
         <input type="text" placeholder="Search Location" className="outline-none" />
         </div>
         <div>
            <span className="text-gray-500 ">Based on your Location</span>
         </div>
         </div>

         <div className="flex flex-col gap-2">
         <div className="flex gap-2 items-center p-3 rounded-md  bg-white  border border-gray-300">
         <CiSearch size={18} />
         <input type="text" placeholder="Find Specialities" className="outline-none" />
         </div>
         <div>
            <span className="text-gray-500 ">Find Specialities Options</span>
         </div>
         </div>

         <div className="flex flex-col gap-2">
         <div className="flex gap-2 items-center p-3 rounded-md  bg-white  border border-gray-300 ">
         <CiSearch size={20}/>
         <input type="text" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc" className="md:w-[400px] outline-none" />
         </div>
         <div>
            <span className="text-gray-500 ">Ex: Dental or Sugar Check up etc</span>
         </div>
         </div>

         <div className="bg-[#2A7798] flex items-center p-4 h-12 rounded-lg">
         <CiSearch size={24} color="white" />

         </div>

         </div>

         </div>

         </div>

         {/* <div>
            <Image src={img2} className="md:w-full h-48"/>
         </div> */}

        </>
    )
};
export default BetterHealth;












// "use client";
// import { useState } from 'react';
// import Image from "next/image";
// import img1 from "../../../assets/images/healthcare.jpg"
// import img2 from "../../../assets/images/d2.jpg"
// import { FaBookMedical } from "react-icons/fa";
// import { IoMdArrowDropdown } from "react-icons/io";
// import img3 from "../../../assets/images/shamel-logo.webp"
// import CustomButton from "../customButton/CustomBotton";
// import img4 from "../../../assets/images/pharm.png";
// import MultiCarousel from "../multiCarousel/MultiCarousel";
// import { FaHeadphones, FaSearch, FaPhoneAlt } from "react-icons/fa";

// const BetterHealth = () => {
//     const [dropdowns, setDropdowns] = useState([false, false, false, false]);
//     const [selectedOptions, setSelectedOptions] = useState(["", "", "", ""]);
//     const [searchInput, setSearchInput] = useState('');
//     const [selectedItem, setSelectedItem] = useState(null);
//     const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);

//     const toggleDropdown = (index) => {
//         setDropdowns(dropdowns.map((dropdown, i) => i === index ? !dropdown : dropdown));
//     };
//     const toggleSearchDropdown = (e) => {
//         e.stopPropagation();
//         setSearchDropdownOpen(!searchDropdownOpen);
//     };

//     const handleSearch = () => {
//         console.log('Searching for:', searchInput);
//     };

//     const handleSelectItem = (item) => {
//         setSelectedItem(item);
//     };

//     const handleOptionSelect = (index, option) => {
//         const newSelectedOptions = [...selectedOptions];
//         newSelectedOptions[index] = option;
//         setSelectedOptions(newSelectedOptions);
//         toggleDropdown(index);
//     };
//     return (
//         <>
//            {/* <div className="relative md:h-[100vh] h-auto bg-cover bg-center" style={{ backgroundImage: `url(${img2.src})` }}>  */}
//               <div className="relative md:h-[100vh] h-auto bg-cover bg-center bg-[#0F76C4]">
//                 <div className="flex flex-col md:p-20 p-8">
//                     <h1 className="text-white md:text-5xl text-3xl font-bold">Better Healthcare for a Better Life</h1>
//                     <div className="flex md:flex-row flex-col md:gap-4 gap-2 items-center">
//                         <p className="text-white text-3xl">Book online or call </p>
//                         <span> <FaPhoneAlt size={20} color="red" /></span>
//                         <span className="text-white text-3xl">16676</span>
//                     </div>
//                 </div>

//                 <div className="w-[90vw] rounded-lg flex flex-col mx-auto md:mt-10 bg-white">
//                     <div className="div1 flex flex-row p-2 border-b border-b-gray-400">
//                         <div
//                             className={`w-[50vw] items-center justify-center flex md:flex-row flex-col gap-2 cursor-pointer ${selectedItem === 'bookDoctor' ? 'border-b-2 border-blue-500' : ''}`}
//                             onClick={() => handleSelectItem('bookDoctor')}
//                         >
//                             <div>
//                                 <FaBookMedical color="#0070CD" size={24} />
//                             </div>
//                             <div className="flex flex-col">
//                                 <span className="text-[#0070CD] font-semibold text-xl">Book A Doctor</span>
//                                 <span className="text-black">Examination or Procedure</span>
//                             </div>
//                         </div>
//                         <div
//                             className={`w-[50vw] items-center justify-center flex md:flex-row flex-col gap-2 cursor-pointer ${selectedItem === 'telehealth' ? 'border-b-2 border-blue-500' : ''}`}
//                             onClick={() => handleSelectItem('telehealth')}
//                         >
//                             <div>
//                                 <FaHeadphones color="#0070CD" size={24} />
//                             </div>
//                             <div className="flex flex-col">
//                                 <span className="text-[#0070CD] font-semibold text-xl">Telehealth</span>
//                                 <span className="text-black">Call consultation with doctor</span>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="dev2 ">
//                         <div className="flex p-4 md:flex-row flex-col">
//                             {[0, 1, 2, 3].map((index) => (
//                                 <div key={index} className="relative border border-gray-400 flex justify-between items-center p-2 w-full" onClick={() => toggleDropdown(index)}>
//                                     <div className="flex flex-col gap-2">
//                                         <p>select a speciality</p>
//                                         <p className="font-semibold text-lg text-[#0070CD]">
//                                             {selectedOptions[index] || "choose speciality"}
//                                         </p>
//                                     </div>
//                                     <div>
//                                         <IoMdArrowDropdown size={20} />
//                                     </div>
//                                     {dropdowns[index] && (
//                                         <div className="absolute top-full left-0 mt-2 w-full z-10 bg-gray-300 border border-gray-400 rounded shadow-lg">
//                                             <p className="p-2 cursor-pointer" onClick={() => handleOptionSelect(index, 'Speciality 1')}>Speciality 1</p>
//                                             <p className="p-2 cursor-pointer" onClick={() => handleOptionSelect(index, 'Speciality 2')}>Speciality 2</p>
//                                             <p className="p-2 cursor-pointer" onClick={() => handleOptionSelect(index, 'Speciality 3')}>Speciality 3</p>
//                                         </div>
//                                     )}
//                                 </div>
//                             ))}
//                             <div className="relative border border-gray-400 flex items-center justify-center p-2 w-full bg-red-700 cursor-pointer" onClick={toggleSearchDropdown}>
//                                 <div className="flex gap-4">
//                                     <FaSearch size={24} color="white" />
//                                     <span className="text-white text-xl">Search</span>
//                                 </div>
//                                 {searchDropdownOpen && (
//                                     <div className="dropdown-container absolute top-full  mt-2 w-auto bg-white border border-gray-400 rounded shadow-lg p-2 flex" onClick={(e) => e.stopPropagation()}>
//                                         <input
//                                             type="text"
//                                             className="flex-grow p-2 border outline-none border-gray-300 rounded"
//                                             placeholder="Type to search..."
//                                             value={searchInput}
//                                             onChange={(e) => setSearchInput(e.target.value)}
//                                         />
//                                         <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
//                                             <FaSearch size={20} />
//                                         </button>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
           
//         </>
//     );
// };
// export default BetterHealth;