import React from "react";
import Image from "next/image";
import lightingblue from "@/assets/images/lightingblue.svg";
import calendar from "@/assets/images/calendar.svg";
import shield from "@/assets/images/shield.svg";
import phonedemo from "@/assets/images/phonedemo.png";
import btnappgallery from "@/assets/images/btnappgallery.svg";
import btngoogleplay from "@/assets/images/btngoogleplay.svg";
import btnappstore from "@/assets/images/btnappstore.svg";
const Okadac = () => {
  return (
    <>
      <div className="bg-[#E5F2FA] md:p-20  ">
        <div className="flex justify-center">
          <p className="md:text-4xl text-[#2A7798] font-semibold">Why use Hanaa</p>
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
            <div >
              <p className="text-center">
                View your doctor’s real-time availability and select a time that
                works for you.
              </p>
            </div>
          </div>
          <div className="md:w-[510px] md:mt-0 mt-5 md:p-0 p-4">
            <div className="bg-white w-[100px] rounded-full h-[100px] flex items-center mx-auto  ">
              <Image src={calendar} className=" ms-6"  alt="img" />
            </div>
            <div className="text-center">
              <p className="font-bold mt-3 text-xl text-center">
                Change Anytime
              </p>
            </div>
            <div>
              <p className="text-center">
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
              <p className="text-center">
                Booking your appointment with Hanaa comes with no additional
                charges.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Okadac;
