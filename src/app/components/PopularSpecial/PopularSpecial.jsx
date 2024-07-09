import Link from 'next/link';
import { LuStethoscope,LuBaby  } from "react-icons/lu";
import { LiaTeethSolid } from "react-icons/lia";
import { TbGenderDemigirl } from "react-icons/tb";
import { MdOutlineFaceRetouchingNatural } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import CustomButton from "../customButton/CustomBotton";
import Image from "next/image";
import img1 from "../../../../public/Images/summus.png"

const PopularSpecial=()=>{

    const specialities = [
        { id: 1, name: "GP",  icon: <LuStethoscope size={45} color="#007ACC" />},
        { id: 2, name: "Pediatrician",icon: <LuBaby size={45} color="#007ACC" /> },
        { id: 3, name: "Dentist",icon: <LiaTeethSolid  size={45} color="#007ACC" /> },
        { id: 4, name: "Gynaecologist",icon: <TbGenderDemigirl  size={45} color="#007ACC" />  },
        { id: 5, name: "Dermatologist",icon: <MdOutlineFaceRetouchingNatural size={45} color="#007ACC" /> },
        // Add more specialities as needed
      ];
return(
    <>
    <div className="p-20 flex md:flex-row flex-col w-full bg-white gap-6">
    <div className="flex flex-col w-[60vw] gap-10">
    <div className="space-y-4">
    <h1 className="text-3xl font-semibold">Popular Specialities</h1>
    <p>Find your doctor through our wide directory of specialities.</p>
    </div>
    <div className="flex flex-wrap gap-8 ">
    {specialities.map((speciality) => (
            <div
              key={speciality.id}
              className="w-[180px] h-[180px] shadow-xl border border-gray-100 items-center rounded-lg justify-center gap-7 flex flex-col"
            >
               {speciality.icon}
              <span className="text-lg">{speciality.name}</span>
            </div>
          ))}
          <div className="w-[180px] h-[180px] flex items-center rounded-lg justify-center flex-col gap-8">
            <GrNext size={50} color="#007ACC" />
            <span  className="text-lg text-[#007ACC]">View More</span>
          </div>


    </div>
    </div>
    <div className=" w-[40vw] flex flex-col gap-8  justify-center">
    <div className="flex flex-col gap-4">
    <h1 className="font-medium text-2xl">Search by your insurance</h1>
    <p>Find services that are within your insurance network.</p>
    </div>
    <div>
    <CustomButton buttonText="Search Now" />
    </div>
    </div>
    </div>

    <div className="p-20 bg-white ">
    <div className="w-full border border-gray-400 rounded-lg flex md:flex-row  flex-col justify-between items-center px-4">
    <div className="flex  md:flex-row  flex-col items-center space-x-10">
    <Image src={img1} width={150} height={150}/>
    <p>Book a remote virtual consultation with 4000+ top-ranked experts in the USA
</p>
</div>
<div className="flex items-center gap-2">
<Link href="/your-destination-url">
      <div className="flex items-center gap-2 cursor-pointer hover:underline">
        <span className='text-[#007ACC]'>Learn More</span>
        <GrNext color="#007ACC" />
      </div>
    </Link>
</div>
</div>

    </div>
    </>
)
}

export default PopularSpecial;