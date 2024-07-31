import React from "react";
import "./ourdoctors.css";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiGenderTransgenderLight } from "react-icons/pi";

const OurDoctors = () => {
  return (
    <>
      <div>
        <div className="mainbge mb-10  md:w-[90%] flex flex-col  justify-center items-center">
          <div className=" md:w-[60%] ">
            <h1 className="text-4xl text-[#319EAC] font-bold pe-20">
              Our Doctors Are Our Heroes
            </h1>
          </div>
          <div className="md:w-[60%] mt-4 flex justify-between items-center border-2 border-[#319EAC]  rounded-full">
            <input
              type="text"
              className="md:w-[70%] bg-transparent border-transparent focus:outline-none ps-10 "
            />
            <div className="text-4xl text-white bg-[#319EAC] p-2 me-1 rounded-full ">
              <FaSearch />
            </div>
          </div>
          <div className="md:flex gap-4 ms-14">
          <div className="md:w-[30%] mt-4 flex  items-center border-2 border-[#319EAC]  rounded-full">
            <input
              type="text"
              className="md:w-[30%] bg-transparent border-transparent focus:outline-none "
            />
            <div className="text-xl flex gap-32 justify-between text-[#319EAC]  p-3 me-1 rounded-full ">
              <div>
                <h2>All</h2>
              </div>
              <div>
                <IoMdArrowDropdown />
              </div>
            </div>
          </div>
          <div className="md:w-[25%] mt-4 flex  items-center border-2 border-[#319EAC]  rounded-full">
            <input
              type="text"
              className="md:w-[25%] bg-transparent border-transparent focus:outline-none "
            />
            <div className="text-xl flex gap-32 justify-between text-[#319EAC]  p-3 me-1 rounded-full ">
              <div className="text-4xl">
                <PiGenderTransgenderLight />
              </div>
              <div>
                <h2>All</h2>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurDoctors;
// border-2 border-red-500
