import Image from "next/image";
import Navbar from "../../components/Navbar/Navbar";
import LandingPage from "../../components/LandingPage/LandingPage";
import Okadac from "../../components/useokadoc/Okadac";
import PopularSpecial from "../../components/PopularSpecial/PopularSpecial";
import PartnerOkadoc from "../../components/partnerOkadoc/PartnerOkadoc";
import TrustedHealthcare from "../../components/trustedHealthcare/TrustedHealthcare";
import Footer from "../../components/footer/Footer";
import FindDoctor from "../../components/findDoctor/FindDoctor";
import BetterHealth from "@/app/components/betterHealth/BetterHealth";
import WhoWeAre from "@/app/components/whoWeAre/WhoWeAre";
import MidBanner from "@/app/components/midBanner/MidBanner";
import OurDoctors from "@/app/components/ourdoctors/OurDoctors";
import DoctorProfile from "@/app/components/doctorsprofile/DoctorProfile";
import Services from "@/app/components/services/Services";
import CreateAccount from "@/app/components/createAccount/CreateAccount";
import MidBanner2 from "@/app/components/midBanner2/MidBanner2";
import CollectLead from "@/app/components/collectLead/CollectLead";



export default function Home() {
  return (
    <main className="min-h-screen  ">   
    <Navbar />
    <BetterHealth />
    <PopularSpecial /> 
    <WhoWeAre />
    <MidBanner2 />
    <CreateAccount />
    <CollectLead />
    <MidBanner /> 
    <Footer />
   





    {/* <FindDoctor/> */}
  {/* <LandingPage/>
  <PopularSpecial />
  <Okadac/>
  <PartnerOkadoc />
  <TrustedHealthcare />
  <Footer /> */}
   
    </main>
  );
}
