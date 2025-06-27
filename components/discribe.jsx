'use client';

import Image from 'next/image';

import streamingServices from '../assets/images/streaming-services.png';

import { title } from './primitives';

function Discribe() {
  return (
    <div className="grid grid-cols-7 overflow-hidden rounded-2xl border-2 border-gray-400 dark:border-neutral-400">
      <div className="col-span-full flex items-center justify-center sm:col-span-4">
        <div className="flex flex-col gap-5 px-4 py-8 text-center sm:text-start md:px-12">
          <h1 className={`${title({ size: 'sm' })} font-semibold`}>
            Let MTrax Digital Media drive the success of your next release
          </h1>
          <p className="text-lg font-semibold text-gray-500 dark:text-white">
            Elevate your music with a platform designed to deliver results
          </p>
        </div>
      </div>
      <div className="col-span-full sm:col-span-3">
        <Image alt="HeroUI hero Image" src={streamingServices} />
      </div>
    </div>
  );
}

export default Discribe;
