import Image from "next/image";
import img1 from "../../../assets/images/landimage3.jpg"
import CustomButton from "../customButton/CustomBotton";
const CollectLead=()=>{
    return(
        <>
    <div className="flex md:flex-row flex-col bg-white md:p-20 p-10 items-center justify-center md:gap-20 gap-10">
    <div className="flex md:w-[50vw] w-full items-center ">
    <Image src={img1}/>

    </div>

<div className="flex flex-col gap-4 md:w-[50vw] w-full">
<div>
<h1 className="md:text-2xl text-xl font-semibold">Are you a health specialists? Start acquiring new patients</h1>
</div>

<div className="flex flex-col">
<p className="text-gray-500">Connect with patients looking for specialists in your area.</p>
<p className="text-gray-500">Connect with patients looking for specialists in your area.</p>
<p className="text-gray-500">Improve your online reputation by getting verified options.</p>
</div>

<div>
    <CustomButton buttonText="Discover Hanna"/>
</div>


</div>
    </div>
        </>
    )
};

export default CollectLead;