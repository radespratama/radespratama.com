import XIcon from '@heroicons/react/outline/XIcon';

import ActiveNavLink, { A } from './ActiveNavLink';
import { DevLogo, GithubIcon } from './Icon';
import { HeaderLinks } from '@lib/utils/DataLinks';

export default function Sidebar({ isOpen, isClose }) {
  return (
    <>
      <aside className={`${isOpen ? 'left-0' : '-left-full'} sidebar`}>
        <nav className="py-5 px-3 flex flex-col">
          <div className="flex flex-row items-center justify-between border-b border-gray-800 dark:border-gray-200 pb-3">
            <A href="/">
              <DevLogo classNames="h-[1.625rem] w-[1.625rem] mr-4 stroke-white dark:stroke-gray-900" />
            </A>
            <button
              type="button"
              className="cursor-pointer transition-all duration-300"
              onClick={isClose}
            >
              <XIcon className="h-[1.375rem] w-[1.375rem]" />
            </button>
          </div>
          <div className="flex flex-col space-y-6 pt-5 pb-10">
            {HeaderLinks.map((link) => (
              <ActiveNavLink key={link.id} href={link.path}>
                {link.name}
              </ActiveNavLink>
            ))}
          </div>
          <A
            href={`${process.env.NEXT_PUBLIC_GITHUB_URL}/radespratama-dev`}
            classNames="p-2 max-w-fit bg-gray-800 dark:bg-gray-200 rounded-lg
              transition-all duration-150 hover:rotate-[28deg]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon classNames="h-4 w-4 stroke-white dark:stroke-gray-900" />
          </A>
        </nav>
      </aside>
      <div
        className={`${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        } bg-gray-900/20 transition-all duration-300 ease-out fixed top-0 left-0 min-w-[100vw] min-h-screen z-[40]`}
      />
    </>
  );
}
