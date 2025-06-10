"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { DataManagementButton } from "@/types/dashboard";

interface DataManagementProps {
  selected: "upload" | "preview";
  setSelected: React.Dispatch<React.SetStateAction<DataManagementButton>>;
}

const DataManagement = ({ selected, setSelected }: DataManagementProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleSelect = (type: DataManagementButton) => {
    setSelected(type);
  };

  return (
    <div className="flex flex-col w-[195px] p-[16px] gap-[8px] border-[2px] border-[#D4C2FF]">
      {/* DROPDOWN HEADER */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex gap-[8px] cursor-pointer "
      >
        <img
          className={`h-[24px] w-[24px] transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          src={"/dashboard/down2.svg"}
          alt="toggle"
        />
        <div>
          <span className="text-[#34313A] font-[700] text-md block">Data</span>
          <span className="text-[#34313A] font-[700] text-md block">
            Management
          </span>
        </div>
      </div>

      {/* DROPDOWN CONTENT */}
      <div
        className={clsx(
          "flex flex-col gap-[16px] transform transition-all duration-300 origin-top",
          isOpen
            ? "opacity-100 translate-y-0 scale-y-100"
            : "opacity-0 -translate-y-2 scale-y-95 pointer-events-none"
        )}
      >
        <button
          onClick={() => handleSelect(DataManagementButton.UPLOAD)}
          className="pl-[32px] text-left cursor-pointer flex justify-between"
        >
          <div>
            <span
              className={clsx(
                "text-xs leading-[1.7] block",
                selected === "upload"
                  ? "font-[700] text-[#4C00FE]"
                  : "font-[400] text-[#34313A]"
              )}
            >
              Upload DataSets
            </span>
          </div>
          <img
            className={clsx(
              selected === "upload" ? "opacity-100" : "opacity-0"
            )}
            src="/dashboard/indicator.svg"
          />
        </button>

        <button
          onClick={() => handleSelect(DataManagementButton.PREVIEW)}
          className="pl-[32px] text-left cursor-pointer flex justify-between align-middle"
        >
          <div>
            <span
              className={clsx(
                "text-xs",
                selected === "preview"
                  ? "font-[700] text-[#4C00FE]"
                  : "font-[400] text-[#34313A]"
              )}
            >
              Preview
            </span>
          </div>
          <img
            className={clsx(
              selected === "preview" ? "opacity-100" : "opacity-0"
            )}
            src="/dashboard/indicator.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default DataManagement;
