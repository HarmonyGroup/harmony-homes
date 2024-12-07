import React from "react";
import Image from "next/image";
import background from "@/assets/hero-bg.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    // <div className="relative min-h-[100vh] w-full bg-darkGreen flex flex-col items-center justify-center overflow-x-hidden">
    //   <Image src={background} layout="fill" objectFit="cover" />
    //   <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-[#3C0C64]/65"></div>
    //   <h1 className="text-white text-7xl text-center font-bold md:leading-[60px] z-50 px-5 md:px-0">
    //     Find your <span className="text-[#F9DF4C]">dream</span> home.
    //   </h1>
    //   <p className="relative text-white text-xl text-center mt-10">
    //     Whether you're buying, selling, or renting, <br /> we turn your real
    //     estate goals into reality with ease. <br /> Discover
    //     stunning properties, tailored for you.
    //   </p>
    //   <form className="flex items-center justify-center relative w-full">
    //     <input
    //       type="text"
    //       placeholder="I'm looking for..."
    //       className="w-[45%] bg-white rounded-full px-6 py-5 mt-10 outline-none placeholder:text-[#4B0D70]"
    //     />
    //   </form>
    // </div>

    <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-[#3C0C64]/75 sm:bg-[#4B0D70]/0 sm:bg-gradient-to-r sm:from-[#3C0C64]/95 sm:to-[#3C0C64]/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 flex h-[90vh] lg:h-[90vh] items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Let us find your
            <strong className="block font-extrabold text-yellow-400">
              {" "}
              Forever Home.{" "}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            Whether you&apos;re buying, selling, or renting, we turn your real estate
            goals into reality with ease.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              href="/listings"
              className="block w-full rounded bg-yellow-500 px-12 py-3 text-sm text-white font-bold shadow focus:outline-none sm:w-auto"
            >
              Check Listings
            </Link>

            <Link
              target="_blank" href={"https://wa.me/+2348182012345/"}
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-yellow-600 shadow focus:outline-none focus:ring sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
