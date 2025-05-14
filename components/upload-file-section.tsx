"use client";

import type React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, Upload } from "lucide-react";
import { useRef, useState } from "react";
interface UploadFileSectionProps {
  onFileUpload: (file: File) => void;
  uploadError: string | null;
}

export function UploadFileSection({
  onFileUpload,
  uploadError,
}: UploadFileSectionProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileUpload(file);

      // Reset the input value to allow uploading the same file again
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file && file.type === "application/json") {
      onFileUpload(file);
    }
  };

  return (
    <div className="mt-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/5 to-[#9C4AE2]/5 rounded-lg -z-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM0QTkwRTIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yIDBIMzZ2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bTIgMGgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10 -z-10" />

      <div
        className={`p-6 border border-dashed ${
          isDragging ? "border-[#4A90E2] bg-[#4A90E2]/5" : "border-[#9C4AE2]/40"
        } rounded-lg transition-colors`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Upload className="h-6 w-6 text-[#9C4AE2]" />
              <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[#4A90E2] animate-pulse" />
            </div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-[#4A90E2] to-[#9C4AE2] bg-clip-text text-transparent">
              Upload Generated File
            </h3>
          </div>
        </div>

        <div className="mt-4 ml-9">
          <p className="text-sm text-[#A0A0A0]">
            Upload your generated{" "}
            <code className="bg-[#1E1E1E] px-1.5 py-0.5 rounded text-[#4A90E2]">
              app-structure.json
            </code>{" "}
            file to visualize your own Next.js app structure.
          </p>

          <div className="mt-4 flex flex-col gap-4">
            <input
              type="file"
              accept=".json,application/json"
              onChange={handleFileChange}
              ref={fileInputRef}
              className="hidden"
              id="json-file-upload"
            />

            <div className="flex items-center gap-3 flex-wrap">
              <button
                type="button"
                onClick={handleButtonClick}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-[#1E1E1E] border border-[#333333] hover:bg-[#4A90E2] hover:text-white hover:border-[#4A90E2] cursor-pointer h-10 px-4 py-2"
              >
                <Upload className="h-4 w-4 mr-2" />
                Upload JSON File
              </button>

              <p className="text-xs text-[#A0A0A0] mt-2 w-full">
                Or drag and drop your JSON file here
              </p>
            </div>

            <AnimatePresence>
              {uploadError && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-[#2A1215] border border-[#E53E3E]/30 text-[#E53E3E] p-3 rounded-md flex items-start gap-2"
                >
                  <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Error uploading file</p>
                    <p className="text-sm">{uploadError}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
