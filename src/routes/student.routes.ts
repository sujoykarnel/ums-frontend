const prefix = "/student";

export const studentRouters = [
  {
    title: "Management",
    items: [
      {
        title: "Overview",
        url: `${prefix}`,
      },
      {
        title: "Add Instructor",
        url: `${prefix}/add-instructor`,
      },
    ],
  },
  {
    title: "Settings",
    url: "#",
    items: [
      {
        title: "Routing",
        url: "#",
      },
      {
        title: "Data Fetching",
        url: "#",
        isActive: true,
      },
    ],
  },
];
