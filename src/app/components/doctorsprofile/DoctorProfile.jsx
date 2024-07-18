import React from "react";
import Image from "next/image";
import sherifabdelaziz from "../../../assets/images/sherifabdelaziz.jpg";
import { FaStar } from "react-icons/fa";
import { Cairo } from "next/font/google";
import Profile from "../../../assets/images/Profile.png";
const DoctorProfile = () => {
  return (
    <>
      <div className="md:ps-10 ">
        <div className="md:flex gap-10">
          <div>
            <div className=" md:flex gap-10 justify-between  items-center  ">
              <div className="flex md:justify-start justify-center">
                <Image
                  src={sherifabdelaziz}
                  className="w-[200px] h-[200px] rounded-full"
                />
              </div>
              <div>
                <div>
                  <div className="text-2xl md:text-start text-center md:mt-0 mt-2">
                    <h1 className="md:text-4xl  text-[#545454]">
                      Sherif Abdul aziz ALY
                    </h1>
                    <p>Consultant of nutrition</p>
                    <span className="flex gap-2 text-yellow-400 md:justify-start justify-center">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-[250px] mt-4 flex justify-center ">
              <button className="bg-[#F02B3B]  p-3 rounded-full text-white w-[200px] ">
                Book Now
              </button>
            </div>
            <div className="mt-4 ps-5">
              <div className="flex">
                <p className="font-bold ">Consultation Duration </p>
                <span>: 20 Mins</span>
              </div>
              <div className="flex items-center mt-2">
                <p className="font-bold ">Consultation Cost </p>
                <span> : 100 EGP</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center md:mt-9 md:justify-start justify-center gap-3 md:p-0 p-4">
              <p className="font-bold md:text-[22px] text-[18px]  text-[#545454]">
                Years of Experience :
              </p>
              <span> 19</span>
            </div>
            <div className="flex flex-wrp gap-2 items-center  md:gap-3   md:p-0 p-4">
              <p className="font-bold md:text-[22px] text-[18px]  text-[#545454]">
                Spoken Languages:
              </p>
              <span className=""> English, Arabic</span>
            </div>
            <div className="md:p-0 p-4">
              <p className="font-bold text-[22px] text-[#545454]">
                Specialist at :
              </p>
              <p className="bg-[#CCCCB2] rounded-xl p-1 mt-2">
                Child nutrition & Immunity boosting
              </p>
              <div>
                <p className="bg-[#CCCCB2] rounded-xl p-1 mt-2 md:w-[190px]">
                  weight loss programs
                </p>
              </div>
              <div>
                <p className="bg-[#CCCCB2] rounded-xl p-1 mt-2 md:w-[190px] ">
                  weight gain programs
                </p>
              </div>
              <div>
                <p className="bg-[#CCCCB2] rounded-xl p-1 mt-2 md:w-[220px]">
                  sport nutrition programs
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:mt-10 mt-3 mb-5 p-4">
          <div>
            <h5 className="text-[#6DC7EA] text-3xl font-bold ">About</h5>
            <div
              className="border border-[#CCCCCC] mt-3 md:w-[90%] "
              style={{ fontFamily: "Cairo, sans serif" }}
            ></div>
          </div>
          <div className="md:mt-5  text-[#545454]">
            <p className="font-bold text-xl">Academic Certificates</p>
            <div className="ms-5">
              <ul className="list-disc">
                <li>Deploma of clinical nutrition (Uxbridge academy)</li>
                <li>
                  Professional Doctorate of physical therapy (DPT) Cairo
                  university 2017
                </li>
                <li>Deploma of nutritional therapy ( MOH) 2011</li>
              </ul>
            </div>
          </div>
          <div className="md:mt-10 mt-5  text-[#545454]">
            <p className="font-bold text-xl">Practical Experiences</p>
            <div className="ms-5">
              <ul className="list-disc">
                <li>EL QASR EL AINY hospital</li>
                <li>EL ARICH military hospital</li>
                <li>El Sherif nutritional private clinic</li>
                <li>Meet Ghamr hospital</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-3 p-4">
          <div>
            <h5 className="text-[#6DC7EA] text-3xl font-bold md:ps-2 ">
              Reviews
            </h5>
            <div
              className="border border-[#CCCCCC] mt-3 md:w-[90%] "
              style={{ fontFamily: "Cairo, sans serif" }}
            ></div>
          </div>

          <div className="mb-4">
            <div className="bg-[#E8E8E8] md:flex md:items-center md:gap-4 md:w-[500px] shadow-md mt-5 p-4 rounded-lg">
              <Image
                src={Profile}
                className="w-[100px] h-[100px] rounded-full mx-auto md:mx-0"
              />
              <div className="mt-4 md:mt-0 md:w-full md:text-start text-center ">
                <h5 className="font-bold text-xl">ElBalto client</h5>
                <p className="">
                  جربة مفيدة جدا، شكرا لإتاحة هذه الخدمة دكتور مفيد جدا
                </p>
              </div>
              <div className="flex md:justify-end justify-center md:w-[300px] items-center mt-4 md:mt-0 md:mb-11 mb-0 ">
                <p className="">5</p>
                <FaStar className="text-yellow-500 text-2xl ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorProfile;
