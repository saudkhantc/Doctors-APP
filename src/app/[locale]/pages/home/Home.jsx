import Image from "next/image";
import Navbar from "@/app/[locale]/components/Navbar/Navbar";
import LandingPage from "@/app/[locale]/components/LandingPage/LandingPage";
import Okadac from "@/app/[locale]/components/useokadoc/Okadac";
import PopularSpecial from "@/app/[locale]/components/PopularSpecial/PopularSpecial";
import PartnerOkadoc from "@/app/[locale]/components/partnerOkadoc/PartnerOkadoc";
import TrustedHealthcare from "@/app/[locale]/components/trustedHealthcare/TrustedHealthcare";
import Footer from "@/app/[locale]/components/footer/Footer";
import FindDoctor from "@/app/[locale]/components/findDoctor/FindDoctor";
import BetterHealth from "@/app/[locale]/components/betterHealth/BetterHealth";
import WhoWeAre from "@/app/[locale]/components/whoWeAre/WhoWeAre";
import MidBanner from "@/app/[locale]/components/midBanner/MidBanner";
import OurDoctors from "@/app/[locale]/components/ourdoctors/OurDoctors";
import DoctorProfile from "@/app/[locale]/components/doctorsprofile/DoctorProfile";
import Services from "@/app/[locale]/components/services/Services";
import CreateAccount from "@/app/[locale]/components/createAccount/CreateAccount";
import MidBanner2 from "@/app/[locale]/components/midBanner2/MidBanner2";
import CollectLead from "@/app/[locale]/components/collectLead/CollectLead";
import DoctorList from "@/app/[locale]/components/doctorlist/DoctorList";
import FilterDoctors from "@/app/[locale]/components/filterDoctors/FilterDoctors";



export default function Home() {
  return (
    <main className="min-h-screen  ">   
    <Navbar />
    <BetterHealth />
    <PopularSpecial />
  
    
    {/* <DoctorList /> 
    <WhoWeAre /> */}
    {/* <MidBanner2 /> */}
    <CreateAccount />
    <CollectLead />
    <MidBanner /> 
    <Okadac />
    <Footer />
      {/* <FilterDoctors />
    
   





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
