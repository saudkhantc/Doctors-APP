import Link from "next/link";
import Image from "next/image";
import FindDoctor from "@/app/components/findDoctor/FindDoctor";
import Navbar from "@/app/components/Navbar/Navbar";
import img from "../../../assets/images/doctor1.png"
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { GrNext } from "react-icons/gr";
import Footer from "@/app/components/footer/Footer";
import Navigation from "@/app/components/navigation/Navigation";

const Doctors=()=>{
    const data = [
        {
          id: 1,
          name: "Dr. Aamerah Shah",
          title: "Specialist Family Medicine",
          location: "Fakeeh University Hospital - Primary Care",
          address: "Dubai Silicon Oasis, Dubai",
          img: img,
        },
        {
          id: 2,
          name: "Dr. John Doe",
          title: "Specialist Cardiology",
          location: "ABC Hospital",
          address: "Business Bay, Dubai",
          img: img,
        },
        {
          id: 2,
          name: "Dr. John Doe",
          title: "Specialist Cardiology",
          location: "ABC Hospital",
          address: "Business Bay, Dubai",
          img: img,
        },
        {
          id: 2,
          name: "Dr. John Doe",
          title: "Specialist Cardiology",
          location: "ABC Hospital",
          address: "Business Bay, Dubai",
          img: img,
        },
        {
          id: 2,
          name: "Dr. John Doe",
          title: "Specialist Cardiology",
          location: "ABC Hospital",
          address: "Business Bay, Dubai",
          img: img,
        },
        {
          id: 2,
          name: "Dr. John Doe",
          title: "Specialist Cardiology",
          location: "ABC Hospital",
          address: "Business Bay, Dubai",
          img: img,
        },
        {
          id: 2,
          name: "Dr. John Doe",
          title: "Specialist Cardiology",
          location: "ABC Hospital",
          address: "Business Bay, Dubai",
          img: img,
        },
        
        {
          id: 2,
          name: "Dr. John Doe",
          title: "Specialist Cardiology",
          location: "ABC Hospital",
          address: "Business Bay, Dubai",
          img: img,
        },
        
        {
          id: 2,
          name: "Dr. John Doe",
          title: "Specialist Cardiology",
          location: "ABC Hospital",
          address: "Business Bay, Dubai",
          img: img,
        },
        
      ];
      
    return(
        <>
        <Navbar />
        <FindDoctor />
        <div className="flex md:flex-row  md:px-20 px-6  md:py-10 py-6  gap-8 flex-wrap ">
        {data.map((item) => (
                <div key={item.id} className="flex flex-col rounded-lg bg-white p-4 gap-6 w-[370px] h-auto">
                    <div className="flex gap-4 border-b p-2 border-b-black">
                        <div>
                            <Image src={item.img} width={60} className="rounded-full" alt={item.name} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h1 className="text-[#007AD6] font-semibold text-lg">{item.name}</h1>
                            <p>{item.title}</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div>
                            <Link href="/link11" className="hover:underline">
                                {item.location}
                            </Link>
                            <p>{item.address}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                        <div className="bg-[#007ACC] w-12 h-12 rounded-full items-center flex justify-center">
                            <CgSmartHomeRefrigerator color="white" size={20} />
                        </div>
                        <span className="text-sm font-light">Facility</span>
                        </div>
                    </div>
                    

                    <div className="flex border border-gray-400 p-4 rounded-md justify-between items-center">
                        <div className="flex items-center gap-2">
                            <CgSmartHomeRefrigerator size={20} />
                            <span>
                                At Facility . From <span className="font-semibold">Today</span>
                            </span>
                        </div>
                        <div>
                            <GrNext />
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <Navigation />
        <Footer />

        </>
    )
}
export default Doctors;