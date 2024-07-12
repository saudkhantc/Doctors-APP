import React from "react";
import "./whychooseelbalto.css";
import Image from "next/image";
import clientphone from "../../../assets/images/clientphone.png";
import wallet from "../../../assets/images/wallet.png";
import family from "../../../assets/images/family.png";
import dollar from "../../../assets/images/dollar.png";
import folder from "../../../assets/images/folder.png";
import badge from "../../../assets/images/badge.png";
import newspaper from "../../../assets/images/newspaper.png";
import Aos from "aos";
import "aos/dist/aos.css";
const WhyChooseElbalto = () => {
  return (
    <>
      <div>
        <div className="md:p-0 p-5">
          <div className="mainbg relative ">
            <div>
              <div className="">
                <h2 className="text-5xl absolute md:left-40 md:bottom-48 left-12 bottom-10 text-[#319EAC] ">
                  Why Chosee Elbalto
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex md:p-0 p-4">
          <div>
            <div>
              <div
                className="md:ms-24 md:relative md:-top-10"
                data-aos="fade-left"
              >
                <Image src={clientphone} className="w-[500px] " />
              </div>
            </div>
          </div>
          <div>
            <div
              className="md:mt-10 mt-5 md:w-[530px] md:ps-10"
              data-aos="fade-right"
            >
              <h6 className="text-2xl font-bold text-[#319EAC] ">
                Our services are private and confidential.
              </h6>
              <p className="md:mt-4">
                It’s just between you and your doctor, we do not record any
                video consultations and all your questions are encrypted and
                managed by a qualified medical team.
              </p>
            </div>
            <div className="md:mt-10 mt-5 md:ps-10" data-aos="fade-right">
              <h6 className="text-2xl text-[#319EAC] font-bold">
                Completely different, yet so simple
              </h6>
              <p className="md:mt-2">
                Health services via High-tech live videos and text messages.
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex justify-center  mx-auto  p-4 md:p-0 mt-10  mb-5 md:gap-9 ">
          <div
            className="md:flex md:items-center  gap-6 md:w-[600px]"
            data-aos="fade-right"
          >
            <div className="flex justify-center md:justify-start">
              <Image src={wallet} className="md:w-[100px] md:h-[100px]  " />
            </div>
            <div className="md:mt-0 ">
              <h5 className="font-bold text-[#8E9EAC] text-xl">
                Time, effort and money saver
              </h5>
              <p className="md:mt-0 ">
                For non-emergency medical cases across different
                specializations.
              </p>
            </div>
          </div>
          <div
            className="md:flex md:items-center  md:mt-0 mt-10 gap-6 md:w-[600px] "
            data-aos="fade-right"
          >
            <div className=" flex justify-center md:justify-start">
              <Image src={badge} className="md:w-[160px] mdh-[100px] " />
            </div>
            <div className="mt-4">
              <h5 className="text-[#8E9EAC] font-bold text-xl">
                Highly qualified doctors and specialists
              </h5>
              <p>
                Choose between +100 Certified doctors and specialists, trained
                to give you best medical advice tailored to your case and at the
                comfort of your home.
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex justify-center items-center mx-auto  p-4 md:p-0  mb-5 md:gap-9 ">
          <div
            className="md:flex md:items-center md:mt-0 mt-5 gap-6 md:w-[600px]"
            data-aos="fade-right"
          >
            <div className="flex justify-center md:justify-start">
              <Image src={folder} className="md:w-[180px] md:h-[100px]  " />
            </div>
            <div className="md:mt-0 ">
              <h5 className="font-bold text-[#8E9EAC] text-xl">
                A medical history file, in your pocket
              </h5>
              <p className="md:mt-0 ">
                You get a digital medical report after each consultation so you
                can track all your history from one place on your mobile.
              </p>
            </div>
          </div>
          <div
            className="md:flex md:items-center md:mt-0 mt-10  gap-6 md:w-[600px] "
            data-aos="fade-right"
          >
            <div className=" flex justify-center md:justify-start">
              <Image src={newspaper} className="md:w-[150px] md:h-[100px] " />
            </div>
            <div className="mt-4">
              <h5 className="text-[#8E9EAC] font-bold text-xl">
                Send photos and test results to your doctor
              </h5>
              <p>
                Our doctors will be able to assess the medical case more
                accurately with the help of the shared photos and lab test
                results.
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex justify-center items-center mx-auto  p-4 md:p-0 mt-10  mb-10 md:gap-9 ">
          <div
            className="md:flex md:items-center  gap-6 md:w-[600px]"
            data-aos="fade-right"
          >
            <div className="flex justify-center md:justify-start">
              <Image src={dollar} className="md:w-[260px] md:h-[100px]  " />
            </div>
            <div className="md:mt-0 ">
              <h5 className="font-bold text-[#8E9EAC] text-xl">
                Our services are affordable with no hidden costs
              </h5>
              <p className="md:mt-0 ">
                App download, registration, and your first video consultation
                are 100% free! And every service has its price stated before you
                choose to pay.{" "}
                <strong>We only charge you after the consultation</strong>
              </p>
            </div>
          </div>
          <div
            className="md:flex md:mt-0 mt-10  gap-6 md:w-[600px] "
            data-aos="fade-right"
          >
            <div className=" flex justify-center md:justify-start">
              <Image src={family} className="md:w-[100px] md:h-[100px] " />
            </div>
            <div className="">
              <h5 className="text-[#8E9EAC] font-bold text-xl">
                Our app is for you and your loved ones
              </h5>
              <p>
                Book a single consultation or a package for yourself or for
                family members.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseElbalto;
