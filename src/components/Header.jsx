import Link from 'next/link';

import Switcher from './Switcher';
import { DevLogo, GithubIcon } from './Icon';
import ActiveNavLink, { A } from './ActiveNavLink';

import { HeaderLinks } from '@lib/utils/DataLinks';

export default function Header({ isHeader }) {
  if (isHeader) {
    return (
      <header className="w-full fixed top-0 left-0 z-30 bg-gray-950 dark:bg-white">
        <nav className="header-container">
          <div className="inline-flex items-center">
            <DevLogo classNames="h-[1.625rem] w-[1.625rem] mr-4 stroke-white dark:stroke-gray-900" />
            {HeaderLinks.map((link) => (
              <ActiveNavLink
                classNames="hidden md:inline"
                key={`Link-${link.id}`}
                href={link.path}
              >
                {link.name}
              </ActiveNavLink>
            ))}
          </div>
          <div className="inline-flex items-center justify-end space-x-3">
            <A
              href={`${process.env.NEXT_PUBLIC_GITHUB_URL}/radespratama-dev`}
              classNames="hidden sm:inline p-2 bg-gray-800 dark:bg-gray-200 rounded-lg
              transition-all duration-150 hover:rotate-[28deg]"
            >
              <GithubIcon classNames="h-4 w-4 stroke-white dark:stroke-gray-900" />
            </A>
            <Switcher />
          </div>
        </nav>
      </header>
    );
  }

  return <></>;
}
