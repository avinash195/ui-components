export type FileData = Readonly<{
  id: number;
  name: string;
  children?: ReadonlyArray<FileData>;
}>;

export const FileExporerData = [
  {
    id: 2,
    name: "src",
    children: [
      {
        id: 3,
        name: "components",
        children: [
          { id: 4, name: "Button.tsx" },
          { id: 5, name: "Input.tsx" },
          { id: 6, name: "Button.test.tsx" }
        ]
      },
      {
        id: 7,
        name: "utils",
        children: [
          { id: 8, name: "helpers.ts" },
          { id: 9, name: "api-client.ts" }
        ]
      },
      { id: 10, name: "index.ts" }
    ]
  },
  {
    id: 11,
    name: "public",
    children: [
      { id: 12, name: "index.html" },
      { id: 13, name: "favicon.ico" },
      { id: 14, name: "assets", children: [] }
    ]
  },
  {
    id: 15,
    name: ".github",
    children: [
      {
        id: 16,
        name: "workflows",
        children: [
          { id: 17, name: "ci-cd.yml" },
          { id: 18, name: "tests.yml" }
        ]
      }
    ]
  },
  { id: 19, name: "package.json" },
  { id: 20, name: "tsconfig.json" },
  { id: 21, name: "README.md" },
  {
    id: 22,
    name: "docs",
    children: [
      { id: 23, name: "architecture.md" },
      { id: 24, name: "setup-guide.md" }
    ]
  }
];