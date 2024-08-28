"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setShowMessage(true);

    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="bg-white h-screen flex justify-center items-center">
        <h1 className="md:text-9xl text-4xl border-2 p-5 text-gray-400">
          Thank You
        </h1>
      </div>

      {/* Popup message */}
      {showMessage && (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
          Your appointment is booked successfully!
        </div>
      )}
    </>
  );
};

export default Page;
