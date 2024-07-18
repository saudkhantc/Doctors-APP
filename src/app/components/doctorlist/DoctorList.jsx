import React from "react";
import Image from "next/image";
import eyespecialdoc01 from "../../../assets/images/eyespecialdoc01.jpg";
import { RiStarFill } from "react-icons/ri";

import { TbMessage2 } from "react-icons/tb";
import { BsHospitalFill } from "react-icons/bs";
import { IoIosPricetag } from "react-icons/io";
import { LiaBookSolid } from "react-icons/lia";

const DoctorList = () => {
  const doctorCard = (
    <div className="md:w-[30%] p-2 md:h-[350px] shadow-xl rounded-md">
      <div className="flex items-center gap-3">
        <div>
          <Image
            src={eyespecialdoc01}
            className="w-[100px] h-[100px] rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex text-red-600 gap-1">
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
          </div>
          <div>
            <h3 className="font-bold text-xl">Dr. Tatsiana Palkhouskaya</h3>
            <h4>Obstetrician and Gynecologist</h4>
          </div>
        </div>
      </div>
      <div className="ps-3 mt-3">
        <div className="flex gap-2 items-center">
          <TbMessage2 />
          <h4>English,</h4>
          <h5>Russian</h5>
        </div>
      </div>
      <div className="ps-3 mt-3">
        <div className="flex items-center gap-2">
          <BsHospitalFill />
          <p>Emirate Hospital Jumeirah (Jumeirah)</p>
        </div>
      </div>
      <div className="ps-3 mt-3">
        <div className="flex items-center gap-2">
          <IoIosPricetag />
          <p>Price Starting from: AED575</p>
        </div>
      </div>
      <div className="ms-5 md:flex items-center gap-4">
        <div className="md:w-[35%]">
          <button className="border-2 border-[#007ACC] w-full py-2 rounded-lg mt-10 text-[#007ACC]">
            View Profile
          </button>
        </div>
        <div className="md:w-[60%]">
          <button className="relative bg-green-600 w-full rounded-lg p-3 mt-10 text-white flex items-center justify-center gap-2">
            <LiaBookSolid className="text-2xl" />
            Book Now
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white pt-10">
      <div className="md:w-[90%] mx-auto">
        <div className="flex flex-wrap gap-4 justify-center">
          {doctorCard}
          {doctorCard}
          {doctorCard}
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
