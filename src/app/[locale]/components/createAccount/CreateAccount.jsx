import Image from "next/image";
import img1 from "@/assets/images/landimage4.jpg"
import CustomButton from "../customButton/CustomBotton";
const CreateAccount=()=>{
    return(
        <>
        <div className="flex md:flex-row flex-col md:p-20 p-10 md:gap-10 gap-5 bg-gray-100 items-center justify-center">
        <div className=" flex flex-col md:gap-10 gap-5 w-[50vw]">
        <h1 className="md:text-5xl text-3xl font-bold">Better Healthcare For a Better Life </h1>
        <div>
        <CustomButton buttonText="Create Free Account"/>
        </div>

        </div>

        <div className=" flex md:w-[30vw] w-full ">
        <Image src={img1}  />

        </div>

        </div>

        </>
    )
};
export default CreateAccount;