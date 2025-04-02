import { Card } from "@/components/ui/card";
import { Code, FolderTree, Layers } from "lucide-react";
import { SectionHeader } from "./section-header";

export function ProjectOverviewSection() {
  return (
    <section>
      <SectionHeader
        icon={<FolderTree className="h-5 w-5 text-[#4A90E2]" />}
        title="Project Overview"
      />
      <Card className="bg-[#1E1E1E] border border-[#333333] p-6">
        <p className="text-[#E0E0E0] leading-relaxed">
          The Next.js App Router Structure Visualizer is a tool designed to help
          developers understand and visualize the file-based routing system in
          Next.js applications. It provides an interactive interface to explore
          how folder structures translate to routes in the Next.js App Router.
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#2A2A2A] p-4 rounded-lg border border-[#333333]">
            <h3 className="text-[#4A90E2] font-medium mb-2 flex items-center gap-2">
              <Code className="h-4 w-4" /> Key Features
            </h3>
            <ul className="text-sm text-[#E0E0E0] space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#9C4AE2] mt-1">•</span>
                <span>
                  Interactive visualization of Next.js routing structures
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9C4AE2] mt-1">•</span>
                <span>
                  Support for route groups, parallel routes, and intercepting
                  routes
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9C4AE2] mt-1">•</span>
                <span>
                  Ability to generate JSON from your own Next.js project
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9C4AE2] mt-1">•</span>
                <span>Editable node names and custom structure creation</span>
              </li>
            </ul>
          </div>
          <div className="bg-[#2A2A2A] p-4 rounded-lg border border-[#333333]">
            <h3 className="text-[#4A90E2] font-medium mb-2 flex items-center gap-2">
              <Layers className="h-4 w-4" /> Technologies Used
            </h3>
            <ul className="text-sm text-[#E0E0E0] space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#9C4AE2] mt-1">•</span>
                <span>Next.js 14 with App Router</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9C4AE2] mt-1">•</span>
                <span>React 18 with Hooks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9C4AE2] mt-1">•</span>
                <span>TypeScript for type safety</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9C4AE2] mt-1">•</span>
                <span>Tailwind CSS for styling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9C4AE2] mt-1">•</span>
                <span>Framer Motion for animations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9C4AE2] mt-1">•</span>
                <span>Lucide React for icons</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
}
