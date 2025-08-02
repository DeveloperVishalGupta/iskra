import React from 'react';
import { title } from './primitives';

export function TextOnGlass({ primaryPoint, heading, detail }) {
  return (
    <div
      className="relative border-2 p-10 md:py-16 rounded-2xl bg-[#00000045] z-20 text-center mx-4 sm:mx-0 sm:w-3/4 md:w-3/4
                 flex flex-col items-center justify-center text-white px-4"
    >
      <div className="flex flex-col gap-4">
        <h1
          style={{ lineHeight: 1.15 }}
          id="musicCareer"
          className={`${title({ size: 'lg' })} w-4/5 text-primaryBlue mx-auto leading-loose`}
        >
          {primaryPoint}
          {/* ?.split(' ')?.map((item, index) => {
            return index === 0 ? (
              <span
                key={index}
                className="dark:text-darkThemePrimaryText text-lightThemePrimaryText"
              >
                {item}
              </span>
            ) : (
              <span
                key={index}
                className="dark:text-darkThemeSecondryText text-darkThemeSecondryText"
              >
                {' '}
                {item}
              </span>
            );
          })} */}
          {/* {heading} */}
        </h1>
      </div>
      <p className="text-2xl w-4/5 leading-10 mt-12 font-semibold dark:text-neutral-200 text-neutral-200">
        {detail}
      </p>
    </div>
  );
}

// export function PageHeroSection({ heading, detail, bgImage }) {
//   return (
//     <div className={ `flex justify-center h-[calc(100vh-5.25rem)] flex-col items-center bg-[${bgImage}]`}>
//       <div className="flex flex-col gap-4" id="distributeYourMusic">
//         <h1
//           style={{ lineHeight: 1.15 }}
//           className={`${title({ size: 'lg' })} w-4/5 mx-auto`}
//         >
//           {heading}{' '}
//         </h1>
//       </div>
//       <p className="text-2xl w-4/5 mx-auto leading-10 mt-24 font-semibold dark:text-neutral-400 text-neutral-500">
//         {detail}
//       </p>
//     </div>
//   );
// }
export function PageHeroSection({ heading, detail, bgImage }) {
  return (
    <div
      className="flex justify-center h-[calc(100vh-5.25rem)] flex-col items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className="flex flex-col gap-4" id="distributeYourMusic">
        <h1
          style={{ lineHeight: 1.15 }}
          className={`${title({ size: 'lg' })} w-4/5 mx-auto`}
        >
          {heading}
        </h1>
      </div>
      <p className="text-2xl w-4/5 mx-auto leading-10 mt-24 font-semibold dark:text-neutral-400 text-neutral-500">
        {detail}
      </p>
    </div>
  );
}
