
// import Link from "next/link";
// import Image from "next/image";
// import logo from "../../../assets/images/appLogo.svg";
// import img1 from "../../../assets/images/od-facebook.svg";
// import img2 from "../../../assets/images/od-twitter.svg";
// import img3 from "../../../assets/images/od-instagram-white.svg";
// import img4 from "../../../assets/images/od-linkedin-blue.svg";
// import img5 from "../../../assets/images/od-youtube.svg";
// import img6 from "../../../assets/images/iso-ias.png";

// const Footer = () => {
//   return (
//     <>
//       <div className="bg-white border border-t-gray-200 border-b-gray-200 p-8 lg:p-20">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//             <div className="mb-6 lg:mb-0">
//               <Image src={logo} alt="logo" width={120} />
//             </div>
//             <div className="mb-6 lg:mb-0">
//               <h3 className="font-semibold text-2xl mb-6 ">About Okadoc</h3>
//               <ul>
//                 <li className="mb-4">
//                   <Link href="/link6" className="text-[#317ACC] hover:underline text-lg">About</Link>
//                 </li>
//                 <li className="mb-4">
//                   <Link href="/link7"  className="text-[#317ACC] hover:underline text-lg">Okadoc for Doctors</Link>
//                 </li>
//                 <li className="mb-4">
//                   <Link href="/link8"  className="text-[#317ACC] hover:underline text-lg">Press</Link>
//                 </li>
//                 <li className="mb-4">
//                   <Link href="/link9"  className="text-[#317ACC] hover:underline ftext-lg">Blog</Link>
//                 </li>
//               </ul>
//             </div>
//             <div className="mb-6 lg:mb-0">
//               <h3 className="font-semibold text-2xl mb-6">Help</h3>
//               <ul>
//                 <li className="mb-4">
//                   <Link href="/link11"  className="text-[#317ACC] hover:underline text-lg">Contact</Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <div className="grid grid-cols-3 sm:grid-cols-5 gap-14 mb-6">
//                 <div className="bg-[#E5F2FA] w-[60px] h-[60px] rounded-full flex items-center justify-center">
//                   <Image src={img1} width={14} alt="img" />
//                 </div>
//                 <div className="bg-[#E5F2FA] w-[60px] h-[60px] rounded-full flex items-center justify-center">
//                   <Image src={img2} width={30} alt="img" />
//                 </div>
//                 <div className="bg-[#E5F2FA] w-[60px] h-[60px] rounded-full flex items-center justify-center">
//                   <Image src={img3} width={30}  alt="img"/>
//                 </div>
//                 <div className="bg-[#E5F2FA] w-[60px] h-[60px] rounded-full flex items-center justify-center">
//                   <Image src={img4} width={30} alt="img" />
//                 </div>
//                 <div className="bg-[#E5F2FA] w-[60px] h-[60px] rounded-full flex items-center justify-center">
//                   <Image src={img5} width={30}  alt="img"/>
//                 </div>
//               </div>
//               <Image src={img6} width={70} alt="img" />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex md:flex-row flex-col justify-between px-20 py-10">
//       <div>
//         <span>© Copyright 2024 Okadoc Technologies FZ-LLC</span>
//       </div>
//       <div className="flex md:flex-row flex-col md:gap-10 gap-4">
//       <Link href="/link11"  className="text-[#317ACC] hover:underline text-lg">Provacy Policy</Link>
//       <Link href="/link11"  className="text-[#317ACC] hover:underline text-lg">Terms of Use</Link>
//       <Link href="/link11"  className="text-[#317ACC] hover:underline text-lg">Cookie Policy</Link>

//       </div>


//       </div>
//     </>
//   );
// };

// export default Footer;


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

export default Footer;
