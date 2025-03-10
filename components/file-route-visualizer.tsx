"use client";

import { useState } from "react";
import {
  Folder,
  File,
  ChevronRight,
  ArrowRight,
  FileText,
  FolderDot,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface Node {
  id: string;
  type: "folder" | "file" | "page" | "group";
  name: string;
  children?: Node[];
  route?: string;
  status?: "active" | "group" | "default";
}

interface FileRouteVisualizerProps {
  structure: Node[];
}

export function FileRouteVisualizer({ structure }: FileRouteVisualizerProps) {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(
    new Set(structure.map((node) => node.id))
  );

  const toggleNode = (nodeId: string) => {
    setExpandedNodes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(nodeId)) {
        newSet.delete(nodeId);
      } else {
        newSet.add(nodeId);
      }
      return newSet;
    });
  };

  const getNodeIcon = (node: Node) => {
    switch (node.type) {
      case "folder":
        return <Folder className="h-4 w-4 text-[#A0A0A0]" />;
      case "file":
        return <File className="h-4 w-4 text-[#A0A0A0]" />;
      case "page":
        return <FileText className="h-4 w-4 text-[#A0A0A0]" />;
      case "group":
        return <FolderDot className="h-4 w-4 text-[#4A90E2]" />;
      default:
        return <File className="h-4 w-4 text-[#A0A0A0]" />;
    }
  };

  const renderNode = (node: Node, level = 0, isLast = true) => {
    const isExpanded = expandedNodes.has(node.id);
    const hasChildren = node.children && node.children.length > 0;
    const isActive = node.status === "active" || node.type === "page";
    const isGroup = node.status === "group" || node.type === "group";

    return (
      <div key={node.id} className="relative">
        <div className="flex items-center group">
          <div
            className={cn(
              "flex items-center w-full bg-[#1E1E1E] border border-[#333333] rounded-lg p-2 my-1",
              isGroup && "border-l-[#4A90E2] border-l-2"
            )}
          >
            {hasChildren && (
              <button
                onClick={() => toggleNode(node.id)}
                className="mr-2 p-1 rounded-md hover:bg-[#2A2A2A] transition-colors"
              >
                <ChevronRight
                  className={cn(
                    "h-3 w-3 text-[#A0A0A0] transition-transform",
                    isExpanded && "transform rotate-90"
                  )}
                />
              </button>
            )}
            {!hasChildren && <div className="w-5" />}

            <span className="mr-2">{getNodeIcon(node)}</span>

            <span className={cn("text-sm", isGroup && "text-[#4A90E2]")}>
              {node.name}
            </span>

            {isActive && (
              <div className="ml-auto flex items-center">
                <div className="h-2 w-2 rounded-full bg-[#4A90E2] mr-2" />
              </div>
            )}
          </div>

          {node.route && (
            <>
              <div className="mx-4 flex items-center">
                <ArrowRight className="h-4 w-4 text-[#4A90E2]" />
              </div>
              <div className="flex items-center bg-[#2A2A2A] border border-[#333333] rounded-lg px-3 py-2">
                <Globe className="h-3 w-3 text-[#4A90E2] mr-2" />
                <span className="text-sm font-mono text-[#E0E0E0]">
                  {node.route}
                </span>
              </div>
            </>
          )}
        </div>

        {hasChildren && isExpanded && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="pl-6 border-l border-[#333333] ml-3"
            >
              {node.children?.map((child, index) =>
                renderNode(
                  child,
                  level + 1,
                  index === node.children!.length - 1
                )
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {structure.map((node, index) =>
        renderNode(node, 0, index === structure.length - 1)
      )}
    </div>
  );
}
