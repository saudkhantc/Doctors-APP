
// border-4 border-red-500
import React from "react";
import { TbDental } from "react-icons/tb";
import { FiGitBranch } from "react-icons/fi";
import { FaRegFaceGrinTears } from "react-icons/fa6";
import { SlArrowRight } from "react-icons/sl";
import { GiPulleyHook } from "react-icons/gi";
import { TbVirusSearch } from "react-icons/tb";

const PopularSpecial = () => {
  return (
    <div className="bg-white">
      <div className="w-[90%] mx-auto pt-10">
        <div>
          <h2 className="font-semibold text-2xl md:text-3xl">Popular Specialities</h2>
          <p className="pt-5 text-base md:text-lg">
            Find your doctor through our wide directory of Specialities
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10">
          <div className="p-10 items-center shadow-xl flex flex-col justify-center">
            <FiGitBranch className="text-5xl text-blue-500" />
            <p className="text-xl md:text-2xl pt-5" style={{ color: "#848484" }}>
              GP
            </p>
          </div>
          <div className="p-10 items-center shadow-xl flex flex-col justify-center">
            <FaRegFaceGrinTears className="text-5xl text-blue-500" />
            <p className="text-xl md:text-2xl pt-5" style={{ color: "#848484" }}>
              Pediatrician
            </p>
          </div>
          <div className="p-10 items-center shadow-xl flex flex-col justify-center">
            <TbDental className="text-5xl text-blue-500" />
            <p className="text-xl md:text-2xl pt-5" style={{ color: "#848484" }}>
              Dentist
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10">
          <div className="p-10 items-center shadow-xl flex flex-col justify-center">
            <GiPulleyHook className="text-5xl text-blue-500" />
            <p className="text-xl md:text-2xl pt-5" style={{ color: "#848484" }}>
              Gynaecologist
            </p>
          </div>
          <div className="p-10 items-center shadow-xl flex flex-col justify-center">
            <TbVirusSearch className="text-5xl text-blue-500" />
            <p className="text-xl md:text-2xl pt-5" style={{ color: "#848484" }}>
              Dermatologist
            </p>
          </div>
          <div className="p-10 items-center flex flex-col justify-center">
            <SlArrowRight className="text-5xl text-blue-500" />
            <p className="mt-5 text-blue-500 text-xl md:text-2xl">View More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularSpecial;
