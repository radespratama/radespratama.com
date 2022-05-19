import { InstagramLogo, LinkedinLogo, TwitterLogo } from "@component/DevIcon";

export const HeaderLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "AMA", path: "/ama" },
  { id: 3, name: "Projects", path: "/projects" },
  { id: 4, name: "Blog", path: "/blog" },
];

export const HeroLinks = [
  {
    id: 1,
    name: "Instagram",
    path: "https://www.instagram.com/radespratamaa",
    icon: (
      <InstagramLogo classNames="h-6 w-6 fill-gray-400 dark:fill-gray-500 hover:fill-white" />
    ),
  },
  {
    id: 2,
    name: "Twitter",
    path: "https://twitter.com/radespratamaa",
    icon: (
      <TwitterLogo classNames="h-6 w-6 fill-gray-400 dark:fill-gray-500 hover:fill-white" />
    ),
  },
  {
    id: 3,
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/radespratama",
    icon: (
      <LinkedinLogo classNames="h-6 w-6 fill-gray-400 dark:fill-gray-500 hover:fill-white" />
    ),
  },
];
