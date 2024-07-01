const children = [
  {
    id: 1,
    name: "item-1",
    children: [
      { id: 4, name: "sub-1", href: "#" },
      { id: 5, name: "sub-2", href: "#" },
      { id: 6, name: "sub-3", href: "#" },
    ],
  },
  {
    id: 2,
    name: "item-2",
    children: [
      { id: 7, name: "sub-1", href: "#" },
      { id: 8, name: "sub-2", href: "#" },
      { id: 9, name: "sub-3", href: "#" },
    ],
  },
  {
    id: 3,
    name: "item-3",
    children: [
      { id: 10, name: "sub-1", href: "#" },
      { id: 11, name: "sub-2", href: "#" },
      {
        name: "sub-3",
        href: "#",
        children: [
          { id: 12, name: "sub-3.1", href: "#" },
          { id: 13, name: "sub-3.2", href: "#" },
          { id: 14, name: "sub-3.3", href: "#" },
        ],
      },
    ],
  },
];

export default children;
