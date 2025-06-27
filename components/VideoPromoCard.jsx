'use client';
import Image from 'next/image';

import { Amazon, Spotify, YouTube } from '../assets/brand-Icons';

import { title } from './primitives';

export function VideoPromoCard({
  image,
  video,
  heading,
  details,
  showPlateforms = false,
}) {
  return (
    <div className="grid grid-cols-7 overflow-hidden rounded-2xl border-2 border-gray-400 dark:border-neutral-400">
      <div className="col-span-full sm:col-span-3">
        {video && (
          <video autoPlay loop muted playsInline className="h-full w-full">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {image && (
          <Image
            alt="HeroUI hero Image"
            className="!rounded-none"
            src={image}
          />
        )}
      </div>
      <div className="col-span-full flex items-center justify-center sm:col-span-4">
        <div className="flex flex-col gap-5 px-4 py-8 sm:px-12">
          {heading}
          <p className="text-lg font-semibold text-gray-500 dark:text-white">
            {details}
          </p>
          {showPlateforms && (
            <div className="mt-5 flex-wrap items-center justify-around sm:flex">
              {['YouTube', 'Amazon', 'Spotify'].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="mb-4 flex items-center justify-center gap-3 sm:mb-0 sm:justify-start sm:gap-1"
                  >
                    {item === 'YouTube' ? (
                      <YouTube />
                    ) : item === 'Amazon' ? (
                      <Amazon />
                    ) : (
                      <Spotify />
                    )}
                    <h1 className={`${title({ size: 'sm' })} font-semibold`}>
                      {item}
                    </h1>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
