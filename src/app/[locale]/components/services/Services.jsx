import React from "react";
import Image from "next/image";
import services1 from "@/assets/images/services1.png";
import services3 from "@/assets/images/services3.png";
import services2 from "@/assets/images/services2.png";
const Services = () => {
  return (
    <>
      <div className="md:mt-10 mb-5 w-[90%] mx-auto overflow-x-hidden">
        <div className="text-center ">
          <h1
            className="md:text-5xl text-3xl text-[#52A6B7] "
            data-aos="fade-down-left"
          >
            We Care To Make Your <strong>Life Easier</strong>
          </h1>
          <p className=" pt-3 text-[#545454] font-semibold text-xl">
            Communicate with our doctors easily via ElBalto app in different
            ways and in various specializations, online and at the comfort of
            your home
          </p>
        </div>
        <div
          className="md:flex mx-auto w-[80%]  items-center justify-between mt-10"
          data-aos="fade-down-left"
        >
          <div className="md:text-start text-center">
            <h3 className="text-[#52A6B7] text-3xl ">
              Our doctors are specialized in
            </h3>
            <ul className="md:list-disc md:ms-6 text-[#7A5454] ">
              <li className="md:text-2xl text-xl">Psychiatry</li>
              <li className="md:text-2xl text-xl">Pediatrics</li>
              <li className="md:text-2xl text-xl">Nutrition & Dietetics</li>
              <li className="md:text-2xl text-xl">Obstetrics & Gynecology</li>
              <li className="md:text-2xl text-xl">Andrology & Dermatology</li>
            </ul>
          </div>
          <div className="mt-5">
            <div>
              <Image src={services1} className="md:w-[600px] object-cover" />
            </div>
          </div>
        </div>
        <div className="mt-10 mb-5" data-aos="fade-down-left">
          <div>
            <h2 className="text-[#52A6B7] text-center md:text-5xl text-3xl">
              Ways To Contact Your Doctors
            </h2>
          </div>
          <div className="md:flex items-center md:gap-10">
            <div className="mt-10">
              <Image src={services3} className="md:w-[600px] object-cover" />
            </div>
            <div className=" md:text-start text-center md:mt-0 mt-5">
              <h6 className="text-[#52A6B7] md:text-4xl text-3xl ">
                Live video consultations
              </h6>
              <p className=" md:w-[470px] text-xl">
                Book a live video consultation with your doctor wherever you are
                and whenever you want, duration of video consultations starts
                from 20 minutes and get a medical report by the end of your
                consultation.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 mb-5" data-aos="fade-down-left">
          <div className="md:flex items-center gap-10">
            <div className=" md:text-start text-center md:mt-0 mt-5">
              <h6 className="text-[#52A6B7] md:text-4xl text-3xl ">
                Free written consultations
              </h6>
              <p className=" md:w-[559px] text-xl">
                Send your medical queries to our doctors via ElBalto app and get
                your answers for free, you can also attach files audio and
                photos.
              </p>
            </div>
            <div className="mt-10">
              <Image src={services2} className="md:w-[600px] object-cover" />
            </div>
          </div>
        </div>
        <div>
          <div className="md:w-[60%] mx-auto">
            <h4 className="text-[#52A6B7]  text-3xl md:text-4xl text-center">
              Enjoy
              <span className="text-[#F02B3B] md:text-4xltext-3xl font-bold ps-2">
                100%
              </span>
              Free Video Consultation Upon Registration On Our App
            </h4>
            <div className="flex justify-center mt-5">
              <button className="bg-[#F02B3B]  p-3 rounded-full text-white md:w-[200px]  ">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
