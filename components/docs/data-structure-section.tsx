import { Card } from "@/components/ui/card";
import { Braces, FolderTree, FileText, Code, GitBranch } from "lucide-react";
import { SectionHeader } from "./section-header";

export function DataStructureSection() {
  return (
    <section>
      <SectionHeader
        icon={<Braces className="h-5 w-5 text-[#4A90E2]" />}
        title="Data Structure"
      />
      <Card className="bg-[#1E1E1E] border border-[#333333] p-6">
        <p className="text-[#E0E0E0] leading-relaxed mb-4">
          The visualizer uses a tree-like data structure to represent the
          Next.js routing hierarchy. Each node in the tree represents a file or
          folder in the Next.js app directory.
        </p>

        <div className="bg-[#121212] p-4 rounded-lg border border-[#333333] overflow-x-auto mb-4">
          <pre className="text-sm text-[#E0E0E0] font-mono">
            {`interface Node {
  id: string;
  type: "folder" | "file" | "page" | "group" | "layout";
  name: string;
  children?: Node[];
  route?: string;
  status?: "active" | "group" | "default";
}`}
          </pre>
        </div>

        <div className="space-y-4 text-[#E0E0E0] text-sm">
          <div>
            <h3 className="text-[#4A90E2] font-medium mb-2">Node Properties</h3>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-[#9C4AE2] font-mono">id</span>
                <span>- Unique identifier for each node</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9C4AE2] font-mono">type</span>
                <span>
                  - Type of the node (folder, file, page, group, layout)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9C4AE2] font-mono">name</span>
                <span>- Name of the file or folder</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9C4AE2] font-mono">children</span>
                <span>- Array of child nodes (for folders and groups)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9C4AE2] font-mono">route</span>
                <span>- The URL path for page nodes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9C4AE2] font-mono">status</span>
                <span>- Visual status indicator for the node</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#4A90E2] font-medium mb-2">Node Types</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#2A2A2A] p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <FolderTree className="h-4 w-4 text-[#A0A0A0]" />
                  <span className="font-medium">folder</span>
                </div>
                <p className="text-xs text-[#A0A0A0]">
                  Represents a directory in the app folder that maps to a route
                  segment
                </p>
              </div>
              <div className="bg-[#2A2A2A] p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-4 w-4 text-[#A0A0A0]" />
                  <span className="font-medium">page</span>
                </div>
                <p className="text-xs text-[#A0A0A0]">
                  Represents a page.js/tsx file that creates a publicly
                  accessible route
                </p>
              </div>
              <div className="bg-[#2A2A2A] p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-4 w-4 text-[#A0A0A0]" />
                  <span className="font-medium">file</span>
                </div>
                <p className="text-xs text-[#A0A0A0]">
                  Represents supporting files like layout.js, loading.js, etc.
                </p>
              </div>
              <div className="bg-[#2A2A2A] p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <GitBranch className="h-4 w-4 text-[#4A90E2]" />
                  <span className="font-medium">group</span>
                </div>
                <p className="text-xs text-[#A0A0A0]">
                  Represents route groups with (parentheses) that don't affect
                  URL paths
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
