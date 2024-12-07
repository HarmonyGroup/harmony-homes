import React from "react";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Header = () => {
  return (
    <div className="bg-[#3C0C64]/10 px-4 py-3">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <p className="text-[#3C0C64] text-xs lg:text-sm font-semibold">
          For enquiries call +234 707 179 3075
        </p>
        <div className="lg:flex items-center gap-6 hidden">
          <Link href={"/"}>
            <AiFillInstagram size={24} color="#3C0C64" />
          </Link>
          <Link href={"/"}>
            <BsFacebook size={19} color="#3C0C64" />
          </Link>
          <Link href={"/"}>
            <IoLogoWhatsapp size={22} color="#3C0C64" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
