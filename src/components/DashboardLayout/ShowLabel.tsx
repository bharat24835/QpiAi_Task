import clsx from "clsx";

type ShowLabelProps = {
  type?: "Primary" | "Secondary" | "Tertiary";
  text: string;
};

const ShowLabel = ({ type = "Primary", text }: ShowLabelProps) => {
  const baseClasses =
    "px-[8px] py-[4px] rounded-sm border-[1px] text-sm font-[400] h-[26px] flex items-center";

  const variantClasses = {
    Primary: "text-[#E400A0] bg-[#FACCEC] border-[#F499D9]",
    Secondary: "bg-[#FFE5D3] border-[#FFCCA7] text-[#D96C1E] ",
    Tertiary: "text-[#4C00FE] bg-[#F4F0FF] border-[#4C00FE]",
  };
  return (
    <span className={clsx(baseClasses, variantClasses[type])}>{text}</span>
  );
};

export default ShowLabel;
