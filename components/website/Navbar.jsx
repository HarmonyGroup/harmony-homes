import Link from "next/link";
import React from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    // <div className="">
    //   <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 py-6">
    //     <div>
    //       <Link href={"/"}>
    //         <Image src={Logo} alt="logo" height={80} width={80} />
    //       </Link>
    //     </div>
    //     <div className="hidden lg:flex items-center gap-14">
    //       <Link href={"/"} className="text-[#3C0C64] text-base font-semibold">
    //         Buy
    //       </Link>
    //       <Link href={"/"} className="text-[#3C0C64] text-base font-semibold">
    //         Rent
    //       </Link>
    //       <Link href={"/"} className="text-[#3C0C64] text-base font-semibold">
    //         Commercial
    //       </Link>
    //       <Link href={"/"} className="text-[#3C0C64] text-base font-semibold">
    //         Listings
    //       </Link>
    //     </div>
    //     <Link
    //       href={"/"}
    //       className="hidden lg:block bg-[#3C0C64] text-white text-base font-semibold rounded-full px-6 py-4"
    //     >
    //       Speak to Agent
    //     </Link>
    //     <button className="block lg:hidden">
    //       <IoMenu size={24} color="#3C0C64" />
    //     </button>
    //   </div>
    // </div>



    <header className="bg-white">
  <div className="mx-auto max-w-7xl px-4 py-5 md:py-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
      <Link href={"/"}>
             <Image src={Logo} alt="logo" height={80} width={80} className="scale-75" />
           </Link>
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-10 text-sm font-semibold">
            {/* <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Home </a>
            </li> */}

            <li>
              <Link className="text-gray-500 transition hover:text-gray-500/75" href="/listings"> Listings </Link>
            </li>

            <li>
              <Link className="text-gray-500 transition hover:text-gray-500/75" href="/listings"> Buy </Link>
            </li>

            <li>
              <Link className="text-gray-500 transition hover:text-gray-500/75" href="/listings"> Rent </Link>
            </li>

            <li>
              <Link className="text-gray-500 transition hover:text-gray-500/75" href="/listings"> Commercial </Link>
            </li>

            {/* <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blog </a>
            </li> */}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <Link
              className=" bg-[#3C0C64] px-5 py-2.5 text-xs md:text-sm font-semibold text-white shadow rounded-full hidden md:block"
              target="_blank" href={"https://wa.me/+2348182012345/"}
            >
              Contact Agents
            </Link>

            {/* <div className="hidden sm:flex">
              <a
                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                href="#"
              >
                Register
              </a>
            </div> */}
          </div>

          <div className="block md:hidden">
            <button className="rounded p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
  );
};

export default Navbar;
