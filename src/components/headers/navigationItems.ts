interface NavItem {
  title: string;
  path: string;
  icon: string;
  children?: { title: string; path: string }[];
  target?: string; //add target: "_blank" to open in new tab
}

export const navigationItems: NavItem[] = [
  {
    title: "Home",
    path: "#home",
    icon: "home",
  },
  {
    title: "About Us",
    path: "#about",
    icon: "about",
  },
  {
    title: "Our Services",
    path: "#services",
    icon: "blog",
  },
  {
    title: "Community",
    path: "#community",
    icon: "projects",
  },
  {
    title: "Reviews",
    path: "#reviews",
    icon: "reviews",
  },

  // {
  //   title: "Contact Us",
  //   path: "/contact",
  //   icon: "contactus",
  // },
];
