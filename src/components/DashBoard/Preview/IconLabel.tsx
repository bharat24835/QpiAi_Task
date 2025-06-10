import React from "react";

interface IconLabelProps {
  iconSrc: string;
  label: string;
}

const IconLabel = ({ iconSrc, label }: IconLabelProps) => {
  return (
    <div
      className={
        "flex items-center justify-center h-[40px] border border-[#B7B5BA] rounded-sm gap-2 px-3"
      }
    >
      <img src={iconSrc} alt={label} />
      <span className="text-[#1E1D22] text-sm font-[700]">{label}</span>
    </div>
  );
};

export default IconLabel;
