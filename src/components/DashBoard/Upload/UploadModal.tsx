import { Button, Group, Modal, Progress, Stack, Text } from "@mantine/core";
import React from "react";

interface UploadModalProps {
  isModalOpen: boolean;
  progress: number;
  currentFile: number;
  totalFiles: number;
  onCancel: () => void;
}

const UploadModal = ({
  isModalOpen,
  progress,
  currentFile,
  totalFiles,
  onCancel,
}: UploadModalProps) => {
  return (
    <Modal
      centered
      radius="8px"
      w="420px"
      opened={isModalOpen}
      onClose={() => {}}
      withCloseButton={false}
    >
      <Stack gap="32px">
        <Stack>
          <Text fz="24px" fw={700} c="#1E1D22">
            Uploading files
          </Text>
          <Text fz="14px" fw={400} c="#34313A">
            This Might take a while to Upload Files
          </Text>
        </Stack>

        <Stack>
          <Progress h="8px" color="#4C00FE" value={progress} />
          <Group gap={"0px"}>
            <Text
              style={{ color: "#34313A", fontSize: "14px", fontWeight: "700" }}
            >
              {currentFile}/
            </Text>
            <Text
              style={{ color: "#34313A", fontSize: "14px", fontWeight: "400" }}
            >
              {totalFiles}
            </Text>
          </Group>
        </Stack>

        <Button
          w="88px"
          variant="outline"
          onClick={onCancel}
          style={{ border: "1px solid #B7B5BA", color: "#34313A" }}
        >
          Cancel
        </Button>
      </Stack>
    </Modal>
  );
};

export default UploadModal;
