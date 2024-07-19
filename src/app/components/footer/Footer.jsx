import Link from "next/link";
import Image from "next/image";
import logo from "../../../assets/images/appLogo.svg";
import img1 from "../../../assets/images/od-facebook.svg";
import img2 from "../../../assets/images/od-twitter.svg";
import img3 from "../../../assets/images/od-instagram-white.svg";
import img4 from "../../../assets/images/od-linkedin-blue.svg";
import img5 from "../../../assets/images/od-youtube.svg";
import img6 from "../../../assets/images/iso-ias.png";

const Footer = () => {
  return (
    <>
      <div className="mt-10">
        <div className="bg-white border border-t-gray-200 border-b-gray-200 p-8 lg:p-20 ">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="mb-6 lg:mb-0">
                <h2 className="text-5xl text-[#57C0DE] font-semibold">Henaa</h2>
              </div>
              <div className="mb-6 lg:mb-0">
                <h3 className="font-semibold text-2xl mb-6 ">About Henaa</h3>
                <ul>
                  <li className="mb-4">
                    <Link
                      href="/link6"
                      className="text-[#317ACC] hover:underline text-lg"
                    >
                      About
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      href="/link7"
                      className="text-[#317ACC] hover:underline text-lg"
                    >
                      Henaa for Doctors
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      href="/link8"
                      className="text-[#317ACC] hover:underline text-lg"
                    >
                      Press
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      href="/link9"
                      className="text-[#317ACC] hover:underline ftext-lg"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mb-6 lg:mb-0">
                <h3 className="font-semibold text-2xl mb-6">Help</h3>
                <ul>
                  <li className="mb-4">
                    <Link
                      href="/link11"
                      className="text-[#317ACC] hover:underline text-lg"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-14 mb-6">
                  <div className="bg-[#E5F2FA] w-[60px] h-[60px] rounded-full flex items-center justify-center">
                    <Image src={img1} width={14} alt="img" />
                  </div>
                  <div className="bg-[#E5F2FA] w-[60px] h-[60px] rounded-full flex items-center justify-center">
                    <Image src={img2} width={30} alt="img" />
                  </div>
                  <div className="bg-[#E5F2FA] w-[60px] h-[60px] rounded-full flex items-center justify-center">
                    <Image src={img3} width={30} alt="img" />
                  </div>
                  <div className="bg-[#E5F2FA] w-[60px] h-[60px] rounded-full flex items-center justify-center">
                    <Image src={img4} width={30} alt="img" />
                  </div>
                  <div className="bg-[#E5F2FA] w-[60px] h-[60px] rounded-full flex items-center justify-center">
                    <Image src={img5} width={30} alt="img" />
                  </div>
                </div>
                <Image src={img6} width={70} alt="img" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between px-20 py-10">
          <div>
            <span>© Copyright 2024 Henaa Technologies FZ-LLC</span>
          </div>
          <div className="flex md:flex-row flex-col md:gap-10 gap-4">
            <Link
              href="/link11"
              className="text-[#317ACC] hover:underline text-lg"
            >
              Provacy Policy
            </Link>
            <Link
              href="/link11"
              className="text-[#317ACC] hover:underline text-lg"
            >
              Terms of Use
            </Link>
            <Link
              href="/link11"
              className="text-[#317ACC] hover:underline text-lg"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
