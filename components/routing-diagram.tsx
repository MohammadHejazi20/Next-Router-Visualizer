"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Globe,
  File,
  Folder,
  ChevronRight,
  Plus,
  FileCode,
  FolderDot,
  Edit2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface Node {
  id: string;
  type: "folder" | "file";
  name: string;
  children?: Node[];
  route?: string;
  status?: "active" | "group" | "default";
}

interface RoutingDiagramProps {
  initialNodes: Node[];
}

export default function RoutingDiagram({ initialNodes }: RoutingDiagramProps) {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [editingNode, setEditingNode] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "text-blue-400";
      case "group":
        return "text-purple-400";
      default:
        return "text-muted-foreground";
    }
  };

  const getNodePath = (nodeId: string): string => {
    const findPath = (nodes: Node[], path: string = ""): string => {
      for (const node of nodes) {
        if (node.id === nodeId) {
          return `${path}/${node.name}`;
        }
        if (node.children) {
          const childPath = findPath(node.children, `${path}/${node.name}`);
          if (childPath) return childPath;
        }
      }
      return "";
    };
    return findPath(nodes).replace(/\/app/, "");
  };

  const renderNode = (node: Node, level: number = 0) => {
    const isSelected = selectedNode === node.id;
    const isEditing = editingNode === node.id;

    return (
      <motion.div
        key={node.id}
        className="relative"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div
          className={cn(
            "flex items-center gap-2 p-3 rounded-lg transition-all",
            isSelected ? "bg-accent/80 shadow-lg" : "hover:bg-accent/40",
            level > 0 && "ml-6"
          )}
          onClick={() => setSelectedNode(node.id)}
        >
          {node.type === "folder" ? (
            node.status === "group" ? (
              <FolderDot
                className={cn("w-4 h-4", getStatusColor(node.status))}
              />
            ) : (
              <Folder className={cn("w-4 h-4", getStatusColor(node.status ? "active" : "default"))} />
            )
          ) : (
            <FileCode className={cn("w-4 h-4", getStatusColor(node.status ? "active" : "default"))} />
          )}
          {isEditing ? (
            <Input
              value={node.name}
              onChange={(e) => {
                const updateNodes = (nodes: Node[]): Node[] => {
                  return nodes.map((n) => {
                    if (n.id === node.id) {
                      return { ...n, name: e.target.value };
                    }
                    if (n.children) {
                      return { ...n, children: updateNodes(n.children) };
                    }
                    return n;
                  });
                };
                setNodes(updateNodes(nodes));
              }}
              onBlur={() => setEditingNode(null)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setEditingNode(null);
                }
              }}
              autoFocus
              className="w-32 h-6 text-sm"
            />
          ) : (
            <>
              <span
                className={cn(
                  "text-sm font-medium",
                  node.status === "group" && "text-purple-400",
                  node.status === "active" && "text-blue-400"
                )}
              >
                {node.name}
              </span>
              <Button
                variant="ghost"
                size="sm"
                className="p-0 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={(e) => {
                  e.stopPropagation();
                  setEditingNode(node.id);
                }}
              >
                <Edit2 className="w-3 h-3" />
              </Button>
            </>
          )}
          {node.route && (
            <>
              <div className="flex-1 border-b border-dashed border-accent/30 mx-2" />
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <Card className="flex items-center gap-2 px-4 py-2 bg-accent/50 backdrop-blur-sm border-accent-foreground/20">
                    <Globe className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-mono text-blue-200">
                      {node.route}
                    </span>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </>
          )}
        </div>
        {node.children && node.children.length > 0 && (
          <div className="mt-1 relative">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-accent/30" />
            {node.children.map((child) => renderNode(child, level + 1))}
          </div>
        )}
      </motion.div>
    );
  };

  const addNode = (parentId: string | null) => {
    const newFolder: Node = {
      id: Math.random().toString(),
      type: "folder",
      name: "New Folder",
      status: "default",
      children: [
        {
          id: Math.random().toString(),
          type: "file",
          name: "page.tsx",
          status: "default",
        },
      ],
    };

    if (!parentId) {
      setNodes([...nodes, newFolder]);
      return;
    }

    const updateNodes = (nodes: Node[]): Node[] => {
      return nodes.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [...(node.children || []), newFolder],
          };
        }
        if (node.children) {
          return {
            ...node,
            children: updateNodes(node.children),
          };
        }
        return node;
      });
    };

    setNodes(updateNodes(nodes));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Next.js App Router Structure
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Visualize your application's routing hierarchy
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => addNode(selectedNode)}
          className="gap-2 hover:bg-accent/50 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Page
        </Button>
      </div>
      <div className="space-y-2 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
        {nodes.map((node) => renderNode(node))}
      </div>
      <div className="mt-6 pt-6 border-t border-accent/20">
        <div className="flex gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <FolderDot className="w-4 h-4 text-purple-400" />
            <span>Route Groups</span>
          </div>
          <div className="flex items-center gap-2">
            <Folder className="w-4 h-4 text-blue-400" />
            <span>Active Routes</span>
          </div>
          <div className="flex items-center gap-2">
            <FileCode className="w-4 h-4 text-muted-foreground" />
            <span>Files</span>
          </div>
        </div>
        {selectedNode && (
          <div className="mt-4 p-4 bg-accent/20 rounded-lg">
            <h3 className="text-sm font-semibold mb-2">Selected Node Path:</h3>
            <p className="text-sm font-mono text-blue-200">
              {getNodePath(selectedNode)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
