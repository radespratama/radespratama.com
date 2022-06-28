import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import { A } from '@component/ActiveNavLink';
import { getDateWithDayAndYear } from '@lib/utils/GetDate';
import Prose from '@component/Prose';
import ImageReus from '@component/ImageComponent';
import { urlFor } from '@lib/config/sanity.config';

export default function DetailBlogs({ blogs }) {
  const { author, body, title, tags, publishedAt } = blogs;
  return (
    <article className="max-w-screen-sm mx-auto pt-20 px-3 lg:px-0">
      <A
        href="/blogs"
        classNames="px-3 py-1 text-sm bg-gray-800 rounded-md 
        tracking-tight inline-flex items-center dark:text-white"
      >
        <ArrowLeftIcon className="w-3 h-3 mr-1" />
        Back to home
      </A>
      <section className="pt-8 pb-3">
        <div
          className="hidden md:inline-flex items-center 
          text-base tracking-tight font-medium text-gray-400"
        >
          <ImageReus
            size="h-8 w-8"
            src={urlFor(author.image).url()}
            imgClass="rounded-full"
          />
          <p className="px-2">{author.name} | </p>
          <span>{getDateWithDayAndYear(publishedAt)}</span>
        </div>

        <h1 className="pt-2 text-5xl leading-tight mb-5 font-bold tracking-tighter">
          {title}
        </h1>
        <div className="pb-8 space-x-3">
          {tags?.map((item) => (
            <span
              className="bg-yellow-400 px-2 py-1 text-sm font-medium rounded-md text-gray-600"
              key={item.title}
            >
              {item.title}
            </span>
          ))}
        </div>
        <Prose content={body} />
      </section>
    </article>
  );
}
