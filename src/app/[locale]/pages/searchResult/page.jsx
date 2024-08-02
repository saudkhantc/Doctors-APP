"use client"
import Image from "next/image";
import doctor3 from "../../../../assets/images/doctor3.png";
import Navbar from "../../components/Navbar/Navbar";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useState } from "react";
import CustomButton from "../../components/customButton/CustomBotton";
import VerificationInput from "react-verification-input";

const doctors = [
  {
    name: 'Dr. Ramesh Pratap',
    specialty: 'Dermatologist',
    services: [
      'Child nutrition & Immunity boosting',
      'Weight loss programs',
      'Weight gain programs',
      'Sport nutrition programs'
    ]
  },
  {
    name: 'Dr. Ramesh Pratap',
    specialty: 'Dermatologist',
    services: [
      'Child nutrition & Immunity boosting',
      'Weight loss programs',
      'Weight gain programs',
      'Sport nutrition programs'
    ]
  },
  {
    name: 'Dr. Ramesh Pratap',
    specialty: 'Dermatologist',
    services: [
      'Child nutrition & Immunity boosting',
      'Weight loss programs',
      'Weight gain programs',
      'Sport nutrition programs'
    ]
  },
  {
    name: 'Dr. Ramesh Pratap',
    specialty: 'Dermatologist',
    services: [
      'Child nutrition & Immunity boosting',
      'Weight loss programs',
      'Weight gain programs',
      'Sport nutrition programs'
    ]
  },
  {
    name: 'Dr. Ramesh Pratap',
    specialty: 'Dermatologist',
    services: [
      'Child nutrition & Immunity boosting',
      'Weight loss programs',
      'Weight gain programs',
      'Sport nutrition programs'
    ]
  },
  // Add more doctor objects here
];

const SearchResult = () => {
  const [value, setValue] = useState('');
  const [steps, setSteps] = useState(1)

  const Card = ({ doctor }) => (
    <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex items-center p-4">
        <div className="flex flex-col">
          <div>
            <Image
              src={doctor3}
              alt={`Dr. ${doctor.name}`}
              className="w-16 h-16 rounded-full object-cover"
              width={64}
              height={64}
            />
          </div>
          <div>
            <a href="#" className="text-xl text-blue-700 mt-5">view all</a>
          </div>
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-semibold text-gray-800">{doctor.name}</h2>
          <p className="text-gray-600">{doctor.specialty}</p>
        </div>
      </div>
      <div className="border-b border-gray-400"></div>
      <div className="p-4">
        <h4 className="font-bold text-xl">Specialist At:</h4>
        <ul className="mt-2 space-y-1">
          {doctor.services.map((service, index) => (
            <li key={index} className="bg-gray-100 px-3 py-1 rounded-full inline-block">
              {service}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4">
        <a
          href="#"
          className="block w-full text-center bg-[#049AEE] text-white py-2 rounded-md hover:bg-blue-600"
        >
          Book an appointment
        </a>
      </div>
    </div>
  )

  return (
    <>
      <Navbar /> 
      <div className="flex md:flex-row flex-col ms:p-10 p-5 md:gap-6 gap-3">
        <div className="w-[70vw] flex flex-wrap md:gap-8 gap-4 items-center justify-center">
          {doctors.map((doctor, index) => (
            <Card key={index} doctor={doctor} />
          ))}
        </div>
        <div className="md:w-[30vw] w-[70vw]">
         {
          steps === 1 && (
            <div className="sticky top-5 bg-white rounded-md flex flex-col items-center md:gap-12 gap-6 md:p-6 p-3 md:h-[68vh]">
            <div className="items-center flex gap-4 flex-col">
              <h1 className="text-xl font-semibold">Book an appointment</h1>
              <p className="text-lg">Enter Your Phone number to continue</p>
            </div>
            <div className="w-full max-w-xs mx-auto">
              <span className="text-sm">Phone Number</span>
             
              <PhoneInput
                country={'us'}
                value={value}
                onChange={setValue}
                inputClass="md:w-full  p-2 border rounded"
                containerClass="relative"
                dropdownClass="bg-white border border-gray-300 rounded"
                dropdownStyle={{ zIndex: 9999 }} 
                inputStyle={{width:"100%"}}
              />
              </div>
            <div className="flex mt-6 justify-center">
              <CustomButton buttonText="Book Now" onClick={()=> setSteps(2)}   />
            </div>
          </div>
          )
         }
         {
          steps === 2 && (
            <div className="sticky top-5 bg-white rounded-md flex flex-col items-center gap-12 p-6 h-[68vh]">
            <div className="items-center flex gap-4 flex-col">
              <h1 className="text-xl font-semibold">Verify your phone number</h1>
              <p className="text-lg text-center">Enter the code that we have send to the number</p>
            </div>
            <div className="w-full max-w-xs mx-auto flex flex-col">
              <span className="text-sm">OTP</span>
            {/* <input type="text" className="border border-gray-400  rounded-md h-12 outline-none" /> */}
            <VerificationInput
             length={4}
  classNames={{
    container: "container",
    character: "character",
    characterInactive: "character--inactive",
    characterSelected: "character--selected",
    characterFilled: "character--filled",
  }}
/>
            </div>
            <div className="flex mt-6 justify-center flex-col gap-5">
              <CustomButton buttonText="Verify"  onClick={()=> setSteps(3)} />
              <p className="text-center text-sm">Please wait 55 seconds to resed a new code</p>
            </div>
          </div>
          )
         }
         {
          steps === 3 && (
            <div className="sticky top-5 bg-white rounded-md flex flex-col items-center gap-4 md:p-10 p-2 md:h-[68vh]">
            <div className="flex gap-2 ">
              <input type="text" placeholder="First Name" className="border border-gray-400 outline-none md:w-44 w-full h-10 rounded-md p-2"/>
              <input type="text" placeholder="Last  Name" className="border border-gray-400 outline-none md:w-44 w-full h-10 rounded-md p-2" />
              {/* <input type="text" placeholder="Email"  className="border border-gray-400 outline-none"/> */}
            </div>
            <div>
              <input type="text" placeholder="Email" className="border border-gray-400 outline-none md:w-[350px] w-full h-10 rounded-md p-2" />
            </div>
            <div>
              <CustomButton buttonText="Sumbit " width="200px"/>
            </div>
          </div>
          )
         }
        </div>
      </div>
    </>
  );
};

export default SearchResult;


