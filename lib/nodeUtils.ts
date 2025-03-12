export type NodeType = "folder" | "file" | "page" | "group" | "layout";
export type Node = {
  id: string;
  type: NodeType;
  name: string;
  children?: Node[];
  route?: string;
  status?: "active" | "group" | "default";
};

type BaseNode = {
  id: string;
  type: NodeType;
  name: string;
  status: "active" | "default";
};

const generateUniqueId = (): string => Math.random().toString(36).substring(7);

const createNewNode = (type: NodeType, parentId: string | null): Node => {
  const baseNode: BaseNode = {
    id: generateUniqueId(),
    type,
    status: type === "page" ? "active" : "default",
    name: type === "folder" ? "new-folder" : `${type}.js`,
  };

  switch (type) {
    case "folder":
      return { ...baseNode, children: [] };
    default:
      return {
        ...baseNode,
        route: parentId ? `/new-page/${parentId}` : "/",
      };
  }
};

export const addNodeUtil = (
  structure: Node[],
  setStructure: (structure: Node[]) => void,
  expandedNodes: Set<string>,
  setExpandedNodes: (expandedNodes: Set<string>) => void,
  parentId: string | null,
  type: "layout" | "page" | "folder"
) => {
  const newNode = createNewNode(type, parentId);

  if (!parentId) {
    setStructure([...structure, newNode]);
    return;
  }

  const updateNodes = (nodes: Node[]): Node[] =>
    nodes.map((node) => {
      if (node.id === parentId) {
        const updatedChildren = node.children
          ? [...node.children, newNode]
          : [newNode];
        return { ...node, children: updatedChildren };
      }

      if (node.children) {
        return { ...node, children: updateNodes(node.children) };
      }

      return node;
    });

  setStructure(updateNodes(structure));

  // Update expanded nodes if necessary
  if (parentId && !expandedNodes.has(parentId)) {
    setExpandedNodes(new Set([...expandedNodes, parentId]));
  }
};
