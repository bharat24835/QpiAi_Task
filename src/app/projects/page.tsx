"use client";
import DataManagement from "@/components/DashBoard/DataManagement";
import Preview from "@/components/DashBoard/Preview/Preview";
import Upload from "@/components/DashBoard/Upload/Upload";
import { DataManagementButton } from "@/types/dashboard";
import { ScrollArea } from "@mantine/core";
import { useState } from "react";

export default function ProjectsPage() {
  const [selected, setSelected] = useState<DataManagementButton>(
    DataManagementButton.UPLOAD
  );
  return (
    <div className="w-full h-full flex gap-[2px]">
      
      <DataManagement selected={selected} setSelected={setSelected} />
      <div className="h-full w-full ">
       
        <ScrollArea className="h-[calc(100vh-176px)] ">
          {selected === DataManagementButton.UPLOAD ? <Upload /> : <Preview />}
        </ScrollArea>
      </div>
    </div>
  );
}
