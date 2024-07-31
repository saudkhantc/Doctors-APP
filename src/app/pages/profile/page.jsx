import Image from 'next/image';
import React from 'react'
import img1 from "../../../assets/images/eyespecialdoc02.jpg";
import img2 from "../../../assets/images/verify1.PNG";
import img3 from "../../../assets/images/verify2.PNG";
import img4 from "../../../assets/images/verify3.PNG";
import img5 from "../../../assets/images/lisence.PNG";
import img6 from "../../../assets/images/map.PNG";
import { LuMapPin } from "react-icons/lu";
import CustomButton from '@/app/components/customButton/CustomBotton';


const data = [
    {
      id: 1,
      name: 'Hospital / clinic name 1',
      addressLine1: 'Address Line 1 - 1',
      addressLine2: 'Address Line 2 - 1',
      city: 'City 1',
      tel: 'Tel: 1',
      imgSrc: img6
    },
    {
      id: 1,
      name: 'Hospital / clinic name 1',
      addressLine1: 'Address Line 1 - 1',
      addressLine2: 'Address Line 2 - 1',
      city: 'City 1',
      tel: 'Tel: 1',
      imgSrc: img6
    },
    {
      id: 1,
      name: 'Hospital / clinic name 1',
      addressLine1: 'Address Line 1 - 1',
      addressLine2: 'Address Line 2 - 1',
      city: 'City 1',
      tel: 'Tel: 1',
      imgSrc: img6
    },

];

export default function Profile() {
    return (
        <>
            <div className='main bg-white flex md:flex-row flex-col '>
                <div className='left w-[60vw] flex flex-col p-6 border-r-2 border-gray-300'>
                    <div className='border border-black p-6 flex gap-5 items-center justify-between'>
                        <div className='flex gap-5'>
                            <div>
                                <Image src={img1} alt='profile' width={150} />
                            </div>

                            <div className='flex flex-col gap-3'>
                                <div className='flex gap-2'>
                                    <Image src={img2} />
                                    <Image src={img3} />
                                    <Image src={img4} />
                                </div>



                                <div>
                                    <h1 className='text-xl  font-semibold'>Dr.Fadi Hamwi</h1>
                                    <p className='text-gray-500'>Consultant Internal Medicine</p>
                                    <p className='text-gray-500'>21 years of experience</p>
                                </div>
                            </div>

                        </div>

                        <div className='flex flex-col gap-2'>
                            <h1 className='text-2xl font-bold'>Specialist at:</h1>
                            <span>Child nutrition & Immunity boosting</span>
                            <span>Weight loss programs</span>
                            <span>Weight gain programs</span>
                            <span>Sport nutrition programs</span>

                        </div>

                    </div>

                    <div className='flex flex-col gap-3  border-gray-300 border-b-2 p-2'>
                        <span className='text-lg font-semibold'>About</span>
                        <p className='text-gray-700'>Dr. Fadi Hamwi, Consultant Family Medicine. He is certified by the American Board of Internal Medicine and Genriatic Medicine with over 21 years of experience at reputed hospitals and medical centers in the United States and the United Arab Emirates </p>
                    </div>

                    <div className='flex flex-col gap-3  border-gray-300 border-b-2 p-4'>
                        <span className='text-xl p-2 border border-black w-[500px]'>Education & Academic Certificates</span>
                        <ul className='list-disc'>
                            <li className='text-gray-700'>Diploma of clinical nutrition (Uxbridge academy)</li>
                            <li className='text-gray-700'>Professional Doctorate of physical theraphy (DPT) Cairo university 2017</li>
                            <li className='text-gray-700'>Deploma of nutritional theraphy (MOH) 2011</li>
                        </ul>

                    </div>
                    <div className='flex flex-col gap-3  border-gray-300 border-b-2 p-4'>
                        <span className='text-2xl font-semibold'>Practical Experiences</span>
                        <ul className='list-disc'>
                            <li className='text-gray-700'>EL QASR EL AINY hospital</li>
                            <li className='text-gray-700'>EL ARICH military hospital </li>
                            <li className='text-gray-700'>EL Sherif nutritional private clinic </li>
                            <li className='text-gray-700'>Meet Ghamr hospital </li>
                        </ul>

                    </div>

                    <div className='flex flex-col gap-6 border-gray-300 border-b-2 p-2 '>
                        <span className='font-semibold'>Registration & License</span>
                        <div className='flex items-center gap-2'>
                            <div>
                                <Image src={img5} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='font-semibold'>DHA License</span>
                                <span>00243190-002</span>

                            </div>

                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <div>
                            <h1 className='font-semibold'>Languages</h1>
                        </div>
                        <div className='flex gap-3'>
                            <span className='border border-gray-300 p-1'>Arabic</span>
                            <span className='border border-gray-300 p-1'>English</span>
                        </div>

                    </div>

                </div>

                <div className='right w-[40vw] p-6'>
                <div className='bg-blue-200 p-1'>
                    <h1 className='text-white font-semibold text-lg'>I am working in:</h1>
                </div>

                <div className='flex flex-col gap-10 p-2 '>
      {data.map(item => (
        <div key={item.id} className='left flex'>
          <div className='flex flex-col'>
            <div className='flex gap-4 items-center'>
              <LuMapPin size={20} />
              <span className='font-semibold text-gray-500'>Address</span>
            </div>
            <div className='border-r border-black p-2'>
              <div className='border border-black flex flex-col items-center justify-center w-[200px] p-4'>
                <p className='text-sm'>{item.name}</p>
                <p className='text-sm'>{item.addressLine1}</p>
                <p className='text-sm'>{item.addressLine2}</p>
                <p className='text-sm'>{item.city}</p>
                <p className='text-sm'>{item.tel}</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col p-2 gap-6'>
            <div className='flex items-center gap-6'>
              <div className='flex flex-col gap-4'>
                <div className='flex flex-col'>
                  <span className='text-sm font-semibold'>Mon - Sat</span>
                  <span className='text-sm'>10:00 AM - 2:00 PM</span>
                  <span className='text-sm'>4:00 AM - 9:00 PM</span>
                </div>
                <div className='flex flex-col'>
                  <span className='text-sm font-semibold'>Sun</span>
                  <span className='text-sm'>10:00 AM - 2:00 PM</span>
                  <span className='text-sm'>4:00 AM - 9:00 PM</span>
                </div>
              </div>
              <div>
                <Image src={item.imgSrc} />
              </div>
            </div>

            <div>
              <CustomButton buttonText='Book an appointment' />
            </div>
          </div>
        </div>
      ))}
    </div>

                </div>

            </div>
        </>
    )
}
