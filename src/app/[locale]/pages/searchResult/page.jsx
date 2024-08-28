"use client";

import Image from "next/image";
import doctor3 from "../../../../assets/images/doctor3.png";
import Navbar from "../../components/Navbar/Navbar";
import { useRouter } from "next/navigation";

const SearchResult = () => {
  const router = useRouter();

  const handleBookAppointment = () => {
    // Redirect to the booking page
    router.push("/en/pages/apointment");
  };

  return (
    <>
      <Navbar />

      {/* Doctor Profiles Section */}
      <div className="flex flex-col lg:flex-row items-start w-full lg:w-[80%] bg-white p-6 rounded-lg shadow-md justify-between mb-10">
        <div className="flex items-center mb-6 lg:mb-0">
          <Image
            src={doctor3}
            alt="Doctor"
            className="w-20 h-20 rounded-full mr-4"
            width={80}
            height={80}
          />

          <div>
            <h2 className="text-xl font-semibold">Dr. Fadi Hamwi</h2>
            <p className="text-gray-500">Consultant Internal Medicine</p>
            <p className="text-gray-500">21 years of experience</p>
          </div>
        </div>
        <div className="w-full lg:w-[600px]">
          <h3 className="text-2xl font-semibold mb-2">Specializations</h3>
          <div className="mb-3">
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              Child nutrition & Immunity boosting
            </span>
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              weight loss programs
            </span>
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              weight gain programs
            </span>
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              sport nutrition programs
            </span>
          </div>
          <button 
            onClick={handleBookAppointment} 
            className="bg-[#8BB1D6] text-white py-2 px-4 rounded">
            Book an appointmentt
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start w-full lg:w-[80%] bg-white p-6 rounded-lg shadow-md justify-between mb-10">
        <div className="flex items-center mb-6 lg:mb-0">
          <Image
            src={doctor3}
            alt="Doctor"
            className="w-20 h-20 rounded-full mr-4"
            width={80}
            height={80}
          />

          <div>
            <h2 className="text-xl font-semibold">Dr. Fadi Hamwi</h2>
            <p className="text-gray-500">Consultant Internal Medicine</p>
            <p className="text-gray-500">21 years of experience</p>
          </div>
        </div>
        <div className="w-full lg:w-[600px]">
          <h3 className="text-2xl font-semibold mb-2">Specializations</h3>
          <div className="mb-3">
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              Child nutrition & Immunity boosting
            </span>
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              weight loss programs
            </span>
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              weight gain programs
            </span>
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              sport nutrition programs
            </span>
          </div>
          <button 
            onClick={handleBookAppointment} 
            className="bg-[#8BB1D6] text-white py-2 px-4 rounded">
            Book an appointmentt
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start w-full lg:w-[80%] bg-white p-6 rounded-lg shadow-md justify-between mb-10">
        <div className="flex items-center mb-6 lg:mb-0">
          <Image
            src={doctor3}
            alt="Doctor"
            className="w-20 h-20 rounded-full mr-4"
            width={80}
            height={80}
          />

          <div>
            <h2 className="text-xl font-semibold">Dr. Fadi Hamwi</h2>
            <p className="text-gray-500">Consultant Internal Medicine</p>
            <p className="text-gray-500">21 years of experience</p>
          </div>
        </div>
        <div className="w-full lg:w-[600px]">
          <h3 className="text-2xl font-semibold mb-2">Specializations</h3>
          <div className="mb-3">
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              Child nutrition & Immunity boosting
            </span>
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              weight loss programs
            </span>
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              weight gain programs
            </span>
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              sport nutrition programs
            </span>
          </div>
          <button 
            onClick={handleBookAppointment} 
            className="bg-[#8BB1D6] text-white py-2 px-4 rounded">
            Book an appointmentt
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start w-full lg:w-[80%] bg-white p-6 rounded-lg shadow-md justify-between mb-10">
        <div className="flex items-center mb-6 lg:mb-0">
          <Image
            src={doctor3}
            alt="Doctor"
            className="w-20 h-20 rounded-full mr-4"
            width={80}
            height={80}
          />

          <div>
            <h2 className="text-xl font-semibold">Dr. Fadi Hamwi</h2>
            <p className="text-gray-500">Consultant Internal Medicine</p>
            <p className="text-gray-500">21 years of experience</p>
          </div>
        </div>
        <div className="w-full lg:w-[600px]">
          <h3 className="text-2xl font-semibold mb-2">Specializations</h3>
          <div className="mb-3">
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              Child nutrition & Immunity boosting
            </span>
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              weight loss programs
            </span>
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              weight gain programs
            </span>
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              sport nutrition programs
            </span>
          </div>
          <button 
            onClick={handleBookAppointment} 
            className="bg-[#8BB1D6] text-white py-2 px-4 rounded">
            Book an appointmentt
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start w-full lg:w-[80%] bg-white p-6 rounded-lg shadow-md justify-between mb-10">
        <div className="flex items-center mb-6 lg:mb-0">
          <Image
            src={doctor3}
            alt="Doctor"
            className="w-20 h-20 rounded-full mr-4"
            width={80}
            height={80}
          />

          <div>
            <h2 className="text-xl font-semibold">Dr. Fadi Hamwi</h2>
            <p className="text-gray-500">Consultant Internal Medicine</p>
            <p className="text-gray-500">21 years of experience</p>
          </div>
        </div>
        <div className="w-full lg:w-[600px]">
          <h3 className="text-2xl font-semibold mb-2">Specializations</h3>
          <div className="mb-3">
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              Child nutrition & Immunity boosting
            </span>
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              weight loss programs
            </span>
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              weight gain programs
            </span>
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              sport nutrition programs
            </span>
          </div>
          <button 
            onClick={handleBookAppointment} 
            className="bg-[#8BB1D6] text-white py-2 px-4 rounded">
            Book an appointmentt
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start w-full lg:w-[80%] bg-white p-6 rounded-lg shadow-md justify-between mb-10">
        <div className="flex items-center mb-6 lg:mb-0">
          <Image
            src={doctor3}
            alt="Doctor"
            className="w-20 h-20 rounded-full mr-4"
            width={80}
            height={80}
          />

          <div>
            <h2 className="text-xl font-semibold">Dr. Fadi Hamwi</h2>
            <p className="text-gray-500">Consultant Internal Medicine</p>
            <p className="text-gray-500">21 years of experience</p>
          </div>
        </div>
        <div className="w-full lg:w-[600px]">
          <h3 className="text-2xl font-semibold mb-2">Specializations</h3>
          <div className="mb-3">
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              Child nutrition & Immunity boosting
            </span>
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              weight loss programs
            </span>
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              weight gain programs
            </span>
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              sport nutrition programs
            </span>
          </div>
          <button 
            onClick={handleBookAppointment} 
            className="bg-[#8BB1D6] text-white py-2 px-4 rounded">
            Book an appointmentt
          </button>
        </div>
      </div>
      
    </>
  );
};

export default SearchResult;
