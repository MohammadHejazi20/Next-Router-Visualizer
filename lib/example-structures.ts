export const exampleStructures = {
  basic: {
    name: 'Basic Structure',
    description: 'A simple Next.js app with a few pages',
    nodes: [
      {
        id: '1',
        type: 'folder',
        name: 'app',
        status: 'default',
        children: [
          {
            id: '2',
            type: 'file',
            name: 'layout.tsx',
            status: 'default'
          },
          {
            id: '3',
            type: 'file',
            name: 'page.tsx',
            status: 'active',
            route: '/'
          },
          {
            id: '4',
            type: 'folder',
            name: 'about',
            status: 'active',
            children: [
              {
                id: '5',
                type: 'file',
                name: 'page.tsx',
                status: 'default'
              }
            ],
            route: '/about'
          },
          {
            id: '6',
            type: 'folder',
            name: 'blog',
            status: 'active',
            children: [
              {
                id: '7',
                type: 'file',
                name: 'page.tsx',
                status: 'default'
              }
            ],
            route: '/blog'
          }
        ]
      }
    ]
  },
  advanced: {
    name: 'Advanced Structure',
    description: 'A more complex Next.js app with nested routes and route groups',
    nodes: [
      {
        id: '1',
        type: 'folder',
        name: 'app',
        status: 'default',
        children: [
          {
            id: '2',
            type: 'file',
            name: 'layout.tsx',
            status: 'default'
          },
          {
            id: '3',
            type: 'file',
            name: 'page.tsx',
            status: 'active',
            route: '/'
          },
          {
            id: '4',
            type: 'folder',
            name: '(marketing)',
            status: 'group',
            children: [
              {
                id: '5',
                type: 'folder',
                name: 'about',
                status: 'active',
                children: [
                  {
                    id: '6',
                    type: 'file',
                    name: 'page.tsx',
                    status: 'default'
                  }
                ],
                route: '/about'
              },
              {
                id: '7',
                type: 'folder',
                name: 'blog',
                status: 'active',
                children: [
                  {
                    id: '8',
                    type: 'file',
                    name: 'page.tsx',
                    status: 'default'
                  }
                ],
                route: '/blog'
              }
            ]
          },
          {
            id: '9',
            type: 'folder',
            name: '(shop)',
            status: 'group',
            children: [
              {
                id: '10',
                type: 'folder',
                name: 'products',
                status: 'active',
                children: [
                  {
                    id: '11',
                    type: 'file',
                    name: 'page.tsx',
                    status: 'default'
                  },
                  {
                    id: '12',
                    type: 'folder',
                    name: '[productId]',
                    status: 'active',
                    children: [
                      {
                        id: '13',
                        type: 'file',
                        name: 'page.tsx',
                        status: 'default'
                      }
                    ],
                    route: '/products/[productId]'
                  }
                ],
                route: '/products'
              },
              {
                id: '14',
                type: 'folder',
                name: 'cart',
                status: 'active',
                children: [
                  {
                    id: '15',
                    type: 'file',
                    name: 'page.tsx',
                    status: 'default'
                  }
                ],
                route: '/cart'
              }
            ]
          }
        ]
      }
    ]
  }
}

