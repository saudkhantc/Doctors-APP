import React from "react";
import "./ourdoctors.css";
import { FaSearch } from "react-icons/fa";

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
        </div>
      </div>
    </>
  );
};

export default OurDoctors;
// border-2 border-red-500
