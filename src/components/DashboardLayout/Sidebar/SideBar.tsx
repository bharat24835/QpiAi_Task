"use client";

import React from "react";
import SidebarItem from "./SideBarItem";
import { Sidebar } from "@/types/dashboard";
import { usePathname } from "next/navigation";

const upperSidebarItems = [
  { name: "projects", label: Sidebar.PROJECTS, href: "/projects" },
  { name: "deploy", label: Sidebar.DEPLOY, href: "/deploy" },
];

const lowerSidebarItems = [
  "/dashboard/icon1.svg",
  "/dashboard/icon2.svg",
  "/dashboard/icon3.svg",
];

const SideBar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center justify-between bg-[#FBFBFC] h-full w-[80px] py-[32px] border-[#DBDADD] border-[2px]">
      {/* UPPER */}
      <div className="flex flex-col items-center justify-start gap-[32px]">
        <img
          src="/dashboard/logo.svg"
          className="h-[40px] w-[40px]"
          alt="logo"
        />
        <div className="flex flex-col items-center justify-start gap-[24px]">
          {upperSidebarItems.map((item) => (
            <SidebarItem
              key={item.href}
              {...item}
              isActive={pathname === item.href}
            />
          ))}
        </div>
      </div>

      {/* LOWER */}
      <div className="flex flex-col items-center justify-start gap-[24px] border-t border-[#DBDADD] pt-[24px] w-[53px]">
        {lowerSidebarItems.map((src, index) => (
          <img
            key={index}
            src={src}
            className="cursor-pointer"
            alt={`icon-${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
