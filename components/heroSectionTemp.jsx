'use client';
import { Button } from '@heroui/button';

export function HeroSectionTemp({
  heading,
  details,
  detailsFont,
  componentWidth,
  btnTitle = 'MTrax Digital Media',
  showButton = false,
}) {
  return (
    <div
      style={{ width: componentWidth }}
      className={`${componentWidth && 'mx-auto'} flex h-[calc(100vh-6.625rem)] flex-col items-center justify-center`}
    >
      {heading}
      <p
        style={{ fontSize: detailsFont }}
        className={`${!detailsFont && 'text-2xl'} ${!componentWidth && 'max-w-2xl'} mt-16 font-semibold leading-10 text-neutral-500 dark:text-neutral-400`}
      >
        {details}
      </p>
      {showButton && (
        <div>
          <Button
            className="my-16 bg-orange-500 px-20 text-lg"
            size="lg"
            radius="sm"
          >
            {btnTitle}
          </Button>
        </div>
      )}
    </div>
  );
}
