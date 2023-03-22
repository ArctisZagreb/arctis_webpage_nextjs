export const NAVIGATIONPATHS = [
  {
    name: "home",
    route: "/",
    show: false,
    subroutes: null,
  },
  {
    name: "services",
    route: "#",
    show: false,
    subroutes: [
      { name: "Project Management", route: "/project-management" },
      { name: "Implementation", route: "/implementation" },
      { name: "Consulting", route: "/consulting" },
    ],
  },
  {
    name: "solutions",
    route: "#",
    show: false,
    subroutes: [
      { name: "ARCHIBUS Products", route: "/archibus" },
      { name: "ROI Calculator", route: "/roi" },
    ],
  },
  {
    name: "resources",
    route: "/#resources",
    show: false,
    subroutes: [
      { name: "News", route: "/news" },
      { name: "Success Stories", route: "/success-stories" },
      { name: "FAQ", route: "/faq" },
    ],
  },
  {
    name: "about us",
    route: "/aboutus",
    show: false,
    subroutes: [
      { name: "Company", route: "/aboutus" },
      { name: "References", route: "/references" },
    ],
  },
  {
    name: "contact",
    route: "/contact",
    show: false,
    subroutes: null,
  },
];
