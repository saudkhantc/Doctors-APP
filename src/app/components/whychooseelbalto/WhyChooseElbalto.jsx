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
const WhyChooseElbalto = () => {
  return (
    <>
      <div>
        <div className="mainbg relative">
          <div>
            <div className="">
              <h2 className="text-5xl absolute md:left-40 md:bottom-16 left-12 bottom-10 text-[#319EAC] font-semibold">
                Why Chosee Elbalto
              </h2>
            </div>
          </div>
        </div>
        <div className="md:flex md:p-0 p-4">
          <div>
            <div>
              <div className="md:ms-24 md:relative md:-top-10">
                <Image src={clientphone} className="w-[500px] " />
              </div>
            </div>
          </div>
          <div>
            <div className="md:mt-10 mt-5 md:w-[530px] md:ps-10">
              <h6 className="text-2xl font-bold text-[#319EAC] ">
                Our services are private and confidential.
              </h6>
              <p className="md:mt-4">
                It’s just between you and your doctor, we do not record any
                video consultations and all your questions are encrypted and
                managed by a qualified medical team.
              </p>
            </div>
            <div className="md:mt-10 mt-5 md:ps-10">
              <h6 className="text-2xl text-[#319EAC]">
                Completely different, yet so simple
              </h6>
              <p className="md:mt-2">
                Health services via High-tech live videos and text messages.
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex p-4 md:p-0 md:justify-center  items-center">
          <div className="flex md:items-center gap-4">
            <div className="">
              <Image
                src={wallet}
                className="w-[145px] h-[120px] object-cover"
              />
            </div>
            <div className="md:mt-0 ">
              <h5>Time, effort and money saver</h5>
              <p className="md:mt-0 ">
                For non-emergency medical cases across different
                specializations.
              </p>
            </div>
          </div>
          <div className="md:flex gap-4 items-center md:mt-0 mt-5 ">
            <div className=" ">
              <Image src={badge} />
            </div>
            <div>
              <h5>Time, effort and money saver</h5>
              <p>
                For non-emergency medical cases across different
                specializations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseElbalto;
