import Image from "next/image";
import img1 from "@/assets/images/filter.svg"
import { FaAngleDown } from "react-icons/fa6";
const FindDoctor=()=>{
    return(
        <>
        <div className="bg-white md:px-20 px-10 py-6 ">
        <div className="flex justify-between ">
        <div className="flex gap-5 flex-wrap">
        <div className="border border-gray-300 p-3 rounded-md">
            <span>Consultation Method</span>
        </div>
        <div className="border border-gray-300 p-3  rounded-md">
            <span>Date</span>
        </div>
        <div className="border border-gray-300 p-3  rounded-md">
            <span>Speciality</span>
        </div>
        <div className="border border-gray-300 p-3  rounded-md">
            <span>Distance</span>
        </div>
        <div className="border border-gray-300 p-3  rounded-md flex space-x-2">
        <Image src={img1} alt="filter" />
            <span>More Filters</span>
        </div>

        </div>

        <div><div className="border border-gray-300 p-3  rounded-md flex space-x-2 items-center">
       
            <span>Relevance</span>
            <FaAngleDown />
        </div>

        </div>

        </div>

        </div>

        </>
    )
}
export default FindDoctor;