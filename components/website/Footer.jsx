import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import Pattern from "@/assets/pattern.png";
import Image from "next/image";
import Logo from "@/assets/logo--white.png";

const Footer = () => {
  return (
    <div className="relative bg-[#4B0D70]">
      <Image
        src={Pattern}
        layout="fill"
        objectFit="cover"
        className="opacity-15 z-0"
        alt="harmony homes"
      />
      <div className="w-full max-w-7xl mx-auto px-5 pt-[5.6rem] lg:pt-32 pb-10 z-[99999] relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-48">
          <div className="col-span-1">
            <p className="text-white text-lg font-bold">Harmony Homes NG</p>
            <p className="w-full max-w-5xl text-white text-sm leading-loose mt-7">
              Harmony Homes NG is a real estate broker registered in the Federal
              Republic of Nigeria. All property information provided on this
              website is deemed reliable but not guaranteed. Prices,
              availability, and other details are subject to change without
              notice. Please verify all information with the appropriate
              property listing agent.
            </p>
            {/* <p className="text-white text-base mt-4">
              Sign up to our weekly newsletter for market updates
            </p>
            <form className="flex items-center gap-4 mt-7">
              <input
                type="text"
                placeholder="Email address*"
                className="w-full max-w-lg bg-white text-[#4B0D70] text-base font-medium rounded-lg px-6 py-3 placeholder:text-sm outline-none"
              />
              <button
                type="submit"
                className="border border-white rounded-full p-3"
              >
                <GoArrowRight color="white" size={20} />
              </button>
            </form> */}
          </div>
          <div className="col-span-1">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 items-start gap-14 lg:gap-16">
              <div className="col-span-1">
                <h4 className="text-white text-lg font-bold">Services</h4>
                <div className="flex flex-col gap-3 text-white text-sm mt-6">
                  <Link href={"/"}>Residential</Link>
                  <Link href={"/"}>Commercial</Link>
                  <Link href={"/"}>Off Plan</Link>
                  <Link href={"/"}>Holiday Homes</Link>
                  {/* <Link href={"/"}>Property Management</Link> */}
                </div>
              </div>
              {/* <div className="col-span-1">
                <h4 className="text-white text-lg font-bold">About</h4>
                <div className="flex flex-col gap-3 text-white text-sm mt-6">
                  <Link href={"/"}>Mission</Link>
                  <Link href={"/"}>Careers</Link>
                  <Link href={"/"}>Contact</Link>
                  <Link href={"/"}>Latest News</Link>
                </div>
              </div> */}
              <div className="col-span-1">
                <h4 className="text-white text-lg font-bold">Socials</h4>
                <div className="flex flex-col gap-3 text-white text-sm mt-6">
                  <Link target="_blank" href={"https://www.instagram.com/harmonyhomesng/"}>Instagram</Link>
                  <Link target="_blank" href={"https://web.facebook.com/Harmonyhomesng/"}>Facebook</Link>
                  <Link target="_blank" href={"https://www.tiktok.com/harmonygroupng"}>TikTok</Link>
                  <Link target="_blank" href={"https://wa.me/+2348182012345/"}>WhatsApp</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-[0.3px] border-white/35 mt-14 lg:mt-16">
          <p className="text-white text-center text-sm mt-8 lg:mt-10">copyright &copy; Harmony Homes NG</p>
        </div>
        {/* <div className="mt-10">
          <div className="lg:flex items-center gap-2 text-white hidden">
            <Link href={"/"}>Complaints Procedure</Link>|
            <Link href={"/"}>Terms & Conditions</Link>|
            <Link href={"/"}>Privacy & Cookies</Link>
          </div>
          <p className="text-white mt-1">Copyright&copy;Harmony Homes NG</p>
          <p className="w-full max-w-5xl text-white/60 text-sm mt-7">
            Harmony Homes NG is a real estate broker registered in the Federal
            Republic of Nigeria. All property information provided on this
            website is deemed reliable but not guaranteed. Prices, availability,
            and other details are subject to change without notice. Please
            verify all information with the appropriate property listing agent.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
