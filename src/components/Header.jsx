import { HeaderLinks } from "@lib/HeaderLinks";
import ActiveLink from "./ActiveLink";
import { DevLogo, GithubIcon } from "./DevIcon";
import Switcher from "./Switcher";

export default function Header() {
  return (
    <header className="fixed w-full top-0 left-0 bg-gray-950 dark:bg-white">
      <nav className="container mx-auto py-4 grid grid-cols-2 px-4">
        <div className="flex items-center justify-start">
          <DevLogo classNames="h-8 w-8 stroke-white dark:stroke-gray-950 mr-3 hidden lg:inline" />
          {HeaderLinks.map(({ id, name, path }) => (
            <ActiveLink key={id} href={path}>
              {name}
            </ActiveLink>
          ))}
        </div>
        <div className="flex items-center justify-end space-x-3 md:space-x-6">
          <a
            target="_blank"
            href="https://github.com/radespratama/radespratama-dev"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800 dark:bg-gray-200 rounded-lg"
          >
            <GithubIcon classNames="h-6 w-6 stroke-white dark:stroke-gray-950" />
          </a>
          <Switcher />
        </div>
      </nav>
    </header>
  );
}
