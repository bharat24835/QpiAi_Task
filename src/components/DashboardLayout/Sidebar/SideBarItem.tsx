"use client";

import React from "react";
import Link from "next/link";
import { Sidebar } from "@/types/dashboard";
import Icons from "../../Icons";

interface SidebarItemProps {
  name: string;
  label: Sidebar;
  href: string;
  isActive: boolean;
}

const SidebarItem = ({ name, label, href, isActive }: SidebarItemProps) => {
  return (
    <Link href={href} className="w-full">
      <div
        className={`flex flex-col items-center justify-start cursor-pointer transition-colors duration-200 gap-[6px] w-full text-center ${
          isActive ? "text-[#4C00FE] font-bold" : "text-[#1E1D22] font-normal"
        }`}
      >
        <Icons type={name} />
        <span className="text-sm">{label}</span>
      </div>
    </Link>
  );
};

export default SidebarItem;
