import React from "react";
import Image from "next/image";
import eyespecialdoc01 from "../../../assets/images/eyespecialdoc01.jpg";
import { RiStarFill } from "react-icons/ri";
import doctor2 from "../../../assets/images/doctor2.png";
import { TbMessage2 } from "react-icons/tb";
import { BsHospitalFill } from "react-icons/bs";
import { IoIosPricetag } from "react-icons/io";
import { LiaBookSolid } from "react-icons/lia";
import eyespecialdoc02 from '../../../assets/images/eyespecialdoc02.jpg'
const DoctorList = () => {
  return (
    <>
      <div className="bg-white">
        <div className="w-[90%] mx-auto md:pt-20 pt-10 p-2 md:ps-10">
          <div>
            <div>
              <h1 className="text-4xl font-semibold">Feature Doctors</h1>
            </div>
          </div>
          <div className="md:flex gap-4 mt-10 md:mt-20">
            <div className="md:w-[35%] p-4 md:h-[350px] shadow-xl rounded-md  ">
              <div className="flex items-center gap-3">
                <div>
                  <Image
                    src={eyespecialdoc01}
                    className="w-[100px] h-[100px] rounded-full"
                  />
                </div>
                <div className="flex flex-col ">
                  <div className="flex text-red-600 gap-1 ">
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">
                      Dr. Tatsiana 
                    </h3>
                    <h4>Orthopedic</h4>
                  </div>
                </div>
              </div>
              <div className="ps-3 mt-3">
                <div className="flex gap-2 items-center">
                  <TbMessage2 />
                  <h4>English,</h4>
                  <h5>Arabic</h5>
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
                  <p>Price Starting from: AED600</p>
                </div>
              </div>
              <div className="ms-5 md:flex items-center gap-4">
                <div className="md:w-[35%]">
                  <button className="border-2 border-[#007ACC] w-full py-2 rounded-lg mt-10 text-[#007ACC]">
                    View Profile
                  </button>
                </div>
                <div className="md:w-[60%]">
                  <button className="relative bg-[#57C0DE] w-full rounded-lg p-3 mt-10 text-white flex items-center justify-center gap-2">
                    <LiaBookSolid className="text-2xl" />
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="md:w-[35%] p-4 md:h-[350px] shadow-xl rounded-md  ">
              <div className="flex items-center gap-3">
                <div>
                  <Image
                    src={eyespecialdoc02}
                    className="w-[100px] h-[100px] rounded-full"
                  />
                </div>
                <div className="flex flex-col ">
                  <div className="flex text-red-600 gap-1 ">
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Dr. Wael Lakkis</h3>
                    <h4>Urologist</h4>
                  </div>
                </div>
              </div>
              <div className="ps-3 mt-3">
                <div className="flex gap-2 items-center">
                  <TbMessage2 />
                  <h4>English,</h4>
                  <h5>Kurdish</h5>
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
                  <p>Price Starting from: AED700</p>
                </div>
              </div>
              <div className="ms-5 md:flex items-center gap-4">
                <div className="md:w-[35%]">
                  <button className="border-2 border-[#007ACC] w-full py-2 rounded-lg mt-10 text-[#007ACC]">
                    View Profile
                  </button>
                </div>
                <div className="md:w-[60%]">
                  <button className="relative bg-[#57C0DE] w-full rounded-lg p-3 mt-10 text-white flex items-center justify-center gap-2">
                    <LiaBookSolid className="text-2xl" />
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="md:w-[35%] p-4 md:h-[350px] shadow-xl rounded-md  ">
              <div className="flex items-center gap-3">
                <div>
                  <Image
                    src={doctor2}
                    className="w-[100px] h-[100px] rounded-full"
                  />
                </div>
                <div className="flex flex-col ">
                  <div className="flex text-red-600 gap-1 ">
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Dr. Dalia Khalife</h3>
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
                  <button className="relative bg-[#57C0DE] w-full rounded-lg p-3 mt-10 text-white flex items-center justify-center gap-2">
                    <LiaBookSolid className="text-2xl" />
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorList;
