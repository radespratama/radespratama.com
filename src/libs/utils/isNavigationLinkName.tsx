import {
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandReactNative,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandVercel,
} from "react-icons/tb";
import { BsInstagram, BsLinkedin, BsFileEarmarkTextFill } from "react-icons/bs";

export const HeaderLinkName = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Projects", path: "/projects" },
];

export const NavigationBottomLinkName = [
  { id: 1, path: "https://instagram.com/radespratamaa", title: "Instagram", icon: <BsInstagram /> },
  { id: 2, path: "https://linkedin.com/in/radespratama", title: "Linkedin", icon: <BsLinkedin /> },
  {
    id: 3,
    path: "https://tinyurl.com/sayhiforyou",
    title: "Resume",
    icon: <BsFileEarmarkTextFill />,
  },
];

export const SidebarLinkSocial = [
  { id: 1, path: "https://instagram.com/radespratamaa", icon: <TbBrandInstagram /> },
  { id: 2, path: "https://linkedin.com/in/radespratama", icon: <TbBrandLinkedin /> },
];

export const FooterLinkName = [
  { id: 1, path: "https://tailwindcss.com", icon: <TbBrandTailwind /> },
  { id: 2, path: "https://nextjs.org", icon: <TbBrandNextjs /> },
  { id: 3, path: "https://reactjs.org", icon: <TbBrandReactNative /> },
  { id: 4, path: "https://vercel.com", icon: <TbBrandVercel /> },
];
