import Image from "next/image";
import { FaPersonBooth, FaVideo } from "react-icons/fa";
import img1 from "@/assets/images/staff.jpg"
import CustomButton from "../customButton/CustomBotton";
import { FaAngleDown } from "react-icons/fa6";

const MidBanner2 = () => {
    return (
        <>
            <div className="flex md:flex-row flex-col bg-[#00C3A5] w-full md:p-20 p-10 md:gap-10 gap-6 item-center justify-center">
                <div className="flex flex-col w-[60vw] gap-8 items-center justify-center">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-3xl font-semibold text-white">Find your specialist and make an appointment</h1>
                        <span className="text-white text-xl font-semibold">105,179 professionals are here to help you.</span>
                    </div>

                    <div className="flex flex-col  gap-5 p-2 bg-[#15939D] md:w-[50vw] w-full">
                        <div className="flex md:flex-row flex-col gap-2">
                            <div className="bg-white rounded-full flex gap-2 items-center p-2">
                                <FaPersonBooth color="#00C3A5" />
                                <span>in-person</span>
                            </div>
                            <div className="border border-white rounded-full flex gap-2 p-2 items-center">
                                <FaVideo color="white" />
                                <span className="text-white">Online</span>
                            </div>
                        </div>

                        <div className="flex   md:flex-row flex-col gap-2">

                            <div className="flex  justify-between bg-white p-2 items-center  ">
                                <input type="text" className="outline-none w-full" />
                                <FaAngleDown />

                            </div>
                            <div className="flex justify-between bg-white p-2 items-center">
                                <input type="text" className="outline-none w-full" />
                                <FaAngleDown />

                            </div>
                            <CustomButton buttonText="Look For" />
                        </div>

                    </div>
                </div>

                <div className="md:w-[40vw] w-full items-center justify-center">
                    <Image src={img1} className="rounded-md" />
                </div>

            </div>

        </>
    )
};
export default MidBanner2;
