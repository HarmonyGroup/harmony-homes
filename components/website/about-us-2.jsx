import React from "react";
import Link from "next/link";
import Image from "next/image";
import ImageBG from "@/assets/asset-4.jpg";
import { GoArrowUpRight } from "react-icons/go";
import { BsDashLg } from "react-icons/bs";

const AboutUs2 = () => {
  return (
    // <div className="">
    //   <div className="w-full max-w-7xl mx-auto px-4 pb-24 lg:pb-32">
    //     <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
    //       <div className="col-span-1 flex items-center justify-start">
    //         <div className="relative h-[400px] lg:h-[500px] w-[500px] rounded-lg overflow-hidden">
    //           <Image
    //             src={ImageBG}
    //             alt="harmony homes"
    //             layout="fill"
    //             objectFit="contain"
    //           />
    //         </div>
    //       </div>
    //       <div className="col-span-1 -order-1 lg:order-1">
    //         <div className="flex flex-col float-end justify-end">
    //           <p className="text-[13px] lg:text-base text-gray-400 font-bold">
    //             Tailored Solutions for Every Client
    //           </p>
    //           <h1 className="text-[#4B0D70] text-3xl lg:text-4xl font-bold mt-4">
    //             Our <span className="text-yellow-500">experienced</span> agents{" "}
    //             <br className="hidden lg:block" /> are here to provide{" "}
    //             <br className="hidden lg:block" /> professional advice
    //           </h1>
    //           <p className="text-black text-sm lg:text-lg mt-6 lg:mt-9">
    //             No two clients are the same, and neither are their real estate
    //             goals. Whether you&apos;re a first-time buyer, a seasoned
    //             investor, or looking to downsize, we create a strategy that
    //             works for you.
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
    //     </div>
    //   </div>
    // </div>
    <section className="bg-[#3C0C64]/5 border-t-4 border-gray-200/15">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-24">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-14">
          <div className="md:order-1 -order-1">
            <div className="max-w-lg md:max-w-none">
            <div className="flex items-center gap-1.5">
                <BsDashLg size={22} className="text-gray-400" />
                <p className="text-xs text-gray-700 ">
                  Tailored Solutions for Every Client
                </p>
              </div>

              <h2 className="text-2xl font-bold text-[#3C0C64] sm:text-3xl mt-5">
                Our <span className="text-yellow-500">experienced</span> agents{" "}
                <br className="hidden lg:block" /> are here to provide{" "}
                <br className="hidden lg:block" /> professional advice
              </h2>

              <p className="mt-4 text-gray-700 text-sm md:text-base">
                Whether you&apos;re stepping into homeownership for the first
                time, building wealth as a savvy investor, or simplifying life
                by downsizing, we&apos;ve got you covered. Let&apos;s turn
                your real estate vision into reality—because your dream home
                deserves a dream team!
              </p>

              <div className="mt-8 inline-flex">
                <Link
                  target="_blank" href={"https://wa.me/+2348182012345/"}
                  className="flex items-center gap-2 text-white text-sm font-medium bg-[#3C0C64] rounded-full px-6 py-3"
                >
                  Learn More
                  {/* <GoArrowUpRight size={19} /> */}
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src="https://plus.unsplash.com/premium_photo-1674567529888-df49cb113b6f?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs2;
