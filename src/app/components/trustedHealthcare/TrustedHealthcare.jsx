import Image from "next/image";
import img1 from "../../../assets/images/logo_mediclinic.png"
import img2 from "../../../assets/images/logo_medcare.png"
import img3 from "../../../assets/images/logo_emirates.png"
import img4 from "../../../assets/images/logo_healthplus.png"
import img5 from "../../../assets/images/logo_danat.png"
import img6 from "../../../assets/images/logo_bupa.png"
import img7 from "../../../assets/images/logo-aspris.jpg"

const TrustedHealthcare=()=>{
    return(
        <>
        <div className="bg-white w-full p-16 ">
        <div className="flex flex-col  gap-20  ">
        <div>
            <h1 className="text-3xl font-semibold text-center">Trusted by healthcare leaders</h1>
        </div>
        <div className="flex md:flex-row flex-col flex-wrap items-center justify-center ">
            <Image src={img1} alt="img" />
            <Image src={img2} alt="img"  />
            <Image src={img3} alt="img"  />
            <Image src={img4} alt="img"  />
            <Image src={img5} alt="img"  />
            <Image src={img6} alt="img"  />
            <Image src={img7} width={400} alt="img" />
        </div>

        </div>

        </div>
        </>
    )
}
export default TrustedHealthcare;