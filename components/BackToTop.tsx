import React from 'react';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

type Props = {};

function BackToTop({}: Props) {
  return (
    <Link href="#hero">
      <div className="fixed right-0 left-0 bottom-0 flex px-5 py-6 md:left-auto md:justify-end object-cover">
        <div className="pointer-events-none fixed right-0 left-0 bottom-0 h-48"></div>
        <button
          type="button"
          className="whitespace-nowrap uppercase rounded-full bg-white px-4 py-3 shadow border border-white bg-opacity-0  text-gray-300 hover:bg-gray-200 hover:text-black z-10 flex w-full items-center justify-center gap-3 transition duration-300 md:w-auto opacity-100 text-sm font-semibold"
        >
          <ArrowUpCircleIcon className="w-6 h-6" />
          Back to top
        </button>
      </div>
    </Link>
  );
}

export default BackToTop;
