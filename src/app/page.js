import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./LandingPage/LandingPage";
import Okadac from "./components/useokadoc/Okadac";
import PopularSpecial from "./components/PopularSpecial/PopularSpecial";

export default function Home() {
  return (
    <main className="min-h-screen  ">
      
    <Navbar />
  <LandingPage/>
  <Okadac/>
    <PopularSpecial />
    </main>
  );
}
