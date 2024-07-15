import React from "react";
import Image from "next/image";
import clini06 from "../../../assets/images/clini06.png";
import clini02 from "../../../assets/images/clini02.png";
import clinic03 from "../../../assets/images/clinic03.png";
import clini01 from "../../../assets/images/clini01.png";
import eyespecialdoc01 from "../../../assets/images/eyespecialdoc01.jpg";
import eyespecialdoc02 from "../../../assets/images/eyespecialdoc02.jpg";
import eyespecialdoc03 from "../../../assets/images/eyespecialdoc03.jpg";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import './PopularSpecial.css';

const PopularSpecial = () => {
  return (
    <>
      <div className="p-5 md:w-[90%] mx-auto">
        <div>
          <div className="flex justify-center">
            <h1 className="text-4xl font-bold ">Our Popular Specialties</h1>
          </div>
          <div className="flex justify-center mt-4">
            <h3 className="text-xl text-[#52A6B7]">
              The Great Place Of Eyecare Hospital Center
            </h3>
          </div>
        </div>
        <div className="md:flex  md:w-[90%] mt-5 gap-5 p-5 mx-auto">
          <div className="  flex flex-col items-center">
            <div className="">
              <Image src={clini06} className="" />
              <div
                style={{
                  width: "110px",
                  height: "110px",
                  backgroundColor: "#1B5A90",
                  borderRadius: "100% 0px",
                  transform: "rotate(45deg)",
                  textAlign: "center",
                  margin: " -40px 80px auto",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p
                  className="rounded-full text-xl bg-white"
                  style={{ transform: "rotate(-40deg)" }}
                >
                  <IoIosArrowForward />
                </p>
              </div>
            </div>
            <div className="mt-3">
              <h4 className="ms-5 text-[#1B5A90] text-2xl "> Cataract</h4>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="">
              <Image src={clini02} className="" />
              <div
                style={{
                  width: "110px",
                  height: "110px",
                  backgroundColor: "#1B5A90",
                  borderRadius: "100% 0px",
                  transform: "rotate(45deg)",
                  textAlign: "center",
                  margin: " -40px 80px auto",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  
                }}
              >
                <p
                  className="rounded-full text-xl bg-white"
                  style={{ transform: "rotate(-40deg)" }}
                >
                  <IoIosArrowForward />
                </p>
              </div>
            </div>
            
            <div className="mt-3">
              <h4 className="ms-5 text-[#1B5A90] text-2xl "> Corneal Ulcer</h4>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="">
              <Image src={clinic03} className="" />
              <div
                style={{
                  width: "110px",
                  height: "110px",
                  backgroundColor: "#1B5A90",
                  borderRadius: "100% 0px",
                  transform: "rotate(45deg)",
                  textAlign: "center",
                  margin: " -40px 80px auto",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p
                  className="rounded-full text-xl  bg-white"
                  style={{ transform: "rotate(-40deg)" }}
                >
                  <IoIosArrowForward />
                </p>
              </div>
            </div>
            <div className="mt-3">
              <h4 className="ms-5 text-[#1B5A90] text-2xl "> Keratoconus</h4>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="">
              <Image src={clini01} className="" />
            </div>
            <div
              style={{
                width: "110px",
                height: "110px",
                backgroundColor: "#1B5A90",
                borderRadius: "100% 0px",
                transform: "rotate(45deg)",
                textAlign: "center",
                margin: " -40px 0 auto",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <p
                className="rounded-full text-xl bg-white"
                style={{ transform: "rotate(-40deg)" }}
              >
                <IoIosArrowForward />
              </p>
            </div>

            <div className="mt-3">
              <h4 className="ms-5 text-[#1B5A90] text-2xl "> Glaucoma</h4>
            </div>
          </div>
        </div>
        <div className="md:w-[90%] mt-10  p-5 mx-auto">
          <div>
            <div className="flex justify-center">
              <h1 className="text-4xl font-bold ">Our Popular Specialties</h1>
            </div>
            <div className="flex justify-center mt-4">
              <h3 className="text-xl text-[#52A6B7]">
                The Great Place Of Eyecare Hospital Center
              </h3>
            </div>
          </div>
          <div className="md:flex gap-5  mt-5">
            <div className="  flex flex-col items-center  bg-white rounded-lg p-5">
              <div className="relative">
                <Image src={eyespecialdoc01} className="animated-image animated-image:hover" />
                <h5 className=" font-semibold text-xl">Dr. Carrie Rosario </h5>
                <div className="flex gap-10 items-center">
                  <p className="text-[#1B5A90]">MBBS, DOMS - Ophthalmology</p>
                  <FaCircleArrowRight className="text-5xl text-blue-500" />
                  <div className="absolute top-10 right-2 bg-white p-1 rounded-full flex items-center gap-2">
                    <FaStar className="text-yellow-400" />
                    <p>4.9</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="  flex flex-col items-center md:mt-0 mt-5  bg-white rounded-lg p-5">
              <div className="relative">
                <Image src={eyespecialdoc02} className="animated-image animated-image:hover" />

                <h5 className=" font-semibold text-xl">Dr. Eric Hansley </h5>
                <div className="flex gap-10 items-center">
                  <p className="text-[#1B5A90]">MBBS, MS - Surgeon</p>
                  <FaCircleArrowRight className="text-5xl text-blue-500" />
                  <div className="absolute top-10 right-2 bg-white p-1 rounded-full flex items-center gap-2">
                    <FaStar className="text-yellow-400" />
                    <p>4.5</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="  flex flex-col items-center md:mt-0 mt-5 bg-white rounded-lg p-5">
              <div className=" relative ">
                <Image src={eyespecialdoc03} className="animated-image animated-image:hover" />
                <h5 className=" font-semibold text-xl">Dr. Mary Wilkinson</h5>
                <div className="flex gap-10 items-center">
                  <p className="text-[#1B5A90]">MBBS, DNB - Ophthalmology</p>
                  <FaCircleArrowRight className="text-5xl text-blue-500" />
                  <div className="absolute top-10 right-2 bg-white p-1 rounded-full flex items-center gap-2">
                    <FaStar className="text-yellow-400" />
                    <p>4.3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularSpecial;
// border-2 border-red-600
