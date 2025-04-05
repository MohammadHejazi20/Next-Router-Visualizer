import { Card } from "@/components/ui/card";
import { Cpu } from "lucide-react";
import { SectionHeader } from "./section-header";

export function TechnicalImplementationSection() {
  return (
    <section>
      <SectionHeader
        icon={<Cpu className="h-5 w-5 text-[#4A90E2]" />}
        title="Technical Implementation"
      />
      <Card className="bg-[#1E1E1E] border border-[#333333] p-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-[#4A90E2] font-medium mb-3">
              State Management
            </h3>
            <p className="text-sm text-[#E0E0E0] mb-4">
              The app uses React&apos;s useState hooks to manage various aspects
              of the application state:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#2A2A2A] p-3 rounded-lg">
                <div className="font-mono text-xs text-[#9C4AE2] mb-2">
                  structure
                </div>
                <p className="text-xs text-[#A0A0A0]">
                  Stores the current routing structure being visualized
                </p>
              </div>
              <div className="bg-[#2A2A2A] p-3 rounded-lg">
                <div className="font-mono text-xs text-[#9C4AE2] mb-2">
                  expandedNodes
                </div>
                <p className="text-xs text-[#A0A0A0]">
                  Tracks which nodes are expanded in the tree view
                </p>
              </div>
              <div className="bg-[#2A2A2A] p-3 rounded-lg">
                <div className="font-mono text-xs text-[#9C4AE2] mb-2">
                  editingNode
                </div>
                <p className="text-xs text-[#A0A0A0]">
                  Tracks which node is currently being edited
                </p>
              </div>
              <div className="bg-[#2A2A2A] p-3 rounded-lg">
                <div className="font-mono text-xs text-[#9C4AE2] mb-2">
                  selectedStructure
                </div>
                <p className="text-xs text-[#A0A0A0]">
                  Tracks which example structure is currently selected
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[#4A90E2] font-medium mb-3">Key Functions</h3>
            <div className="space-y-4">
              <div className="bg-[#2A2A2A] p-4 rounded-lg border border-[#333333]">
                <h4 className="text-[#E0E0E0] font-medium mb-2">toggleNode</h4>
                <p className="text-xs text-[#A0A0A0] mb-2">
                  Expands or collapses a node in the tree view by adding or
                  removing its ID from the expandedNodes set.
                </p>
                <div className="bg-[#121212] p-3 rounded-lg overflow-x-auto">
                  <pre className="text-xs text-[#E0E0E0] font-mono">
                    {`const toggleNode = (nodeId: string) => {
  setExpandedNodes((prev) => {
    const newSet = new Set(prev);
    if (newSet.has(nodeId)) {
      newSet.delete(nodeId);
    } else {
      newSet.add(nodeId);
    }
    return newSet;
  });
};`}
                  </pre>
                </div>
              </div>

              <div className="bg-[#2A2A2A] p-4 rounded-lg border border-[#333333]">
                <h4 className="text-[#E0E0E0] font-medium mb-2">addNode</h4>
                <p className="text-xs text-[#A0A0A0] mb-2">
                  Adds a new node (layout, page, or folder) to the structure,
                  either at the root level or as a child of an existing node.
                </p>
                <div className="bg-[#121212] p-3 rounded-lg overflow-x-auto">
                  <pre className="text-xs text-[#E0E0E0] font-mono">
                    {`const addNode = (parentId: string | null, type: "layout" | "page" | "folder") => {
  const newId = Math.random().toString();
  let newNode: Node;

  // Create node based on type...

  if (!parentId) {
    setStructure((prev) => [...prev, newNode]);
    return;
  }

  const updateNodes = (nodes: Node[]): Node[] => {
    return nodes.map((node) => {
      if (node.id === parentId) {
        const updatedChildren = node.children ? [...node.children, newNode] : [newNode];
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
};`}
                  </pre>
                </div>
              </div>

              <div className="bg-[#2A2A2A] p-4 rounded-lg border border-[#333333]">
                <h4 className="text-[#E0E0E0] font-medium mb-2">renderNode</h4>
                <p className="text-xs text-[#A0A0A0] mb-2">
                  Recursively renders a node and its children, handling the
                  visual representation of different node types and states.
                </p>
                <div className="bg-[#121212] p-3 rounded-lg overflow-x-auto">
                  <pre className="text-xs text-[#E0E0E0] font-mono">
                    {`const renderNode = (node: Node, level = 0) => {
  const isExpanded = expandedNodes.has(node.id);
  const hasChildren = node.children && node.children.length > 0;
  const isActive = node.status === "active" || node.type === "page";
  const isGroup = node.status === "group" || node.type === "group";
  const isEditing = editingNode === node.id;

  // Return JSX for the node...
};`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[#4A90E2] font-medium mb-3">File Structure</h3>
            <div className="bg-[#121212] p-4 rounded-lg border border-[#333333] overflow-x-auto">
              <pre className="text-xs text-[#E0E0E0] font-mono">
                {`next-router-visualizer/
├── app/
│   ├── documentation/
│   │   └── page.tsx           # Documentation page
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── components/
│   ├── documentation/         # Documentation components
│   │   ├── section-header.tsx # Reusable section header
│   │   ├── project-overview-section.tsx
│   │   ├── data-structure-section.tsx
│   │   └── ...
│   ├── file-route-visualizer.tsx # Tree visualization component
│   ├── footer.tsx             # Footer component
│   ├── import-structure.tsx   # Import instructions component
│   ├── routing-visualizer.tsx # Main visualizer component
│   └── ui/                    # UI components (button, card, etc.)
├── lib/
│   ├── example-structures.ts  # Predefined routing examples
│   └── utils.ts               # Utility functions
└── public/                    # Static assets`}
              </pre>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
