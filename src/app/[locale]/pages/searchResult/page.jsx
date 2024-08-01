import Image from "next/image";
import doctor3 from "../../../../assets/images/doctor3.png";
import Navbar from "../../components/Navbar/Navbar";
const searchResult = () => {
  return (
    <>
       <Navbar /> 
       <div className="flex ">
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden md:mt-10 mt-12 mb-10">
      <div className="flex items-center p-4">
        <div className="flex flex-col "> 
          <div>
            <Image
              src={doctor3}
              alt="Dr. Ramesh Pratap"
              className="w-16 h-16 rounded-full object-cover"
              width={64}
              height={64}
            />
          </div>
          <div>
            <a href="" className="text-xl text-blue-700 mt-5">view all</a>
          </div>
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Dr. Ramesh Pratap
          </h2>
          <p className="text-gray-600">Dermatologist</p>
        </div>
      </div>
      <div className="border-b border-gray-400 "></div>
      <div className="p-4">
        <h4 className="font-bold text-3xl">Specialist At:</h4>
        <ul className="mt-2 space-y-1">
          <li className="bg-gray-100 px-3 py-1 rounded-full inline-block">
            Child nutrition & Immunity boosting
          </li>
          <li className="bg-gray-100 px-3 py-1 rounded-full inline-block">
            Weight loss programs
          </li>
          <li className="bg-gray-100 px-3 py-1 rounded-full inline-block">
            Weight gain programs
          </li>
          <li className="bg-gray-100 px-3 py-1 rounded-full inline-block">
            Sport nutrition programs
          </li>
        </ul>
      </div>
      <div className="p-4">
        <a
          href="#"
          className="block w-full text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Book an appointment
        </a>
      </div>
    </div>
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden md:mt-10 mt-12 mb-10">
      <div className="flex items-center p-4">
        <div className="flex flex-col "> 
          <div>
            <Image
              src={doctor3}
              alt="Dr. Ramesh Pratap"
              className="w-16 h-16 rounded-full object-cover"
              width={64}
              height={64}
            />
          </div>
          <div>
            <a href="" className="text-xl text-blue-700 mt-5">view all</a>
          </div>
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Dr. Ramesh Pratap
          </h2>
          <p className="text-gray-600">Dermatologist</p>
        </div>
      </div>
      <div className="border-b border-gray-400 "></div>
      <div className="p-4">
        <h4 className="font-bold text-3xl">Specialist At:</h4>
        <ul className="mt-2 space-y-1">
          <li className="bg-gray-100 px-3 py-1 rounded-full inline-block">
            Child nutrition & Immunity boosting
          </li>
          <li className="bg-gray-100 px-3 py-1 rounded-full inline-block">
            Weight loss programs
          </li>
          <li className="bg-gray-100 px-3 py-1 rounded-full inline-block">
            Weight gain programs
          </li>
          <li className="bg-gray-100 px-3 py-1 rounded-full inline-block">
            Sport nutrition programs
          </li>
        </ul>
      </div>
      <div className="p-4">
        <a
          href="#"
          className="block w-full text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Book an appointment
        </a>
      </div>
    </div>
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden md:mt-10 mt-12 mb-10">
      <div className="flex items-center p-4">
        <div className="flex flex-col "> 
          <div>
            <Image
              src={doctor3}
              alt="Dr. Ramesh Pratap"
              className="w-16 h-16 rounded-full object-cover"
              width={64}
              height={64}
            />
          </div>
          <div>
            <a href="" className="text-xl text-blue-700 mt-5">view all</a>
          </div>
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Dr. Ramesh Pratap
          </h2>
          <p className="text-gray-600">Dermatologist</p>
        </div>
      </div>
      <div className="border-b border-gray-400 "></div>
      <div className="p-4">
        <h4 className="font-bold text-3xl">Specialist At:</h4>
        <ul className="mt-2 space-y-1">
          <li className="bg-gray-100 px-3 py-1 rounded-full inline-block">
            Child nutrition & Immunity boosting
          </li>
          <li className="bg-gray-100 px-3 py-1 rounded-full inline-block">
            Weight loss programs
          </li>
          <li className="bg-gray-100 px-3 py-1 rounded-full inline-block">
            Weight gain programs
          </li>
          <li className="bg-gray-100 px-3 py-1 rounded-full inline-block">
            Sport nutrition programs
          </li>
        </ul>
      </div>
      <div className="p-4">
        <a
          href="#"
          className="block w-full text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Book an appointment
        </a>
      </div>
    </div>
    </div>  
    </>
  );
};

export default searchResult;