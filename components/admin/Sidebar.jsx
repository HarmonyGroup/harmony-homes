"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { RxDashboard } from "react-icons/rx";
import { FiShoppingBag } from "react-icons/fi";
import { VscTag } from "react-icons/vsc";
import { BsPerson } from "react-icons/bs";
import { CiMoneyBill } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";

const Sidebar = () => {
  const path = usePathname();
  const { data: session, status, update } = useSession();

  return (
    <aside className="hidden bg-gray-100 absolute left-0 top-0 z-50 lg:flex h-screen w-64 flex-col overflow-y-hidden bg-primary-blue text-secondary-gray duration-300 ease-linear lg:static lg:translate-x-0">
      <div className="overflow-x-hidden relative flex items-center justify-between lg:justify-start gap-2 p-6">
        <Link href={"/admin"} className="font-semibold">
          {/* <Image
            src={"/assets/dark--logo.png"}
            alt="logo"
            height={90}
            width={90}
          /> */}
          Harmony Homes NG
        </Link>
      </div>
      <div className="flex flex-col gap-4 px-6 mt-4">
        <Link
          href={"/admin"}
          className={`hover:bg-gray-200 flex items-center gap-2 text-[13px] font-normal rounded-lg px-2 py-3 ${
            path === "/admin" ? "bg-gray-200" : ""
          }`}
        >
          <span className="text-[19px]">
            <RxDashboard />
          </span>
          Dashboard
        </Link>
        {/* <Link
          href={"/admin/categories"}
          className={`hover:bg-gray-200 flex items-center gap-2 text-[13px] font-normal rounded-lg px-2 py-3 ${
            path.includes("/admin/categories") ? "bg-gray-200" : ""
          }`}
        >
          <span className="text-[18px]">
            <FiShoppingBag />
          </span>
          Categories
        </Link> */}
        <Link
          href={"/admin/listings"}
          className={`hover:bg-gray-200 flex items-center gap-2 text-[13px] font-normal rounded-lg px-2 py-3 ${
            path.includes("/admin/listings") ? "bg-gray-200" : ""
          }`}
        >
          <span className="text-[18px]">
            <FiShoppingBag />
          </span>
          Listings
        </Link>
        <Link
          href={"/admin/admins"}
          className={`hover:bg-gray-200 flex items-center gap-2 text-[13px] font-normal rounded-lg px-2 py-3 ${
            path.includes("/admin/admins") ? "bg-gray-200" : ""
          }`}
        >
          <span className="text-[20px]">
            <IoSettingsOutline />
          </span>
          Admins
        </Link>
        <button
          onClick={() => signOut()}
          className="hover:bg-gray-200 flex items-center gap-2 text-[13px] font-normal rounded-lg px-2 py-3"
        >
          <span className="font-light text-[19px]">
            <SlLogout />
          </span>
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
