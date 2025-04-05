"use client";

import { Card } from "@/components/ui/card";
import { Workflow } from "lucide-react";
import { SectionHeader } from "./section-header";
import { motion } from "framer-motion";

export function HowItWorksSection() {
  return (
    <section>
      <SectionHeader
        icon={<Workflow className="h-5 w-5 text-[#4A90E2]" />}
        title="How It Works"
      />
      <Card className="bg-[#1E1E1E] border border-[#333333] p-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-[#4A90E2] font-medium mb-3">
              Visualization Process
            </h3>
            <ol className="space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-[#4A90E2] to-[#9C4AE2] text-white text-sm font-medium shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="text-[#E0E0E0] font-medium">Data Loading</h4>
                  <p className="text-sm text-[#A0A0A0] mt-1">
                    The app loads predefined routing structures from the example
                    data or from a user-generated JSON file.
                  </p>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex items-start gap-3"
              >
                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-[#4A90E2] to-[#9C4AE2] text-white text-sm font-medium shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="text-[#E0E0E0] font-medium">Tree Rendering</h4>
                  <p className="text-sm text-[#A0A0A0] mt-1">
                    The app recursively renders the tree structure, with each
                    node representing a file or folder in the Next.js app
                    directory.
                  </p>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="flex items-start gap-3"
              >
                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-[#4A90E2] to-[#9C4AE2] text-white text-sm font-medium shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="text-[#E0E0E0] font-medium">Route Mapping</h4>
                  <p className="text-sm text-[#A0A0A0] mt-1">
                    For page nodes, the app calculates and displays the
                    corresponding URL route based on the folder structure.
                  </p>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="flex items-start gap-3"
              >
                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-[#4A90E2] to-[#9C4AE2] text-white text-sm font-medium shrink-0 mt-0.5">
                  4
                </div>
                <div>
                  <h4 className="text-[#E0E0E0] font-medium">
                    Interactive Features
                  </h4>
                  <p className="text-sm text-[#A0A0A0] mt-1">
                    The app provides interactive features like
                    expanding/collapsing nodes, editing node names, and adding
                    new nodes.
                  </p>
                </div>
              </motion.li>
            </ol>
          </div>

          <div className="mt-6">
            <h3 className="text-[#4A90E2] font-medium mb-3">Key Components</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#2A2A2A] p-4 rounded-lg border border-[#333333]">
                <h4 className="text-[#E0E0E0] font-medium mb-2">
                  RoutingVisualizer
                </h4>
                <p className="text-xs text-[#A0A0A0]">
                  The main component that manages the selection of example
                  structures and renders either the example list or the selected
                  structure.
                </p>
              </div>
              <div className="bg-[#2A2A2A] p-4 rounded-lg border border-[#333333]">
                <h4 className="text-[#E0E0E0] font-medium mb-2">
                  FileRouteVisualizer
                </h4>
                <p className="text-xs text-[#A0A0A0]">
                  Renders the tree structure of files and folders, handling the
                  recursive rendering of nodes and their children.
                </p>
              </div>
              <div className="bg-[#2A2A2A] p-4 rounded-lg border border-[#333333]">
                <h4 className="text-[#E0E0E0] font-medium mb-2">
                  ImportStructure
                </h4>
                <p className="text-xs text-[#A0A0A0]">
                  Provides instructions and a shell script for generating a JSON
                  file from a user&apos;s Next.js project.
                </p>
              </div>
              <div className="bg-[#2A2A2A] p-4 rounded-lg border border-[#333333]">
                <h4 className="text-[#E0E0E0] font-medium mb-2">
                  AddNodeDropdown
                </h4>
                <p className="text-xs text-[#A0A0A0]">
                  A dropdown menu component for adding new nodes (layout, page,
                  folder) to the structure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
