import React from "react";
import Image from "next/image";
import specialities01 from "../../../assets/images/specialities01.png";
import specialities02 from "../../../assets/images/specialities02.png";
import specialities03 from "../../../assets/images/specialities03.png";
import specialities04 from "../../../assets/images/specialities04.png";
import specialities05 from "../../../assets/images/specialities05.png";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

const PopularSpecial = () => {
  return (
    <>
      <div className="bg-white ">
        <div className="w-[90%] mx-auto md:pt-20 pt-10 p-2">
          <div>
            <h2 className="font-semibold text-3xl md:text-start text-center md:ps-10">Popular Specialities</h2>
          </div>
          <div className="grid grid-cols-2  md:gap-0 gap-4  md:grid-cols-3 lg:grid-cols-6 md:pt-20  ">
            <div className="flex flex-col md:mt-0 mt-4  justify-center items-center shadow-xl p-3 rounded-full h-[120px] w-[120px] md:h-[150px] md:w-[150px] mx-auto">
              <Image src={specialities01} className="rounded-full" />
              <p className="text-center pt-3 text-gray-500">Urology</p>
            </div>
            <div className="flex flex-col md:mt-0 mt-4 justify-center items-center shadow-xl p-3 rounded-full h-[120px] w-[120px] md:h-[150px] md:w-[150px] mx-auto">
              <Image src={specialities02} className="rounded-full" />
              <p className="text-center pt-3 text-gray-500"> Neurology</p>
            </div>
            <div className="flex flex-col  md:mt-0 mt-4  justify-center items-center shadow-xl p-3 rounded-full h-[120px] w-[120px] md:h-[150px] md:w-[150px] mx-auto">
              <Image src={specialities03} className="rounded-full" />
              <p className="text-center pt-3 text-gray-500">Orthopedic</p>
            </div>
            <div className="flex flex-col  md:mt-0 mt-4  justify-center items-center shadow-xl p-3 rounded-full h-[120px] w-[120px] md:h-[150px] md:w-[150px] mx-auto">
              <Image src={specialities04} className="rounded-full" />
              <p className="text-center pt-3 text-gray-500">Cardiologist</p>
            </div>
            <div className="flex flex-col  md:mt-0 mt-4  justify-center items-center shadow-xl p-3 rounded-full h-[120px] w-[120px] md:h-[150px] md:w-[150px] mx-auto">
              <Image src={specialities05} className="rounded-full" />
              <p className="text-center pt-3 text-gray-500">Dentist</p>
            </div>
            <div className="flex flex-col  md:mt-0 mt-4  justify-center items-center shadow-xl p-3 rounded-full h-[120px] w-[120px] md:h-[150px] md:w-[150px] mx-auto">
              <Image src={specialities01} className="rounded-full" />
              <p className="text-center pt-3 text-gray-500">Urology</p>
            </div>
          </div>
          <div className="md:mt-20 mt-10 flex justify-center">
            <Link href="/">
              <div className="flex items-center gap-4">
                <h2 className="text-4xl text-[#57C0DE]">View All</h2>
                <MdArrowForwardIos className="text-4xl text-[#57C0DE]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularSpecial;
