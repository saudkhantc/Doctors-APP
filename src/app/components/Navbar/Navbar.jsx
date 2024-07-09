import Link from 'next/link';
import Image from 'next/image';
import logo from "../../../../public/Images/okadoc logo.jpeg"
import { LuMapPin } from "react-icons/lu";
import { GrNext } from "react-icons/gr";
import { FaGlobe } from 'react-icons/fa';
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
    return (
      <nav className="bg-white p-6 flex ">
      <ul className='flex space-x-6'>
      <li>
      <Link href="/" className="  text-blue-700 text-4xl ">
      {/* <Image src={logo} alt="Logo" width={100} height={100}/> */}
      Okadoc
      </Link>
      </li>
      <li>
      <Link href="/" className=" flex space-x-2 ">
      <LuMapPin size={24}/>
      United Arab Emirates
      </Link>
      </li>

      <li>
        <div className='flex border-2 space-x-2 w-[500px] rounded-md '>
        <LuMapPin size={24}/>
        <input
          type="text"
          placeholder="Find by speciality,doctor,clinic or hospital"
          className="p-2  text-black placeholder-gray-400 w-[400px]"
        />
        <div className='bg-green-300 p-2 rounded-md '>
        <GrNext color='white' size={24}/>
        </div>
        

        </div>
      </li>
      <li>
        <div className='flex items-center'>
            UAE - EN
            <FaAngleDown />

        </div>
      </li>

      </ul>
        
      </nav>
    );
  };
  
  export default Navbar;