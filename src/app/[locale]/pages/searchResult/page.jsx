"use client";

import Image from "next/image";
import doctor3 from "../../../../assets/images/doctor3.png";
import Navbar from "../../components/Navbar/Navbar";

const SearchResult = () => {
  return (
    <>
      <Navbar />

      {/* Doctor Profiles Section */}
      
      <div className="flex items-start w-[900px] bg-white p-6 rounded-lg shadow-md justify-between">
        <div className="flex items-center">
          <Image
            src={doctor3}
            alt="Doctor"
            className="w-20 h-20 rounded-full mr-4"
            width={80}
            height={80}
          />

          <div className="">
            <h2 className=" w-[400px] text-xl font-semibold">Dr. Fadi Hamwi</h2>
            <p className="w-[400px] text-gray-500">
              Consultant Internal Medicine
            </p>
            <p className=" w-[400px] text-gray-500">21 years of experience</p>
          </div>
        </div>
        <div className="w-[600px]">
          <h3 className="text-2xl font-semibold mb-2">Specializations</h3>
          <div className="mb-3">
            <span className="inline-block bg-gray-200 w-[250px] text-gray-700 px-3 rounded-full text-sm mr-2 mb-2">
              Child nutrition & Immunity boosting
            </span>
            <span className="inline-block bg-gray-200 w-[250px] text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              weight loss programs
            </span>
            <span className="inline-block bg-gray-200 w-[250px] text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              weight gain programs
            </span>
            <span className="inline-block bg-gray-200 w-[250px] text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              sport nutrition programs
            </span>
          </div>
          <button className="bg-[#8BB1D6] text-white py-2 px-4 rounded ">
            Book an appointment
          </button>
        </div>
      </div>
      <div className="flex items-start w-[900px] bg-white p-6 rounded-lg shadow-md justify-between mt-10">
        <div className="flex items-center">
          <Image
            src={doctor3}
            alt="Doctor"
            className="w-20 h-20 rounded-full mr-4"
            width={80}
            height={80}
          />

          <div className="">
            <h2 className=" w-[400px] text-xl font-semibold">Dr. Fadi Hamwi</h2>
            <p className="w-[400px] text-gray-500">
              Consultant Internal Medicine
            </p>
            <p className=" w-[400px] text-gray-500">21 years of experience</p>
          </div>
        </div>
        <div className="w-[600px]">
          <h3 className="text-2xl font-semibold mb-2">Specializations</h3>
          <div className="mb-3">
            <span className="inline-block bg-gray-200 w-[250px] text-gray-700 px-3 rounded-full text-sm mr-2 mb-2">
              Child nutrition & Immunity boosting
            </span>
            <span className="inline-block bg-gray-200 w-[250px] text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              weight loss programs
            </span>
            <span className="inline-block bg-gray-200 w-[250px] text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              weight gain programs
            </span>
            <span className="inline-block bg-gray-200 w-[250px] text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              sport nutrition programs
            </span>
          </div>
          <button className="bg-[#8BB1D6] text-white py-2 px-4 rounded ">
            Book an appointment
          </button>
        </div>
      </div>
      <div className="flex items-start w-[900px] bg-white p-6 rounded-lg shadow-md justify-between mt-10">
        <div className="flex items-center">
          <Image
            src={doctor3}
            alt="Doctor"
            className="w-20 h-20 rounded-full mr-4"
            width={80}
            height={80}
          />

          <div className="">
            <h2 className=" w-[400px] text-xl font-semibold">Dr. Fadi Hamwi</h2>
            <p className="w-[400px] text-gray-500">
              Consultant Internal Medicine
            </p>
            <p className=" w-[400px] text-gray-500">21 years of experience</p>
          </div>
        </div>
        <div className="w-[600px]">
          <h3 className="text-2xl font-semibold mb-2">Specializations</h3>
          <div className="mb-3">
            <span className="inline-block bg-gray-200 w-[250px] text-gray-700 px-3 rounded-full text-sm mr-2 mb-2">
              Child nutrition & Immunity boosting
            </span>
            <span className="inline-block bg-gray-200 w-[250px] text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              weight loss programs
            </span>
            <span className="inline-block bg-gray-200 w-[250px] text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              weight gain programs
            </span>
            <span className="inline-block bg-gray-200 w-[250px] text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              sport nutrition programs
            </span>
          </div>
          <button className="bg-[#8BB1D6] text-white py-2 px-4 rounded ">
            Book an appointment
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
