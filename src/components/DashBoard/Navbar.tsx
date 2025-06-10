import React from "react";
import ShowLabel from "@/components/DashboardLayout/ShowLabel";

const Navbar = () => {
  return (
    <div className="p-[16px] flex flex-col justify-between gap-[12px] border-[#D4C2FF] border-[2px]">
      <div className="flex justify-between">
        <div className="h-[40px] flex items-center gap-[4px]">
          <img className="cursor-pointer" src={"/dashboard/left.svg"} />
          <span className="font-[#1E1D22] text-lg font-bold  ">
            Activity_Name
          </span>
        </div>
        <img className="cursor-pointer" src={"/dashboard/dot.svg"} />
      </div>

      {/* Down Section  */}
      <div className="flex flex-col gap-[12px]">
        <div className="flex gap-[12px]">
          <span className="text-xs font-[300] font-[#34313A]">
            Created By: Alex Jamson
          </span>
          <span className="text-xs font-[300] font-[#34313A]">
            Created On: 01/01/2024, 09:30pm
          </span>
        </div>
        <div className="flex gap-[12px]">
          <span className="text-[12px] font-[400] font-[#34313A] font-regular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vel
            nihil laudantium architecto nesciunt.
          </span>
        </div>
        <div className="flex gap-[12px]">
          <ShowLabel text="Hello" type="Primary" />
          <ShowLabel text="Hello" type="Secondary" />
          <ShowLabel text="Hello" type="Tertiary" />
          <ShowLabel text="Hello" type="Tertiary" />
          <ShowLabel text="Hello" type="Tertiary" />
          <ShowLabel text="Hello" type="Tertiary" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
