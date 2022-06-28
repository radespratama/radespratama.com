import React from 'react';
import PortableText from 'react-portable-text';

export default function Prose({ content }) {
  return (
    <>
      <PortableText
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        content={content}
        className="prose-base"
        serializers={{
          h2: (props) => (
            <h2 className="font-bold" {...props} />
          ),
          link: ({ href, children }) => (
            <a className="text-sky-500 hover:underline" href={href}>
              {children}
            </a>
          ),
          
        }}
      />
    </>
  );
}
