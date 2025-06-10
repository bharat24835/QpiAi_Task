import React, { useEffect, useRef, useState } from "react";
import UploadModal from "./UploadModal";
import { Dropzone, FileWithPath } from "@mantine/dropzone";
import { Box, Button, Group, SimpleGrid, Stack, Text } from "@mantine/core";
import { supabase } from "@/utils/supabase";
import { showNotification } from "@mantine/notifications";
const allowedExtensions = [".jpg", ".jpeg", ".png", ".json", ".csv"];
const MAX_FILE_SIZE_MB = 10;

const Upload = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [totalFiles, setTotalFiles] = useState(0);
  const [currentFile, setCurrentFile] = useState(0);
  const [count, setCount] = useState(0);
  const shouldCancel = useRef(false);

  console.log("Upload URL :-  ", uploadedUrls);
  console.log("Modal Opened is :- ", isModalOpen);
  console.log("shouldCancel  is :- ", shouldCancel);
  console.log("Count is :- ", count);
  console.log("CurrentFile is :- ", currentFile);
  console.log("TotalFile is :- ", totalFiles);

  const handleDrop = async (newFiles: FileWithPath[]) => {
    setIsModalOpen(true);
    setCurrentFile(0);
    setCount(0);
    setProgress(0);

    shouldCancel.current = false; // reset cancel flag

    const total = newFiles.length;
    setTotalFiles(total);
    const newUrls: string[] = [];

    for (let i = 0; i < total; i++) {
      if (shouldCancel.current) {
        return;
      }
      const file = newFiles[i];
      const ext = file.name.split(".").pop()?.toLowerCase() || "";
      const fileSizeMB = file.size / (1024 * 1024); // Convert bytes to MB

      // file type check
      if (!allowedExtensions.includes(`.${ext}`)) {
        showNotification({
          title: "Invalid File",
          message: `File "${file.name}" is not allowed.`,
          color: "yellow",
        });
        setCount((prev) => prev + 1);
        continue; // Skip this file
      }
      // file size check
      if (fileSizeMB > MAX_FILE_SIZE_MB) {
        showNotification({
          title: "File Too Large",
          message: `File "${file.name}" exceeds the 10MB limit.`,
          color: "yellow",
        });
        setCount((prev) => prev + 1);
        continue;
      }
      // sanitization
      const safeFileName = file.name.replace(/[^\w.\-()]/g, "_");
      const filePath = `uploads/${Date.now()}-${safeFileName}`;
      // upload to bucket
      const result = await supabase.storage
        .from("uploads")
        .upload(filePath, file);

      if (!result.error) {
        const { data: publicUrlData } = supabase.storage
          .from("uploads")
          .getPublicUrl(filePath);
        if (publicUrlData?.publicUrl) {
          newUrls.push(publicUrlData.publicUrl);
        }
      }

      const percent = Math.round(((i + 1) / total) * 100);
      setCurrentFile((prev) => prev + 1);
      setCount((prev) => prev + 1);
      setProgress(percent);
    }

    setUploadedUrls((prev) => [...prev, ...newUrls]); // appeding prev store file to current
  };

  const handleSaveToDatabase = async () => {
    const total = uploadedUrls.length;

    if (total === 0) {
      showNotification({
        title: "Nothing to save",
        message: "No uploaded files to save.",
        color: "yellow",
      });
      return;
    }
    setTotalFiles(total);
    shouldCancel.current = false;

    setIsModalOpen(true);
    setProgress(0);
    setCurrentFile(0);
    setCount(0);

    for (let i = 0; i < total; i++) {
      if (shouldCancel.current) {
        return;
      }
      const { error } = await supabase.from("uploaded_files").insert({
        file_url: uploadedUrls[i],
      });

      if (error) {
        showNotification({
          title: "Error Wile saving to database",
          message: "Error Wile saving to database",
          color: "red",
        });
        continue;
      }

      const percent = Math.round(((i + 1) / total) * 100);
      setProgress(percent);
      setCount((prev) => prev + 1);
      setCurrentFile((prev) => prev + 1);
    }

    setTimeout(() => {
      showNotification({
        title: "Success",
        message: "Upload complete!",
        color: "green",
      });
      setUploadedUrls([]);
      setIsModalOpen(false);
    }, 800);
  };

  const handleCancel = () => {
    shouldCancel.current = true;
    setIsModalOpen(false);
    showNotification({
      title: "Upload Cancelled",
      message: "File upload or save was cancelled.",
      color: "red",
    });
  };

  // when we traverse all files , just close the modal
  useEffect(() => {
    if (count === totalFiles) {
      setIsModalOpen(false);
      setCount(0);
      setCurrentFile(0);
      setProgress(0);
      setTotalFiles(0);
    }
  }, [count]);

  return (
    <div className="flex flex-col p-[16px] justify-start gap-2">
      <div className="h-[56px]">
        <h5 className="block text-[#1E1D22] font-[700] font-sans text-lg leading-snug tracking-normal">
          Upload Datasets
        </h5>
      </div>

      <Dropzone
        h={"440px"}
        onDrop={handleDrop}
        style={{ border: "1px dashed #4C00FE" }}
        accept={["image/png", "image/jpeg", "image/jpe", "text/csv"]}
      >
        <Stack align="center" justify="center" pt={"100px"}>
          <Stack h={"fit-content"} align="center">
            <img className="h-[24px] w-[24px]" src="/dashboard/upload.svg" />
            <Text style={{ fontWeight: "400", color: "#34313A" }}>
              Drag and drop files from your computer or
            </Text>
            <Group>
              <Button
                variant="outline"
                style={{
                  border: "1px solid #B7B5BA",
                  color: "#34313A",
                }}
              >
                Select Files
              </Button>
              <Button
                variant="outline"
                style={{
                  border: "1px solid #B7B5BA",
                  color: "#34313A",
                }}
              >
                Select Folders
              </Button>
            </Group>
            <Text
              style={{ fontWeight: "300", color: "#929098", fontSize: "12px" }}
            >
              (PNG, JPEG, BMP, Files/Folders)
            </Text>
          </Stack>
        </Stack>
      </Dropzone>

      {/* Uploaded Preview */}
      {uploadedUrls.length > 0 && (
        <div className="border-[#DBDADD] border-[2px]">
          <SimpleGrid
            cols={6}
            p={"16px"}
            spacing={"14px"}
            verticalSpacing={"14px"}
          >
            {uploadedUrls.map((url, index) => (
              <Box
                key={index}
                className="relative w-full h-[120px] border rounded overflow-hidden group"
              >
                {(() => {
                  const ext = url.split(".").pop()?.toLowerCase();
                  const isImage = ["jpg", "jpeg", "png"].includes(ext || "");

                  return (
                    <img
                      src={isImage ? url : "/dashboard/sheet.svg"}
                      alt={`uploaded-${index}`}
                      className="w-full h-full object-contain"
                    />
                  );
                })()}
                <button
                  onClick={() => {
                    setUploadedUrls((prev) =>
                      prev.filter((_, i) => i !== index)
                    );
                  }}
                  className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-300 rounded-[12px] w-[20px] h-[20px] flex items-center justify-center shadow text-xs font-bold text-[#4C00FE] cursor-pointer"
                  aria-label="Remove image"
                >
                  ✕
                </button>
              </Box>
            ))}
          </SimpleGrid>
        </div>
      )}

      <div className="flex justify-start">
        <button
          onClick={handleSaveToDatabase}
          className="px-4 py-2 bg-[#4C00FE] text-white font-[700] rounded-md cursor-pointer"
        >
          Save & Upload
        </button>
        <UploadModal
          onCancel={handleCancel}
          isModalOpen={isModalOpen}
          progress={progress}
          currentFile={currentFile}
          totalFiles={totalFiles}
        />
      </div>
    </div>
  );
};

export default Upload;
