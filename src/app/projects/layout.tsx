"use client";
import DashBoardLayout from "@/components/DashboardLayout/DashBoardLayout";
import Navbar from "@/components/DashBoard/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 
  return (
    <DashBoardLayout>
      <div className="flex flex-col h-full bg-[#fff] pl-[2px] gap-[2px]">
        {/* TOP COMPONENT */}
        <Navbar />
        {children}
      </div>
    </DashBoardLayout>
  );
}
