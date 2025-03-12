import { Node } from "@/components/file-route-visualizer";

type BaseNode = {
  id: string;
  type: "folder" | "file" | "page" | "group" | "layout";
  name: string;
  status: "active" | "default";
};

const generateUniqueId = (): string => {
  return Math.random().toString(36).substring(7);
};
// TODO:
const createNewNode = (type: Node["type"], parentId: string | null): Node => {
  const baseNode: BaseNode = {
    id: generateUniqueId(),
    type,
    status: type === "page" ? "active" : "default",
    name: type === "folder" ? "new-folder" : `${type}.js`,
  };

  if (type === "folder") {
    return {
      ...baseNode,
      children: [],
    };
  }

  return {
    ...baseNode,
    route: parentId ? `/new-page/${parentId}` : "/",
  };
};

export const addNodeUtil = (
  structure: Node[],
  setStructure: (structure: Node[]) => void,
  expandedNodes: Set<string>,
  setExpandedNodes: (expandedNodes: Set<string>) => void,
  parentId: string | null,
  type: "layout" | "page" | "folder"
) => {
  const newId = Math.random().toString();
  let newNode: Node;

  switch (type) {
    case "layout":
      newNode = {
        id: newId,
        type: "layout",
        name: "layout.js",
        status: "default",
      };
      break;
    case "page":
      newNode = {
        id: newId,
        type: "page",
        name: "page.js",
        status: "active",
        route: parentId ? "/new-page" : "/",
      };
      break;
    case "folder":
      newNode = {
        id: newId,
        type: "folder",
        name: "new-folder",
        status: "default",
        children: [],
      };
      break;
  }

  if (!parentId) {
    setStructure([...structure, newNode]);
    return;
  }

  const updateNodes = (nodes: Node[]): Node[] => {
    return nodes.map((node) => {
      if (node.id === parentId) {
        const updatedChildren = node.children
          ? [...node.children, newNode]
          : [newNode];
        return {
          ...node,
          children: updatedChildren,
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

  setStructure(updateNodes(structure));

  if (parentId && !expandedNodes.has(parentId)) {
    setExpandedNodes(new Set([...expandedNodes, parentId]));
  }
};
