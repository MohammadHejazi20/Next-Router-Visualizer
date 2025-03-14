"use client";

import { Button } from "@/components/ui/button";
import { addNodeUtil, Node } from "@/lib/nodeUtils";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Edit,
  File,
  FileText,
  Folder,
  FolderDot,
  Globe,
  Layout,
} from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";
import AddNodeDropdown from "./add-node-dropdown";

interface FileRouteVisualizerProps {
  structure: Node[];
}

export function FileRouteVisualizer({
  structure: initialStructure,
}: FileRouteVisualizerProps) {
  const [structure, setStructure] = useState<Node[]>(initialStructure);
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(
    new Set(initialStructure.map((node) => node.id))
  );
  const [editingNode, setEditingNode] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<string>("");

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
      case "layout":
        return <Layout className="h-4 w-4 text-[#A0A0A0]" />;
      default:
        return <File className="h-4 w-4 text-[#A0A0A0]" />;
    }
  };

  const addNode = (
    parentId: string | null,
    type: "layout" | "page" | "folder"
  ) => {
    addNodeUtil(
      structure,
      setStructure,
      expandedNodes,
      setExpandedNodes,
      parentId,
      type
    );
  };

  const saveNodeName = () => {
    if (!editingNode) return;

    const updateNodes = (nodes: Node[]): Node[] => {
      return nodes.map((node) => {
        if (node.id === editingNode) {
          return { ...node, name: editValue };
        }
        if (node.children) {
          return { ...node, children: updateNodes(node.children) };
        }
        return node;
      });
    };

    setStructure(updateNodes(structure));
    setEditingNode(null);
  };

  const renderNode = (
    node: Node,
    level = 0,
    isLast = true,
    parentNode?: Node
  ) => {
    const isExpanded = expandedNodes.has(node.id);
    const hasChildren = node.children && node.children.length > 0;
    const isActive = node.status === "active" || node.type === "page";
    const isGroup = node.status === "group" || node.type === "group";
    const isEditing = editingNode === node.id;

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
              <Button
                onClick={() => toggleNode(node.id)}
                className="mr-2 p-1 rounded-md hover:bg-[#2A2A2A] transition-colors bg-transparent"
              >
                <ChevronRight
                  className={cn(
                    "h-3 w-3 text-[#A0A0A0] transition-transform",
                    isExpanded && "transform rotate-90"
                  )}
                />
              </Button>
            )}
            {!hasChildren && <div className="w-5" />}

            <span className="mr-2">{getNodeIcon(node)}</span>

            {isEditing ? (
              <div className="flex items-center gap-2 flex-1">
                <Input
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="h-7 px-2 py-1 text-sm bg-[#2A2A2A] border-[#4A90E2] text-[#E0E0E0] focus-visible:ring-[#4A90E2]"
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      saveNodeName();
                    } else if (e.key === "Escape") {
                      setEditingNode(null);
                    }
                  }}
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="h-6 w-6 p-0 rounded-full bg-[#2A2A2A] border-[#333333] hover:bg-[#4A90E2] hover:text-white hover:border-[#4A90E2]"
                  onClick={saveNodeName}
                >
                  <Check className="h-3 w-3" />
                </Button>
              </div>
            ) : (
              <>
                <div className="flex gap-1 w-full  items-center">
                  <div className="flex justify-start">
                    <span
                      className={cn("text-sm", isGroup && "text-[#4A90E2]")}
                    >
                      {node.name}
                    </span>
                  </div>
                  <div className="flex items-center justify-end w-full gap-2">
                    {isActive && (
                      <div className="ml-auto flex items-center">
                        <div className="h-2 w-2 rounded-full bg-[#4A90E2] mr-2" />
                      </div>
                    )}

                    {(node.type === "folder" || node.type === "group") && (
                      <div className="ml-auto">
                        <AddNodeDropdown
                          onSelect={(type) => addNode(node.id, type)}
                        />
                      </div>
                    )}

                    <Button
                      variant="outline"
                      className="h-6 w-6 p-0 rounded-full bg-[#2A2A2A] border-[#333333] hover:bg-[#4A90E2] hover:text-white hover:border-[#4A90E2]"
                      onClick={() => {
                        setEditingNode(node.id);
                        setEditValue(node.name);
                      }}
                    >
                      <Edit className="h-4 w-4 text-[#A0A0A0] " />
                    </Button>
                  </div>
                </div>
              </>
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
                  index === node.children!.length - 1,
                  node
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
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-[#E0E0E0]">
          Router Structure
        </h2>
      </div>

      <div className="space-y-2">
        {structure.map((node, index) =>
          renderNode(node, 0, index === structure.length - 1)
        )}
      </div>
    </div>
  );
}
