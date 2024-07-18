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
import "./PopularSpecial.css";

const PopularSpecial = () => {
  return (
    <>
      <div className="p-5 md:w-[90%] mx-auto">
        <div>
          <div className="flex justify-center">
            <h1 className="text-4xl font-bold text-center">
              Our Popular Specialties
            </h1>
          </div>
          <div className="flex justify-center mt-4">
            <h3 className="text-xl text-[#52A6B7] text-center">
              The Great Place Of Eyecare Hospital Center
            </h3>
          </div>
        </div>
        <div className="md:flex md:flex-wrap  justify-center md:w-[100%] mt-5  gap-5 p-5">
          {[
            { img: clini06, title: "Cataract" },
            { img: clini02, title: "Corneal Ulcer" },
            { img: clinic03, title: "Keratoconus" },
            { img: clini01, title: "Glaucoma" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex md:w-[45%] lg:w-[23%] flex-col items-center mb-5 md:mb-0"
            >
              <div className="relative">
                <Image src={item.img} className="" />
                <div
                  className="absolute "
                  style={{
                    width: "110px",
                    height: "110px",
                    backgroundColor: "#1B5A90",
                    borderRadius: "100% 0px",
                    transform: "rotate(45deg)",
                    textAlign: "center",
                    margin: "-40px 80px auto",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <p
                    className="rounded-full text-xl bg-white "
                    style={{ transform: "rotate(-40deg)" }}
                  >
                    <IoIosArrowForward />
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <h4 className="ms-5  mt-12 text-[#1B5A90] text-2xl">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
        <div className="md:w-[90%] mt-10 p-5 mx-auto">
          <div>
            <div className="flex justify-center">
              <h1 className="text-4xl font-bold text-center">
                Our Popular Specialties
              </h1>
            </div>
            <div className="flex justify-center mt-4">
              <h3 className="text-xl text-[#52A6B7] text-center">
                The Great Place Of Eyecare Hospital Center
              </h3>
            </div>
          </div>
          <div className="md:flex gap-5 mt-5 justify-center">
            {[
              {
                img: eyespecialdoc01,
                name: "Dr. Carrie Rosario",
                qualification: "MBBS, DOMS - Ophthalmology",
                rating: 4.9,
              },
              {
                img: eyespecialdoc02,
                name: "Dr. Eric Hansley",
                qualification: "MBBS, MS - Surgeon",
                rating: 4.5,
              },
              {
                img: eyespecialdoc03,
                name: "Dr. Mary Wilkinson",
                qualification: "MBBS, DNB - Ophthalmology",
                rating: 4.3,
              },
            ].map((doc, index) => (
              <div
                key={index}
                className="flex flex-col items-center md:w-[30%] bg-white rounded-lg p-5 mb-5 md:mb-0"
              >
                <div className="relative">
                  <Image
                    src={doc.img}
                    className="animated-image animated-image:hover"
                  />
                  <h5 className="font-semibold text-xl mt-3">{doc.name}</h5>
                  <div className="flex gap-2 items-center justify-between w-full mt-2">
                    <p className="text-[#1B5A90]">{doc.qualification}</p>
                    <FaCircleArrowRight className="text-3xl text-blue-500" />
                  </div>
                  <div className="absolute top-10 right-2 bg-white p-1 rounded-full flex items-center gap-2">
                    <FaStar className="text-yellow-400" />
                    <p>{doc.rating}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularSpecial;