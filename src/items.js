const children = [
  {
    id: 1,
    name: "Animals",
    children: [
      { id: 4, name: "Dog", href: "#" },
      { id: 5, name: "Cat", href: "#" },
      { id: 6, name: "Bird", href: "#" },
    ],
  },
  {
    id: 2,
    name: "Cars",
    children: [
      { id: 7, name: "Porsche", href: "#" },
      { id: 8, name: "Benz", href: "#" },
      { id: 9, name: "BMW", href: "#" },
    ],
  },
  {
    id: 3,
    name: "Country",
    children: [
      { id: 10, name: "France", href: "#" },
      { id: 11, name: "Germany", href: "#" },
      {
        name: "USA",
        href: "#",
        children: [
          { id: 12, name: "California", href: "#" },
          { id: 13, name: "Washington", href: "#" },
          { id: 14, name: "Texas", href: "#" },
        ],
      },
    ],
  },
];

export default children;
