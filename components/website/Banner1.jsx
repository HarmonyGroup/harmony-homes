import React from "react";
import Image from "next/image";
import House from "@/assets/asset-5.png";
import BannerBG from "@/assets/asset-6.jpg";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const Banner1 = () => {
  return (
    <div className="relative bg-[#4B0D70]/5 overflow-hidden">
      <Image
        src={BannerBG}
        layout="fill"
        objectFit="cover"
        className="blur-sm"
        alt="harmony homes"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#4B0D70]/95 to-[#3C0C64]/40"></div>
      <div className="w-full max-w-7xl mx-auto px-4 py-16 relative">
        {/* <h1 className="text-center text-white font-bold text-2xl lg:text-4xl">
          Why Choose us?
        </h1>
        <p className="text-white text-center text-sm lg:text-base font-medium mt-7">
          Whether you&apos;re looking for the buzz of the city, the tranquility
          of the suburbs, <br className="hidden lg:block" /> or the charm of a
          coastal retreat, we&apos;ve got you covered.
        </p> */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 md:gap-16">
          <div className="col-span-1">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-[3.5px] h-4 bg-white"></div>
                <h1 className="text-white text-xl font-bold">
                  Beautiful Scenery
                </h1>
              </div>
              <p className="text-white text-sm font-medium mt-4">
                Find a place where beauty meets comfort, and let your
                surroundings be as extraordinary as your home.
              </p>
              {/* <div className="mt-7">
                <Link
                  href={"/"}
                  className="flex items-center gap-3 text-white text-sm lg:text-sm font-semibold"
                >
                  See Properties
                  <GoArrowUpRight size={16} className="mt-1" />
                </Link>
              </div> */}
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-[3px] h-4 bg-white"></div>
                <h1 className="text-white text-xl font-bold">
                  Adequate Security
                </h1>
              </div>
              <p className="text-white text-sm font-medium mt-4">
                Live confidently, knowing your home is a sanctuary where
                security meets comfort.
              </p>
              {/* <div className="mt-7">
                <Link
                  href={"/"}
                  className="flex items-center gap-3 text-white text-sm font-semibold"
                >
                  See Properties
                  <GoArrowUpRight size={16} className="mt-1" />
                </Link>
              </div> */}
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-[3.5px] h-4 bg-white"></div>
                <h1 className="text-white text-xl font-bold">
                  Exceptional Designs
                </h1>
              </div>
              <p className="text-white text-sm font-medium mt-4">
                Discover homes that are more than just spaces—they&apos;re
                masterpieces of craftsmanship.
              </p>
              {/* <div className="mt-4">
                <Link
                  href={"/"}
                  className="flex items-center gap-3 text-white text-sm font-semibold"
                >
                  See Properties
                  <GoArrowUpRight size={16} className="mt-1" />
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
