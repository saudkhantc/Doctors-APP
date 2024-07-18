"use client";
import { useRouter } from 'next/navigation';
import React from "react";
import Image from "next/image";
import quadrantslab from "../../../assets/images/quadrantslab.png";
import covidtest from "../../../assets/images/covidtest.png";
import teleconsultation from "../../../assets/images/teleconsultation.png";
import IVdrip from "../../../assets/images/IVdrip.png";
import homehealth from "../../../assets/images/homehealth.png";
import doctorvisit from "../../../assets/images/doctorvisit.png";
import pharmacy from "../../../assets/images/pharmacy.png";
import pcrtest from "../../../assets/images/pcrtest.png";
// import '@/app/components/LandingPage/LandingPage.css';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const LandingPage = () => {
  const router = useRouter();
  return (
    <>
      <div className="md:p-5 bg-[#F0F7FC] h-screen">
        <div className="md:p-10 p-5 items-center">
          <h1 className="md:text-[40px] font-bold">Healthcare made simple</h1>
          <h3 className="text-[20px]">
            Book a doctor and order healthcare services to your home.
          </h3>
        </div>
        <div className="md:flex items-center gap-5 ">
          <div className="card bg-white md:w-[150px] md:h-[130px] flex flex-col items-center md:ms-10 rounded-xl p-3  ">
            <Image src={quadrantslab} alt="Home Lab Test" width={80} />
            <p className="font-bold text-center text-[14px]">Home Lab Test</p>
          </div>
          <div className="card bg-white md:w-[150px] h-[130px] flex flex-col items-center rounded-xl p-3 md:mt-0 mt-4">
            <Image src={covidtest} alt="Home Lab Test" width={60} />
            <p className="font-bold text-center text-[14px]">Covid-19 Test</p>
          </div>
          <div className="card bg-white md:w-[150px] h-[130px] flex flex-col items-center rounded-xl p-3 md:mt-0 mt-4">
            <Image src={teleconsultation} alt="Home Lab Test" width={60} />
            <p className="font-bold text-center text-[14px]">
              Video Consultation
            </p>
          </div>
          <div className="card bg-white md:w-[150px] h-[130px] flex flex-col items-center rounded-xl md:mt-0 mt-4">
            <Image
              src={IVdrip}
              alt="Home Lab Test"
              width={60}
              className="mt-2"
            />
            <p className="font-bold text-center text-[14px]">
              Vitamin IV Drips
            </p>
          </div>
          <div className="card bg-white md:w-[150px] h-[130px] flex flex-col items-center rounded-xl md:mt-0 mt-4">
            <Image
              src={homehealth}
              alt="Home Lab Test"
              width={60}
              className="mt-4"
            />
            <p className="font-bold text-center pt-1 v">Home Health</p>
          </div>
          <div className="card bg-white md:w-[150px] h-[130px] flex flex-col items-center rounded-xl md:mt-0 mt-4">
            <Image
              src={doctorvisit}
              alt="Home Lab Test"
              width={70}
              className="mt-4"
            />
            <p className="font-bold text-center text-[14px]">Home Health</p>
          </div>
        </div>
        <div className="md:flex">
          <div className="md:ps-10 mt-20 flex bg-[#007ACC] md:w-[360px] md:gap-10 p-5 rounded-lg md:ms-10">
            <div className="cursor-pointer " onClick={() => router.push("/pages/bookDoctor")}>
              <h1 className="text-white font-bold">At Home Nurses & Doctors</h1>
              <div className="flex items-center">
                <p className="text-white ">Explore Option</p>
                <MdOutlineKeyboardArrowRight className="text-[40px] text-white" />
              </div>
            </div>
            <div>
              <Image src={homehealth} width={50} alt="img" />
            </div>
          </div>
          <div className="md:ps-10 mt-20 flex bg-[#31A598] md:w-[360px] gap-10 p-5 rounded-lg md:ms-10">
            <div className=" ">
              <h1 className="text-white font-bold">Order Your Prescription </h1>
              <div className="flex items-center">
                <p className="text-white pt-3">Coming soon</p>
              </div>
            </div>
            <div className="ms-2">
              <Image src={pharmacy} width={60} alt="img" />
            </div>
          </div>
          <div className="md:ps-10 mt-20 flex bg-[#007ACC] md:w-[360px] md:gap-32 p-5 rounded-lg md:ms-10">
            <div className=" ">
              <h1 className="text-white font-bold">PCR Testing</h1>
              <div className="flex ">
                <p className="text-white items-center mt-2 w-[80px]">Book Now</p>
                <MdOutlineKeyboardArrowRight className="text-[40px] text-white" />
              </div>
            </div>
            <div>
              <Image src={pcrtest} width={60} alt="img" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default LandingPage;
