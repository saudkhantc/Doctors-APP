'use client';
import React from "react";
import Image from "next/image";
import specialities01 from "@/assets/images/ps1.PNG";
import specialities02 from "@/assets/images/ps2.PNG";
import specialities03 from "@/assets/images/ps3.PNG";
import specialities04 from "@/assets/images/ps4.PNG";
import specialities05 from "@/assets/images/ps5.PNG";
import specialities06 from "@/assets/images/ps6.PNG";
import specialities07 from "@/assets/images/ps7.PNG";
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { MdArrowForwardIos } from "react-icons/md";
import { useTranslations } from 'next-intl';

const PopularSpecial = () => {
  const t = useTranslations('Home.Hero');
  const router = useRouter();
  const params= useParams()
  

  const handleClick = () => {
    const locale = params.locale; 
    router.push(`/${locale}/pages/searchResult`); 
  };
  return (
    <>
      <div className="bg-white ">
        <div className="w-[90%] mx-auto  p-2">
          <div>
            <h2 className="font-bold md:text-4xl text-2xl md:text-start text-center md:ps-10">{t('Popular')}</h2>
          </div>
          <div className="grid grid-cols-2  md:gap-0 gap-4  md:grid-cols-3 lg:grid-cols-6 md:pt-20  ">
          <button
      onClick={handleClick}
      className="flex flex-col md:mt-0 mt-4 justify-center items-center shadow-xl p-3 rounded-full h-[130px] w-[130px] md:h-[150px] md:w-[150px] mx-auto bg-transparent border-none cursor-pointer">
      <Image src={specialities01} className="rounded-full" />
      <p className="text-center pt-3 text-gray-500">{t('Uro')}</p>
    </button>
            <div className="flex flex-col md:mt-0 mt-4 justify-center items-center shadow-xl p-3 rounded-full h-[120px] w-[120px] md:h-[150px] md:w-[150px] mx-auto">
              <Image src={specialities02} className="rounded-full" />
              <p className="text-center pt-3 text-gray-500"> {t('Neuro')}</p>
            </div>
            <div className="flex flex-col  md:mt-0 mt-4  justify-center items-center shadow-xl p-3 rounded-full h-[120px] w-[120px] md:h-[150px] md:w-[150px] mx-auto">
              <Image src={specialities03} className="rounded-full" />
              <p className="text-center pt-3 text-gray-500">{t('Ortho')}</p>
            </div>
            <div className="flex flex-col  md:mt-0 mt-4  justify-center items-center shadow-xl p-3 rounded-full h-[120px] w-[120px] md:h-[150px] md:w-[150px] mx-auto">
              <Image src={specialities04} className="rounded-full" />
              <p className="text-center pt-3 text-gray-500">{t('Cardio')}</p>
            </div>
            <div className="flex flex-col  md:mt-0 mt-4  justify-center items-center shadow-xl p-3 rounded-full h-[120px] w-[120px] md:h-[150px] md:w-[150px] mx-auto">
              <Image src={specialities05} className="rounded-full" />
              <p className="text-center pt-3 text-gray-500">{t('Dent')}</p>
            </div>
            <div className="flex flex-col  md:mt-0 mt-4  justify-center items-center shadow-xl p-3 rounded-full h-[120px] w-[120px] md:h-[150px] md:w-[150px] mx-auto">
              <Image src={specialities06} className="rounded-full " />
              <p className="text-center pt-3 text-gray-500">{t('Gyno')}</p>
            </div>
            <div className="flex flex-col  md:mt-0 mt-4  justify-center items-center shadow-xl p-3 rounded-full h-[120px] w-[120px] md:h-[150px] md:w-[150px] mx-auto">
              <Image src={specialities07} className="rounded-full " />
              <p className="text-center pt-3 text-gray-500">{t('Gas')}</p>
            </div>
            <div className="flex flex-col  md:mt-0 mt-4  justify-center items-center shadow-xl p-3 rounded-full h-[120px] w-[120px] md:h-[150px] md:w-[150px] mx-auto">
              <Image src={specialities06} className="rounded-full " />
              <p className="text-center pt-3 text-gray-500">{t('Gyno')}</p>
            </div>
            <div className="flex flex-col  md:mt-0 mt-4  justify-center items-center shadow-xl p-3 rounded-full h-[120px] w-[120px] md:h-[150px] md:w-[150px] mx-auto">
              <Image src={specialities07} className="rounded-full " />
              <p className="text-center pt-3 text-gray-500">{t('Gas')}</p>
            </div>
            
          
          </div>
          <div className="mt-20 flex justify-center">
            <Link href="/">
              <div className="flex items-center gap-4">
                <h2 className="text-3xl">View All</h2>
                <MdArrowForwardIos className="text-2xl" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularSpecial;
