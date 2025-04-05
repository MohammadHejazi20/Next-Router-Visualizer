"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { shellScript } from "@/lib/shell-script";
import { motion } from "framer-motion";
import {
  Clipboard,
  ClipboardCheck,
  FileJson,
  Sparkles,
  Terminal,
} from "lucide-react";
import { useState } from "react";
import UploadComingSoon from "./upload-coming-soon";

export function ImportStructure() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shellScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-[#1E1E1E] to-[#1E1E2A] p-6 border border-[#4A4AE2]/30 mb-8">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#4A4AE2]/20 to-[#9C4AE2]/10 rounded-bl-full -z-10" />

        <div className="flex items-center gap-3 mb-3">
          <Sparkles className="h-5 w-5 text-[#9C4AE2]" />
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#4A90E2] to-[#9C4AE2] bg-clip-text text-transparent">
            Import Your Own App Structure
          </h2>
        </div>
        <p className="text-sm text-[#A0A0A0] ml-8">
          Generate a JSON file from your Next.js app structure using this shell
          script
        </p>
      </div>

      <Card className="bg-[#1E1E1E] border border-[#333333] p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-[#4A90E2]" />
            <span className="text-sm font-medium text-[#E0E0E0]">
              Shell Script
            </span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={copyToClipboard}
            className="h-8 bg-[#2A2A2A] border-[#333333] hover:bg-[#4A90E2] hover:text-white hover:border-[#4A90E2]"
          >
            {copied ? (
              <>
                <ClipboardCheck className="h-4 w-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Clipboard className="h-4 w-4 mr-2" />
                Copy
              </>
            )}
          </Button>
        </div>
        <div className="relative">
          <pre className="overflow-x-auto p-4 rounded-lg bg-[#121212] text-[#E0E0E0] text-sm font-mono">
            {shellScript}
          </pre>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-2 right-2 bg-[#4A90E2] text-white px-3 py-1 rounded-md text-xs"
            >
              Copied to clipboard!
            </motion.div>
          )}
        </div>
      </Card>

      <div className="space-y-4 text-[#E0E0E0]">
        <div className="flex items-start gap-3">
          <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-[#4A90E2] to-[#9C4AE2] text-white text-sm font-medium shrink-0">
            1
          </div>
          <div>
            <h3 className="text-base font-medium">Save the script</h3>
            <p className="text-sm text-[#A0A0A0] mt-1">
              Copy the script above and save it as{" "}
              <code className="bg-[#2A2A2A] px-1.5 py-0.5 rounded text-[#4A90E2]">
                generate-structure.sh
              </code>{" "}
              in your Next.js project root.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-[#4A90E2] to-[#9C4AE2] text-white text-sm font-medium shrink-0">
            2
          </div>
          <div>
            <h3 className="text-base font-medium">Make it executable</h3>
            <p className="text-sm text-[#A0A0A0] mt-1">
              Run{" "}
              <code className="bg-[#2A2A2A] px-1.5 py-0.5 rounded text-[#4A90E2]">
                chmod +x generate-structure.sh
              </code>{" "}
              to make the script executable.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-[#4A90E2] to-[#9C4AE2] text-white text-sm font-medium shrink-0">
            3
          </div>
          <div>
            <h3 className="text-base font-medium">Run the script</h3>
            <p className="text-sm text-[#A0A0A0] mt-1">
              Execute{" "}
              <code className="bg-[#2A2A2A] px-1.5 py-0.5 rounded text-[#4A90E2]">
                ./generate-structure.sh
              </code>{" "}
              in your terminal.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-[#4A90E2] to-[#9C4AE2] text-white text-sm font-medium shrink-0">
            4
          </div>
          <div>
            <h3 className="text-base font-medium">Import the generated file</h3>
            <p className="text-sm text-[#A0A0A0] mt-1">
              The script will generate an{" "}
              <code className="bg-[#2A2A2A] px-1.5 py-0.5 rounded text-[#4A90E2]">
                app-structure.json
              </code>{" "}
              file that you can import into this visualizer.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 p-4 rounded-lg bg-[#2A2A2A] border border-[#333333]">
        <FileJson className="h-5 w-5 text-[#9C4AE2]" />
        <p className="text-sm text-[#A0A0A0]">
          <span className="text-[#E0E0E0] font-medium">Note:</span> This script
          requires the{" "}
          <code className="bg-[#121212] px-1.5 py-0.5 rounded text-[#4A90E2]">
            uuidgen
          </code>{" "}
          command, which is available on most Unix-like systems. If you're on
          macOS, you may need to install it with{" "}
          <code className="bg-[#121212] px-1.5 py-0.5 rounded text-[#4A90E2]">
            brew install util-linux
          </code>
          .
        </p>
      </div>

      <UploadComingSoon />
    </div>
  );
}
