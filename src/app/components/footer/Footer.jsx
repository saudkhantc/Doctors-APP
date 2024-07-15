import React from "react";
import Image from "next/image";
import playstore from "../../../assets/images/playstore.png";
import appstore from "../../../assets/images/appstore.png";
const Footer = () => {
  return (
    <>
      <div className="bg-white p-10">
        <div className="md:flex justify-around w-full gap-10 md:ps-16">
          <div className="md:w-[420px]">
            <h1 className="text-3xl font-bold ">Learn More</h1>
            <div className="mt-2 text-xl">
              <h2 className="mt-2 ">For Doctors</h2>
              <h3 className="mt-2 ">Corporation</h3>
              <h4 className="mt-2 ">Our Blog</h4>
              <h5 className="mt-2 ">Medical Articles</h5>
              <h6 className="mt-2 ">Treatments</h6>
              <p className="mt-2 ">Frequently Asked</p>
              <hp className="mt-2 ">Questions</hp>
            </div>
          </div>
          <div className="md:w-[420px]  md:mt-0 mt-4">
            <h1 className="text-3xl font-bold ">About Us</h1>
            <div className="mt-2 text-xl">
              <h2 className="mt-2 ">About Us</h2>
              <h3 className="mt-2 ">Our Team</h3>
              <h4 className="mt-2 ">Careers</h4>
              <h5 className="mt-2">Contact Us</h5>
            </div>
          </div>
          <div className="md:w-[500px]  md:mt-0 mt-4">
            <h1 className="text-3xl font-bold ">Support</h1>
            <div className="mt-2 text-xl">
              <h2 className="mt-2 ">Privacy Policy</h2>
              <h3 className="mt-2 ">Terms And Conditions</h3>
              <h4 className="mt-2 ">Support</h4>
            </div>
          </div>
          <div className="md:w-[420px]  md:mt-0 mt-4">
            <h1 className="text-3xl font-bold ">Language</h1>
            <div className="mt-2">
              <h2 className="mt-2 text-3xl">العربي</h2>
              <h3 className="mt-2 ">English</h3>
            </div>
          </div>
          <div className="md:w-[680px] md:mt-0 mt-4 ">
            <h1 className="text-3xl font-bold ">Download</h1>
            <div className="mt-2">
              <p className="text-xl">
                Get our app today from both the app store and google play, and
                start consulting.
              </p>
            </div>
            <div className="md:flex items-center md:w-[300px] md:h-[200px] md:me-10">
              <div>
                <Image
                  src={playstore}
                  className="md:w-[170px] md:h-[130px] w-[200px] h-[120px]"
                />
              </div>
              <div>
                <Image
                  src={appstore}
                  className="md:w-[150px] md:h-[110px] md:ms-0 ms-5 w-[160px] h-[100px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
