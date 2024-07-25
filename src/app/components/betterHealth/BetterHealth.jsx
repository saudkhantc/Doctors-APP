import Image from "next/image";
import img1 from "../../../assets/images/amb4.jpg";
import img2 from "../../../assets/images/search-bg.png"
import { LuMapPin } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import img3 from "../../../assets/images/landingpage22.jpg"
import img4 from "../../../assets/images/shuttur1.jpg"

const BetterHealth=()=>{
    return(
        <>
         <div className="  bg-white   h-screen  flex md:flex-row gap-6 flex-col p-5  " 
      //   style={{
      //   backgroundImage: `url(${img4.src})`,
      //   backgroundSize: "cover", 
    
      
      // }}
      
    > 
         <div className="flex flex-col gap-10 ropa-sans-regular w-[60vw] z-10  md:pt-20 ">
         <div className="dev1 flex flex-col gap-4 items-center">
         <h1 className="md:text-4xl text-3xl text-[#2A7798] font-semibold">Search Doctor, Make an Appointment</h1>
         <p className="text-[#2A7798] text-xl ">Discover the best doctors, clinic & hospital the city nearist to you.</p>
         </div>

         <div className="dev2 flex md:flex-row flex-col items-center justify-center gap-6 ">
         

         <div className="flex items-center gap-2">
          <LuMapPin size={18} />
         <div className="flex gap-2 items-center p-3 rounded-md  bg-white  border  border-[#2A7798]">
         <span>City</span>
         </div>
      
         </div>

         <div className="flex flex-col gap-2">
         <div className="flex gap-2 items-center p-3 rounded-md  bg-white  border  border-[#2A7798] ">
         <CiSearch size={20}/>
         <input type="text" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc" className="md:w-[400px] outline-none" />
         </div>
       
         </div>

         <div className="bg-[#2A7798] flex items-center p-4 h-12 rounded-lg">
         <CiSearch size={24} color="white" />

         </div>

         </div>

         
         </div>
         <div className="w-[40vw] ">
          <Image src={img4} ></Image>
         </div>


      

       
         

         </div>

       

     

        </>
    )
};
export default BetterHealth;










