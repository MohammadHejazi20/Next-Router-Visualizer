import { Node } from "./nodeUtils";

export const exampleStructures: {
  [key: string]:
    | {
        name: string;
        description?: string;
        component?: string;
        nodes: Node[];
      }
    | {
        name: string;
        description?: string;
        component?: string;
      };
} = {
  basic: {
    name: "Basic App Router Structure",
    description: "A simple Next.js app with basic routing",
    nodes: [
      {
        id: "1",
        type: "folder",
        name: "app",
        children: [
          {
            id: "2",
            type: "file",
            name: "layout.js",
          },
          {
            id: "3",
            type: "page",
            name: "page.js",
            route: "/",
            status: "active",
          },
          {
            id: "4",
            type: "folder",
            name: "blog",
            children: [
              {
                id: "5",
                type: "page",
                name: "page.js",
                route: "/blog",
                status: "active",
              },
            ],
          },
        ],
      },
    ],
  },
  marketing: {
    name: "Marketing & Shop Structure",
    description: "Example with route groups for marketing and shop sections",
    nodes: [
      {
        id: "1",
        type: "folder",
        name: "app",
        children: [
          {
            id: "2",
            type: "file",
            name: "layout.js",
          },
          {
            id: "3",
            type: "page",
            name: "page.js",
            route: "/",
            status: "active",
          },
          {
            id: "4",
            type: "group",
            name: "(marketing)",
            status: "group",
            children: [
              {
                id: "5",
                type: "folder",
                name: "about",
                children: [
                  {
                    id: "6",
                    type: "page",
                    name: "page.js",
                    route: "/about",
                    status: "active",
                  },
                ],
              },
              {
                id: "7",
                type: "folder",
                name: "blog",
                children: [
                  {
                    id: "8",
                    type: "page",
                    name: "page.js",
                    route: "/blog",
                    status: "active",
                  },
                ],
              },
            ],
          },
          {
            id: "9",
            type: "group",
            name: "(shop)",
            status: "group",
            children: [
              {
                id: "10",
                type: "folder",
                name: "account",
                children: [
                  {
                    id: "11",
                    type: "page",
                    name: "page.js",
                    route: "/account",
                    status: "active",
                  },
                ],
              },
              {
                id: "12",
                type: "folder",
                name: "products",
                children: [
                  {
                    id: "13",
                    type: "page",
                    name: "page.js",
                    route: "/products",
                    status: "active",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  parallel: {
    name: "Parallel Routes",
    description: "Example of parallel routes with @folder convention",
    nodes: [
      {
        id: "1",
        type: "folder",
        name: "app",
        children: [
          {
            id: "2",
            type: "file",
            name: "layout.js",
          },
          {
            id: "3",
            type: "page",
            name: "page.js",
            route: "/",
            status: "active",
          },
          {
            id: "4",
            type: "folder",
            name: "dashboard",
            children: [
              {
                id: "5",
                type: "file",
                name: "layout.js",
              },
              {
                id: "6",
                type: "page",
                name: "page.js",
                route: "/dashboard",
                status: "active",
              },
              {
                id: "7",
                type: "folder",
                name: "@analytics",
                children: [
                  {
                    id: "8",
                    type: "page",
                    name: "page.js",
                    route: "/dashboard/@analytics",
                    status: "active",
                  },
                ],
              },
              {
                id: "9",
                type: "folder",
                name: "@team",
                children: [
                  {
                    id: "10",
                    type: "page",
                    name: "page.js",
                    route: "/dashboard/@team",
                    status: "active",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  intercepting: {
    name: "Intercepting Routes",
    description: "Example of intercepting routes with (.) convention",
    nodes: [
      {
        id: "1",
        type: "folder",
        name: "app",
        children: [
          {
            id: "2",
            type: "file",
            name: "layout.js",
          },
          {
            id: "3",
            type: "page",
            name: "page.js",
            route: "/",
            status: "active",
          },
          {
            id: "4",
            type: "folder",
            name: "blog",
            children: [
              {
                id: "5",
                type: "page",
                name: "page.js",
                route: "/blog",
                status: "active",
              },
              {
                id: "6",
                type: "folder",
                name: "[slug]",
                children: [
                  {
                    id: "7",
                    type: "page",
                    name: "page.js",
                    route: "/blog/[slug]",
                    status: "active",
                  },
                ],
              },
              {
                id: "8",
                type: "folder",
                name: "(.)preview",
                children: [
                  {
                    id: "9",
                    type: "folder",
                    name: "[slug]",
                    children: [
                      {
                        id: "10",
                        type: "page",
                        name: "page.js",
                        route: "/blog/preview/[slug]",
                        status: "active",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  import: {
    name: "Import Your Own Structure",
    description: "Generate and import your Next.js app structure",
    component: "ImportStructure",
  },
};
