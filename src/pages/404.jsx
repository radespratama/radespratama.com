import ChevronLeft from '@heroicons/react/outline/ChevronLeftIcon';

import Layout from '@component/Layout';
import { A } from '@component/ActiveNavLink';

export default function NotFoundPage() {
  return (
    <Layout
      title="Oops, your destination not found! - Rades Pratama"
      url={`${process.env.NEXT_PUBLIC_BASE_URL}/404`}
    >
      <article className="max-w-screen-xs mx-auto flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-base md:text-lg lg:text-xl tracking-tight">
          <span className="font-bold">404</span> | Oops, your destination not
          found!
        </h1>
        <div className="pt-4 border-gray-500 inline-flex items-center">
          <ChevronLeft className="w-3 h-3 mr-1" />
          <A href="/">
            <a className="tracking-tight text-sm hover:underline">
              Back to home
            </a>
          </A>
        </div>
      </article>
    </Layout>
  );
}
