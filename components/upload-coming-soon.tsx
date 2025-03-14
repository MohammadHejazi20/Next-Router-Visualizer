import { Clock, Upload } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

function UploadComingSoon() {
  return (
    <div className="mt-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/5 to-[#9C4AE2]/5 rounded-lg -z-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM0QTkwRTIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yIDBIMzZ2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bTIgMGgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10 -z-10" />

      <div className="p-6 border border-dashed border-[#9C4AE2]/40 rounded-lg">
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
          <div className="flex items-center gap-2 bg-[#1E1E1E] px-3 py-1 rounded-full border border-[#333333]">
            <Clock className="h-4 w-4 text-[#9C4AE2]" />
            <span className="text-xs font-medium text-[#E0E0E0]">
              Coming Soon
            </span>
          </div>
        </div>

        <div className="mt-4 ml-9">
          <p className="text-sm text-[#A0A0A0]">
            Soon you'll be able to directly upload your generated{" "}
            <code className="bg-[#1E1E1E] px-1.5 py-0.5 rounded text-[#4A90E2]">
              app-structure.json
            </code>{" "}
            file to visualize your own Next.js app structure.
          </p>

          <div className="mt-4 flex items-center gap-3">
            <Button
              variant="outline"
              disabled
              className="bg-[#1E1E1E] border-[#333333] text-[#A0A0A0] cursor-not-allowed opacity-70"
            >
              <Upload className="h-4 w-4 mr-2" />
              Upload JSON File
            </Button>

            <motion.div
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
              }}
              className="text-xs text-[#9C4AE2]"
            >
              Feature in development
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadComingSoon;
