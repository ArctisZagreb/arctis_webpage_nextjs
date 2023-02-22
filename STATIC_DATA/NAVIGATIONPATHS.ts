export const NAVIGATIONPATHS = [
  {
    name: "home",
    route: "/",
    show: false,
    subroutes: null,
  },
  {
    name: "services",
    route: "/services",
    show: false,
    subroutes: [
      { name: "Project Management", route: "/projectmanagement" },
      { name: "Implementation", route: "/implementation" },
      { name: "Consulting", route: "/consulting" },
    ],
  },
  {
    name: "solutions",
    route: "/solutions",
    show: false,
    subroutes: [
      { name: "ARCHIBUS Products", route: "/archibus" },
      { name: "ARCHIBUS Plans", route: "/" },
      { name: "ROI Calculator", route: "/roi" },
    ],
  },
  {
    name: "resources",
    route: "/resources",
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
      { name: "Tech", route: "/" },
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
