import React from "react";
import ImageReus from "@component/ImageReus";
import { HeroLinks } from "@lib/HeaderLinks";

export default function Hero() {
  return (
    <article className="container mx-auto flex space-x-4 pt-14 lg:pt-20">
      <div className="w-full lg:w-3/4">
        <p className="text-base-rsv tracking-normal">Hi, Im</p>
        <h1 className="text-6xl-rsv my-2 font-bold tracking-[-0.06em] w-fit">
          Putu Rades Pratama.
        </h1>
        <p className="text-lg-rsv tracking-normal font-medium mb-3 lg:mb-7">
          Junior Software Developer, Blogger and a Student.
        </p>
        <p className="text-base-rsv tracking-tight max-w-lg font-medium text-gray-400 dark:text-gray-500">
          ⚡ Building Web apps, proficient in Frontend. Creating a tutorial web
          components in{" "}
          <a
            href="https://www.instagram.com/devplayhouse/"
            className="underline hover:text-white dark:hover:text-gray-950"
            target="_blank"
            rel="noopener noreferrer"
          >
            IG.
          </a>{" "}
          Likes exploring open source software and Writing articles on my blog
          sometimes.
        </p>

        <div className="mt-8 flex space-x-7">
          {HeroLinks.map(({ id, path, icon }) => (
            <a key={id} href={path} className="transition-all duration-100 hover:scale-125 ease" target="_blank" rel="noopener noreferrer">
              {icon}
            </a>
          ))}
        </div>
      </div>
      <div className="w-1/4 hidden sm:inline">
        <ImageReus
          src={
            `https://avatars.githubusercontent.com/u/56097757?v=4` ??
            "/static/images/profile-me.webp"
          }
          alt="Profile"
          size="h-36 w-36 md:w-40 md:h-40"
          imgClass="rounded-full"
        />
      </div>
    </article>
  );
}
