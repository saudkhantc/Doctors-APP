import Image from "next/image";
import img1 from "../../../assets/images/statescope.svg"
import img2 from "../../../assets/images/caldr.svg"
import img3 from "../../../assets/images/happy.svg"
import img4 from "../../../assets/images/award.svg"
const data = [
    {
      imgSrc: img1,
      number: '180+',
      description: 'Expert Doctors',
    },
    {
      imgSrc: img2,
      number: '200+',
      description: 'Expert Services',
    },
    {
      imgSrc: img3,
      number: '50+',
      description: 'Happy Customers',
    },
    {
      imgSrc: img4,
      number: '100+',
      description: 'Best Award Winner',
    },
   
  ];
const MidBanner=()=>{
    return(
        <>
        <div className="bg-[#11AED6] flex   items-center justify-center p-20">
        <div className="flex flex-wrap md:gap-20 gap-10">
      {data.map((item, index) => (
        <div key={index} className="flex gap-5">
          <div className="bg-gray-100 w-[80px] h-[80px] rounded-full flex items-center justify-center">
            <Image src={item.imgSrc} />
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-4xl font-bold text-white">{item.number}</span>
            <span className="text-white">{item.description}</span>
          </div>
        </div>
      ))}
    </div>

        </div>

        </>
    )
}
export default MidBanner;