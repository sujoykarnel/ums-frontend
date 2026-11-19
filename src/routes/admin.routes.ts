const prefix = "/admin";

export const adminRouters = [
  {
    title: "Management",
    items: [
      {
        title: "Overview",
        url: `${prefix}`,
      },
      {
        title: "Univisity",
        url: `${prefix}/university`,
      },
      {
        title: "Department",
        url: `${prefix}/department`,
      },
      {
        title: "Program",
        url: `${prefix}/program`,
      },
      {
        title: "Instructor",
        url: `${prefix}/instructor`,
      },
      {
        title: "Course",
        url: `${prefix}/course`,
      },
      {
        title: "Semester",
        url: `${prefix}/semester`,
      },
      {
        title: "Offering Course",
        url: `${prefix}/offering-course`,
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
