import React from 'react';

import { A } from '@component/ActiveNavLink';
import { CircleIcon } from '@component/Icon';

import { getDateWithDayAndYear } from '@lib/utils/GetDate';

export default function BlogContentCard({
  title,
  slug,
  shortDescription,
  publishedAt,
}) {
  return (
    <div className="blogs-content flex lg:gap-x-6">
      <div className="w-2/12 hidden lg:block">
        <span className="block text-base font-medium text-gray-400 dark:text-gray-800 -mt-1.5 text-right pr-4">
          {getDateWithDayAndYear(publishedAt) || '-'}
        </span>
      </div>
      <div className="hidden lg:flex flex-col items-center">
        <CircleIcon stroke="stroke-white" />
        <span className="bg-gray-600 dark:bg-gray-700 h-full w-px" />
      </div>
      <div className="w-full sm:w-11/12">
        <A href={`/blogs/${slug.current}`} classNames="blogs-content-card">
          <span className="block lg:hidden -mt-0.5 text-sm font-medium">
            {getDateWithDayAndYear(publishedAt) || '-'}
          </span>
          <h4 className="text-xl font-semibold mb-2 tracking-tight lg:leading-none">
            {title || '-'}
          </h4>
          <p className="leading-relaxed text-gray-400 line-clamp-2 mb-3">
            {shortDescription || '-'}
          </p>
          <span className="font-medium mt-2 underline">
            Read more
            <span className="sr-only">{title || '-'}</span>
          </span>
        </A>
      </div>
    </div>
  );
}
