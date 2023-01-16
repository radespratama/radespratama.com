import { FC } from "react";
import clsx from "clsx";

import I from '@/components/Icon';

const Loading: FC = () => {
  return (
    <div
      className={clsx(
        "min-h-screen min-w-[100vw] bg-gray-950 fixed top-0 left-0",
        "flex items-center justify-center z-40"
      )}>
      <I.Loading className={clsx('h-8 w-8 animate-spin')} />
    </div>
  );
};

export default Loading;
