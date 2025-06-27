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
      className={`${componentWidth && 'mx-auto'} flex h-[calc(100vh-6.625rem)] flex-col items-center justify-center`}
      style={{ width: componentWidth }}
    >
      {heading}
      <p
        className={`${!detailsFont && 'text-2xl'} ${!componentWidth && 'max-w-2xl'} mt-16 font-semibold leading-10 text-neutral-500 dark:text-neutral-400`}
        style={{ fontSize: detailsFont }}
      >
        {details}
      </p>
      {showButton && (
        <div>
          <Button
            className="my-16 bg-orange-500 px-20 text-lg"
            radius="sm"
            size="lg"
          >
            {btnTitle}
          </Button>
        </div>
      )}
    </div>
  );
}
