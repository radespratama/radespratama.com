import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import wtl from "windsplit";

import Card from "@/components/Card";
const Skeleton = dynamic(() => import("@/components/Skeleton"));

import { IMiniCard } from "@/types/Response";
import { urlFor } from "@/libs/config/sanity.config";

const ContentList: React.FC<{ project: [IMiniCard] }> = ({ project }) => {
  const [isSkeleton, setIsSkeleton] = useState<boolean>(true);

  useEffect(() => {
    if (project) {
      setTimeout(() => {
        setIsSkeleton(false);
      }, 3000);
    }
  }, [project]);

  const skeletonCount = Object.keys(project);

  const tw = {
    container: wtl(`
      max-w-screen-md mx-auto grid
      grid-cols-1 xs:grid-cols-2
      sm:grid-cols-3 gap-6 px-2
      my-10
    `),
  };
  return (
    <section className={tw.container}>
      {isSkeleton ? (
        skeletonCount.map((index) => (
          <Skeleton key={`${index}-${Math.random()}`} />
        ))
      ) : (
        <>
          {project.map((item) => (
            <Card
              key={item._id}
              src={urlFor(item.mainImage).url()}
              demoUrl={item.demoUrl}
              repository={item.repository}
              description={item.shortDescription}
              title={item.title}
              tag={item.tag}
            />
          ))}
        </>
      )}
    </section>
  );
};

export default ContentList;
