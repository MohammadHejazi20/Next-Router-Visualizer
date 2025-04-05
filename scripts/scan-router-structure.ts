import fs from "fs";
import path from "path";

interface Node {
  id: string;
  type: "folder" | "file";
  name: string;
  children?: Node[];
  route?: string;
  status?: "active" | "group" | "default";
}

function scanDirectory(dir: string, baseRoute: string = ""): Node[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const nodes: Node[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(process.cwd(), fullPath);

    if (entry.isDirectory()) {
      const isRouteGroup =
        entry.name.startsWith("(") && entry.name.endsWith(")");
      const childNodes = scanDirectory(
        fullPath,
        isRouteGroup ? baseRoute : path.join(baseRoute, entry.name)
      );

      nodes.push({
        id: relativePath,
        type: "folder",
        name: entry.name,
        children: childNodes,
        status: isRouteGroup
          ? "group"
          : childNodes.some((child) => child.route)
          ? "active"
          : "default",
      });
    } else if (
      (entry.isFile() && entry.name.endsWith(".tsx")) ||
      entry.name.endsWith(".ts")
    ) {
      const isPage = entry.name === "page.tsx";
      nodes.push({
        id: relativePath,
        type: "file",
        name: entry.name,
        status: isPage ? "active" : "default",
        ...(isPage && { route: baseRoute || "/" }),
      });
    }
  }

  return nodes;
}

function scanRouterStructure() {
  const appDir = path.join(process.cwd(), "app");
  if (!fs.existsSync(appDir)) {
    console.error(
      'The "app" directory does not exist in the current working directory.'
    );
    process.exit(1);
  }

  const structure = scanDirectory(appDir);
  const json = JSON.stringify(structure, null, 2);

  fs.writeFileSync("router-structure.json", json);
  console.log("Router structure has been saved to router-structure.json");
}
