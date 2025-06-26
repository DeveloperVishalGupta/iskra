'use client';
// import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { cn } from '../../lib/utils';
import { Button } from '@heroui/button';
import {
  Amazon,
  Apple,
  Deezer,
  Music,
  Spotify,
  YouTube,
} from '../../assets/brand-Icons';
import Link from 'next/link';

export const HoverEffect = ({ items, className, page }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  const musicPlateformsIcon = {
    Spotify: <Spotify width={48} />,
    'Apple Music': <Apple />,
    'Amazon Music': <Amazon />,
    'YouTube Music': <YouTube />,
    Deezer: <Deezer />,
    other: <Music />,
  };

  return (
    <div
      className={cn(
        'grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3',
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link || '#'}
          key={idx}
          className="group relative block h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-neutral-300/[0.3] hover:border-0 dark:bg-slate-800/[0.8]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card
            className={`border-2 bg-neutral-200 hover:border-0 dark:bg-neutral-900`}
          >
            <CardTitle className={`text-black dark:text-white`}>
              {page === 'distribution' ? (
                <div className="flex items-center justify-center gap-3">
                  <span>
                    {musicPlateformsIcon[item.title] ||
                      musicPlateformsIcon.other}
                  </span>
                  <span>{item.title}</span>
                </div>
              ) : (
                item.title
              )}
            </CardTitle>
            {page !== 'distribution' && (
              <div className="my-10 flex items-center justify-center">
                <CardTitle className={`m-0 text-black dark:text-white`}>
                  {item.price}
                </CardTitle>
                <CardDescription
                  className={`m-0 text-neutral-500 dark:text-neutral-200`}
                >
                  {'/'}
                </CardDescription>
                <CardDescription
                  className={`m-0 text-neutral-500 dark:text-neutral-400`}
                >
                  {item.duration}
                </CardDescription>
              </div>
            )}

            <CardDescription
              className={`text-neutral-500 dark:text-neutral-400`}
            >
              {item.description}
            </CardDescription>

            {page !== 'distribution' && (
              <Button variant="ghost" className="mt-10">
                Send message
              </Button>
            )}
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      // key={}
      className={cn(
        'relative z-20 h-full w-full overflow-hidden rounded-2xl border border-transparent bg-black p-4 group-hover:border-slate-700 dark:border-white/[0.2]',
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn('mt-4 font-bold tracking-wide text-zinc-100', className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        'mt-8 text-sm leading-relaxed tracking-wide text-zinc-400',
        className
      )}
    >
      {children}
    </p>
  );
};
