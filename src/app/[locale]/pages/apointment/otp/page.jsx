"use client"
import CustomButton from "@/app/[locale]/components/customButton/CustomBotton";
import Link from "next/link";
import VerificationInput from "react-verification-input";

function Page() {
  return (
    <div className="sticky top-5 bg-white rounded-md flex flex-col items-center gap-12 p-6 h-[68vh]">
      <div className="items-center flex gap-4 flex-col">
        <h1 className="text-xl font-semibold">Verify your phone number</h1>
        <p className="text-lg text-center">
          Enter the code that we have sent to the number
        </p>
      </div>
      <div className="w-full max-w-xs mx-auto flex flex-col">
        <span className="text-sm">OTP</span>
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
      <div className="flex mt-6 justify-center  flex-col gap-5">
      <Link href="/en/pages/apointment/detail" className="bg-blue-500 p-3 text-white w-[100px] text-center">Verify</Link>
        <p className="text-center text-sm">
          Please wait 55 seconds to resend a new code
        </p>
      </div>
    </div>
  );
}

export default Page;
