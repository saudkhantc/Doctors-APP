import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import PopularSpecial from "./components/PopularSpecial/PopularSpecial";

export default function Home() {
  return (
    <main className="min-h-screen  ">
      
    <Navbar />
    <PopularSpecial />
    </main>
  );
}
