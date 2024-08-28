"use client";
import CustomButton from "@/app/[locale]/components/customButton/CustomBotton";
import { useRouter } from "next/navigation";
import React from "react";

function Page() {
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/en/pages/apointment/thanks");
  };

  return (
    <div className="sticky top-5 bg-white rounded-md flex flex-col items-center gap-4 md:p-10 p-2 md:h-[68vh]">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="First Name"
          className="border border-gray-400 outline-none md:w-44 w-full h-10 rounded-md p-2"
        />
        <input
          type="text"
          placeholder="Last  Name"
          className="border border-gray-400 outline-none md:w-44 w-full h-10 rounded-md p-2"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Email"
          className="border border-gray-400 outline-none md:w-[350px] w-full h-10 rounded-md p-2"
        />
      </div>
      <div>
        <CustomButton
          buttonText="Submit"
          width="200px"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default Page;
