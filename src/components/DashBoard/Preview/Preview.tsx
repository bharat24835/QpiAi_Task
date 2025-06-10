import React, { useEffect, useState } from "react";
import IconLabel from "./IconLabel";
import { supabase } from "@/utils/supabase";
import { UploadedFile } from "@/types/dashboard";
import { Box, SimpleGrid } from "@mantine/core";

const sidebarItems = [
  { label: "Explore", iconSrc: "/dashboard/explore.svg" },
  { label: "Dataset Insights", iconSrc: "/dashboard/dataset.svg" },
  { label: "Auto-Annotate", iconSrc: "/dashboard/auto.svg" },
  { label: "Annotate", iconSrc: "/dashboard/annotate.svg" },
];

const Preview = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const fetchUploadedFiles = async (): Promise<UploadedFile[]> => {
    const { data } = await supabase
      .from("uploaded_files")
      .select("*")
      .order("created_at", { ascending: false });

    return data as UploadedFile[];
  };

  useEffect(() => {
    const loadFiles = async () => {
      try {
        const data = await fetchUploadedFiles();
        setUploadedFiles(data);
      } catch {}
    };

    loadFiles();
  }, []);

  return (
    <div className="flex gap-[2px]">
      {/* Left Container  */}

      <div className="flex flex-col w-full p-[16px] gap-[16px]">
        {/* HEADING  */}

        <h5 className="block text-[#1E1D22] font-[700] font-sans  text-lg leading-snug tracking-normal ">
          Preview
        </h5>

        {/* UPLOAD INFO  */}
        <div className="flex gap-[32px]">
          {/* First Info  */}
          <div className="flex">
            <span className="font-[#34313A] font-[400] text-md">
              No. Of Images:
            </span>
            <span className="font-[#34313A] font-[700] text-md ml-[6px]">
              {uploadedFiles.length}
            </span>
          </div>
          {/* Second Info  */}
          <div className="flex">
            <span className="font-[#34313A] font-[400] text-md">Size:</span>
            <span className="font-[#34313A] font-[700] text-md ml-[6px]">
              25.1 GB
            </span>
          </div>
        </div>

        {/* PREVIEW CONTAINER  */}
        {uploadedFiles.length > 0 && (
          <div className="border-[#DBDADD] border-[2px] h-[1300px]">
            <SimpleGrid cols={6} p="16px" spacing="14px" verticalSpacing="14px">
              {uploadedFiles.map((file, index) => {
                const ext = file.file_url.split(".").pop()?.toLowerCase();
                const isImage = ["jpg", "jpeg", "png"].includes(ext || "");

                return (
                  <Box
                    key={file.id}
                    className="relative w-full h-[120px] border rounded overflow-hidden group"
                  >
                    <img
                      src={isImage ? file.file_url : "/dashboard/sheet.svg"}
                      alt={`uploaded-${index}`}
                      className="w-full h-full object-contain"
                    />
                  </Box>
                );
              })}
            </SimpleGrid>
          </div>
        )}
      </div>
      {/* Right Container  */}
      <div className="w-[366px] h-fit sticky top-[2px] self-start border border-[#D9DEF7]  p-4 flex flex-col gap-4">
        <span className="font-[#1E1D22] text-lg font-[700]">Explore Data</span>
        <p className="font-[#34313A] text-md font-[400]">
          What kind of action do you want to perform for this data?
        </p>
        <div className="flex flex-col gap-2">
          {sidebarItems.map((item, index) => (
            <IconLabel key={index} label={item.label} iconSrc={item.iconSrc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preview;
