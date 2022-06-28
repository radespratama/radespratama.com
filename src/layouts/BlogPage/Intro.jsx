import { useEffect, useState } from 'react';

import BlogContentCard from './BlogContentCard';
import { BlogCardSkeleton } from '@component/Skeleton';

export default function Intro({ blogs }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (blogs) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
    return () => clearTimeout();
  }, [blogs]);

  const skeletonContent = Array(4).fill();

  return (
    <article className="max-w-screen-xl mx-auto pt-20 px-2 lg:px-4 min-h-screen">
      <section className="flex flex-col items-center">
        <div className="text-center border-b border-gray-800 dark:border-gray-200 mb-10 lg:mb-14">
          <h2 className="text-3xl font-bold tracking-tight">Hi, Blogs</h2>
          <p className="text-sm md:text-base font-medium text-gray-400 pt-1 pb-5">
            You can see and read all my writings below.
          </p>
        </div>
      </section>
      <section className="max-w-screen-sm mx-auto">
        {loading ? (
          skeletonContent.map((index) => (
            <BlogCardSkeleton key={`${index}-${Math.random()}`} />
          ))
        ) : (
          <>
            {blogs?.map((item) => {
              const { title, slug, shortDescription, publishedAt } = item;
              return (
                <BlogContentCard
                  key={item._id}
                  title={title}
                  shortDescription={shortDescription}
                  slug={slug}
                  publishedAt={publishedAt}
                />
              );
            })}
          </>
        )}
      </section>
    </article>
  );
}
