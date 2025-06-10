import React from "react";
import SideBar from "./Sidebar/SideBar";

interface DashBoardLayoutProps {
  children: React.ReactNode;
}

const DashBoardLayout = ({ children }: DashBoardLayoutProps) => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <SideBar />

      {/* Main content */}
      <main className="flex-1  overflow-auto">{children}</main>
    </div>
  );
};

export default DashBoardLayout;
