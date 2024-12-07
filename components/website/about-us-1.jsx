import React from "react";
import Link from "next/link";
import Image from "next/image";
import ImageBG from "@/assets/asset-3.jpg";
import Ornament1 from "@/assets/ornament-1.png";
import Ornament2 from "@/assets/ornament-2.png";
import { GoArrowUpRight } from "react-icons/go";
import { BsDashLg } from "react-icons/bs";

const AboutUs1 = () => {
  return (
    // <div className="relative">
    //   <div className="w-full max-w-7xl mx-auto px-4 pt-24 pb-[4rem] lg:pt-32 lg:pb-32">
    //     <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
    //       <div className="col-span-1">
    //         <div>
    //           <p className="text-[13px] lg:text-base text-gray-400 font-bold">
    //             Find your dream home
    //           </p>
    //           <h1 className="text-[#4B0D70] text-3xl lg:text-4xl font-bold mt-4">
    //             Finding your <span className="text-yellow-500">ideal</span> home{" "}
    //             <br className="hidden lg:block" /> should be an easy and{" "}
    //             <br className="hidden lg:block" /> enjoyable experience.
    //           </h1>
    //           <p className="text-black text-sm lg:text-lg mt-6 lg:mt-9">
    //             From exploring listings tailored to your needs to navigating the
    //             closing process, our team is dedicated to making your
    //             home-buying journey as simple and rewarding as possible.
    //           </p>
    //           <div className="flex items-center gap-5 mt-8 lg:mt-9">
    //             <Link
    //               href={"/"}
    //               className="bg-[#4B0D70] text-white text-sm lg:text-base font-semibold border-none rounded-full px-6 py-3"
    //             >
    //               Discover more
    //             </Link>
    //             <Link
    //               href={"/"}
    //               className="bg-white text-sm lg:text-base font-semibold border border-black rounded-full px-6 py-3 hidden lg:block"
    //             >
    //               Speak to the team
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-span-1 flex items-center lg:justify-end -mt-4 lg:mt-0">
    //         <div className="relative h-[400px] lg:h-[500px] w-[500px] rounded-lg overflow-hidden">
    //           <Image
    //             src={ImageBG}
    //             alt="harmony homes"
    //             layout="fill"
    //             objectFit="contain"
    //             className="z-10 rounded-lg overflow-hidden"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-20 md:py-24">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-24">
          <div>
            <div className="max-w-lg md:max-w-none">
              <div className="flex items-center gap-1.5">
                <BsDashLg size={22} className="text-gray-400" />
                <p className="text-xs text-gray-700 ">Find your dream home</p>
              </div>
              <h2 className="text-2xl font-bold text-[#3C0C64] sm:text-3xl mt-5">
                Finding your <span className="text-yellow-500">ideal</span> home{" "}
                <br className="hidden lg:block" /> should be an easy and{" "}
                <br className="hidden lg:block" /> enjoyable experience.
              </h2>

              <p className="mt-4 text-gray-700 text-sm md:text-base">
                From exploring listings tailored to your needs to navigating the
                closing process, our team is dedicated to making your
                home-buying journey as simple and rewarding as possible.
                We&apos;ll help you unlock doors to your perfect property
              </p>

              <div className="mt-8 inline-flex">
                <Link
                  target="_blank" href={"https://wa.me/+2348182012345/"}
                  className="flex items-center gap-2 text-white text-sm md:text-base font-semibold bg-[#3C0C64] rounded-full px-6 py-2.5 md:py-3"
                >
                  Learn More
                  {/* <GoArrowUpRight size={19} /> */}
                </Link>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <img
              src="https://plus.unsplash.com/premium_photo-1670360414483-64e6d9ba9038?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded"
              alt="Harmony Homes"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs1;
