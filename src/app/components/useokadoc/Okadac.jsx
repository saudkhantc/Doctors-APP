import React from "react";
import Image from "next/image";
import lightingblue from "../../../assets/images/lightingblue.svg";
import calendar from "../../../assets/images/calendar.svg";
import shield from "../../../assets/images/shield.svg";
import phonedemo from "../../../assets/images/phonedemo.png";
import btnappgallery from "../../../assets/images/btnappgallery.svg";
import btngoogleplay from "../../../assets/images/btngoogleplay.svg";
import btnappstore from "../../../assets/images/btnappstore.svg";
const Okadac = () => {
  return (
    <>
      <div className="bg-[#E5F2FA] md:p-20 pt-5 ">
        <div className="flex justify-center">
          <p className="md:text-4xl ">Why use Hanaa</p>
        </div>
        <div className="md:flex md:gap-16 md:mt-12">
          <div className="md:w-[510px] md:mt-0 mt-10 md:p-0 p-4">
            <div className="bg-white w-[100px] rounded-full h-[100px] flex md:items-center text-center mx-auto  ">
              <Image src={lightingblue} className="  ms-6" alt="img" />
            </div>
            <div className="">
              <p className="font-bold mt-3 text-xl text-center">
                Book Instantly
              </p>
            </div>
            <div>
              <p className="">
                View your doctor’s real-time availability and select a time that
                works for you.
              </p>
            </div>
          </div>
          <div className="md:w-[510px] md:mt-0 mt-5 md:p-0 p-4">
            <div className="bg-white w-[100px] rounded-full h-[100px] flex items-center mx-auto  ">
              <Image src={calendar} className=" ms-6"  alt="img" />
            </div>
            <div className="">
              <p className="font-bold mt-3 text-xl text-center">
                Change Anytime
              </p>
            </div>
            <div>
              <p className="">
                Reschedule or cancel your appointments, without making a phone
                call.
              </p>
            </div>
          </div>
          <div className="md:w-[510px] md:mt-0 mt-5 md:p-0 p-4">
            <div className="bg-white w-[100px] rounded-full h-[100px] flex items-center mx-auto  ">
              <Image src={shield} className=" ms-6"  alt="img" />
            </div>
            <div className="">
              <p className="font-bold mt-3 text-xl text-center">
                No Hidden Fees
              </p>
            </div>
            <div>
              <p className="">
                Booking your appointment with Okadoc comes with no additional
                charges.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="md:flex items-center bg-white md:pt-20">
          <div className="flex justify-center">
            <Image src={phonedemo} className="md:w-[500px]"  alt="img" />
          </div>
          <div>
            <h2 className="md:text-4xl text-2xl md:ps-2 font-semibold md:text-start text-center">
              Get the Okadoc App
            </h2>
            <p className="mt-2 p-4">
              The quickest way to book thousands of doctors, manage your
              appointments and attend video consultations. Healthcare in your
              pocket.
            </p>
            <div className="md:flex p-4 mt-5 gap-4 md:justify-start justify-center">
              <Image src={btnappstore}  alt="img" />
              <Image src={btngoogleplay}  alt="img" />
              <Image src={btnappgallery}   alt="img"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Okadac;
