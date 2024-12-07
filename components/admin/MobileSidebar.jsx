"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "../ui/sheet";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { IoMenu, IoSettingsOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { FiShoppingBag } from "react-icons/fi";
import { VscTag } from "react-icons/vsc";
import { BsPerson } from "react-icons/bs";
import { CiMoneyBill } from "react-icons/ci";
import { SlLogout } from "react-icons/sl";

const MobileSidebar = () => {
  const path = usePathname();
  const { data: session, status, update } = useSession();

  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger>
          <IoMenu className="text-[20px]" />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-white flex flex-col border-none p-0"
        >
          {/* Sidebar Header */}
          <div className="overflow-x-hidden relative flex items-center justify-between lg:justify-start gap-2 px-2">
            <Link href={"/admin"}>
              <Image
                src={"/assets/dark--logo.png"}
                alt="logo"
                height={140}
                width={140}
              />
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
