"use client";
import PhoneInput from "react-phone-input-2";
import CustomButton from "../../components/customButton/CustomBotton";
import VerificationInput from "react-verification-input";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div>
        {/* Booking Form Section */}
        <div className="md:w-[30vw] w-full mx-auto">
          <div className="sticky top-5 bg-white rounded-md flex flex-col items-center md:gap-12 gap-6 md:p-6 p-3 md:h-[68vh]">
            <div className="items-center flex gap-4 flex-col">
              <h1 className="text-xl font-semibold">Book an appointment</h1>
              <p className="text-lg">Enter Your Phone number to continue</p>
            </div>
            <div className="w-full max-w-xs mx-auto">
              <span className="text-sm">Phone Number</span>
              <PhoneInput
                country={"us"}
                //   value={value}
                //   onChange={setValue}
                inputClass="md:w-full p-2 border rounded"
                containerClass="relative"
                dropdownClass="bg-white border border-gray-300 rounded"
                dropdownStyle={{ zIndex: 9999 }}
                inputStyle={{ width: "100%" }}
              />
            </div>
            <div className="flex mt-6 justify-center">
              <Link href="/en/pages/apointment/otp" className="bg-blue-500 text-white p-3">Book Now</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
