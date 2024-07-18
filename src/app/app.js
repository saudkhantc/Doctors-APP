"use client";
import { useEffect } from "react";
// import AOS from 'aos'; // Make sure to import AOS if you are using it
// import 'aos/dist/aos.css'; // Import the AOS CSS file
import Doctors from "./pages/doctors/Doctors";
import Home from "./pages/home/Home";

export default function App() {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1200,
  //   });
  // }, []);

  return (
    <main className="min-h-screen">
      <Home />
      {/* <Doctors /> */}
    </main>
  );
}
