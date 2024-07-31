import CustomButton from "../customButton/CustomBotton";
import img1 from "@/assets/images/partners.svg"
import Image from "next/image";

const PartnerOkadoc=()=>{
    return(
        <>
        <div className="bg-[#EBF6F5] p-20  w-full items-center">

        <div className="flex md:flex-row flex-col gap-6 items-center">
        <div className="flex flex-col w-[50vw] gap-6">
        <h1 className="text-4xl font-semibold">Partner with Okadoc</h1>
        <p>Find out why 100s of healthcare providers, insurers and national health systems choose Okadoc to help them provide better health outcomes.</p>
        <div>
        <CustomButton buttonText="Learn More"/>
        </div>
        </div>
        <div>
            <Image src={img1} alt="img1" />
        </div>

        </div>

        </div>
        </>
    )
}
export default PartnerOkadoc;