import Image from "next/image";
import img1 from "../../../assets/images/WhoWe.png"
import img2 from "../../../assets/images/expprof.svg";
import img3 from "../../../assets/images/statescope.svg";
import img4 from "../../../assets/images/caldr.svg";
import { GrNext } from "react-icons/gr";
import { FaHeadphones, FaSearch,FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const WhoWeAre=()=>{
    return(
        <>
        <div className="md:p-20 p-10 bg-white ">
        <div className="flex md:flex-row flex-col md:gap-10 gap-5 items-center justify-center">
        <div className="dv1 w-[40vw] flex flex-col ">
        <div>
        <Image src={img1} />
        </div>
        
        <div className="flex md:flex-row flex-col  gap-4 shadow-xl p-4 rounded-full relative md:bottom-28 bottom-0  bg-white md:w-[350px] w-full md:left-24 left-0">
        <div className=" bg-[#1E5D8A] w-[50px] h-[50px] rounded-full items-center justify-center flex  ">
        <FaHeadphones color="white" size={20} />
        </div>

        <div className="flex flex-col">
        <span>24/7 Service</span>
        <span className="text-gray-500">We are available when you want</span>

        </div>

        </div>
        </div>
<div className="flex flex-col w-[60vw] gap-2 items-center justify-center">
        <div className="dv2 flex flex-col gap-3">
        <h1 className="text-4xl font-semibold">Who <span className="text-4xl font-semibold text-[#1E5D8A]">We Are</span>  </h1>
        <p className="text-gray-500">The Great Place Of Eyecare Hospital Center</p>
        <p className="text-gray-500">At Doccure, we understand the importance of clear vision and comprehensive eye care. Our dedicated team of experienced optometrists and ophthalmologists is committed to providing top-notch eye care services tailored to your individual needs.</p>
         <p className="text-gray-500">We envision a world where everyone enjoys optimal eye health and experiences the beauty of life with clear vision.</p>
         
        </div>

        <div className="flex md:flex-row flex-col md:gap-8">

        <div className="flex w-[220px] h-[240px]  items-center justify-center">
        <div className="flex flex-col gap-2 items-center">
        <div className="w-[140px] h-[80px] bg-[#1E5D8A] items-center flex justify-center rounded-xl">
        <Image src={img2} />
        </div>
        <span className="text-base font-medium text-center">Expert Professionals and World Class Facilities</span>
        <div className="flex gap-2 items-center justify-center">
        <span className="text-[#0070CD]">Find Doctors</span>
        <GrNext color="#0070CD" size={12}/>
        </div>
        </div>
        </div>
        <div className="flex w-[220px] h-[240px]  items-center justify-center">
        <div className="flex flex-col gap-2 items-center">
        <div className="w-[140px] h-[80px] bg-[#1E5D8A] items-center flex justify-center rounded-xl">
        <Image src={img3} />
        </div>
        <span className="font-medium text-center">Specialty Eyecare treatment for all</span>
        <div className="flex gap-2 items-center justify-center">
        <span className="text-[#0070CD]">Book Now</span>
        <GrNext color="#0070CD" size={12}/>
        </div>
        </div>
        </div>
        <div className="flex w-[220px] h-[240px]  items-center justify-center">
        <div className="flex flex-col gap-2 items-center">
        <div className="w-[140px] h-[80px] bg-[#1E5D8A] items-center flex justify-center rounded-xl">
        <Image src={img4} />
        </div>
        <span className="font-medium text-center">Online Appointment and Excellent Treatment</span>
        <div className="flex gap-2 items-center justify-center">
        <span className="text-[#0070CD]">Make an Appointment</span>
        <GrNext color="#0070CD" size={12}/>
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
export default WhoWeAre;