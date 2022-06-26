import { DocumentIcon, EmailIcon, InstagramLogo, LinkedinLogo, TwitterLogo } from "@component/Icon";

const HeaderLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "AMA", path: "/ama" },
  { id: 3, name: "Projects", path: "/projects" },
  { id: 4, name: "Blog", path: "/blog" },
];

const SocialLinks = [
  {
    id: 1,
    path: "https://www.instagram.com/radespratamaa",
    icon: <InstagramLogo classNames="h-6 w-6 fill-gray-400 dark:fill-gray-500 hover:fill-white" />,
  },
  {
    id: 2,
    path: "https://twitter.com/radespratamaa",
    icon: <TwitterLogo classNames="h-6 w-6 fill-gray-400 dark:fill-gray-500 hover:fill-white" />,
  },
  {
    id: 3,
    path: "https://www.linkedin.com/in/radespratama",
    icon: <LinkedinLogo classNames="h-6 w-6 fill-gray-400 dark:fill-gray-500 hover:fill-white" />,
  },
];

const KeepInTouchLink = [
  {
    id: 1,
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/radespratama",
    icon: <LinkedinLogo classNames="h-5 w-5 fill-white" />,
  },
  {
    id: 2,
    name: "Email",
    path: "mailto:radespratamaa@gmail.com",
    icon: <EmailIcon classNames="h-5 w-5 fill-white" />,
  },
  {
    id: 3,
    name: "Resume",
    path: "",
    icon: <DocumentIcon classNames="h-5 w-5 fill-white" />,
  },
];

export { HeaderLinks, SocialLinks, KeepInTouchLink };
