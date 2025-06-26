'use client';
import { title } from '../../components/primitives';
import { reasonsToChoose, service } from '../../constant';
import worldwideDistributionServiceImage from '../../assets/images/services-1.jpg';
import musicPublishingServiceImage from '../../assets/images/services-2.jpg';
import youTubeMonetizationServiceImage from '../../assets/images/services-3.jpg';
import ManagemenmServiceImage from '../../assets/images/services-4.jpg';
import { CircleCheck } from '../../assets/icons/icons';
import { Image } from '@heroui/image';

export default function ServicesPage() {
  const servicesImage = {
    'Worldwide Music distribution and streaming':
      worldwideDistributionServiceImage,
    'Music Publishing Worldwide': musicPublishingServiceImage,
    'YouTube Channel Monetization and CMS Services':
      youTubeMonetizationServiceImage,
    'Copyright Management': ManagemenmServiceImage,
  };
  return (
    <div className="flex flex-col gap-20">
      <div className="relative flex h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
        {/* 🔸 Background Video */}
        <video
          className="absolute left-0 top-0 z-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/DJ.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 🔸 Overlay (optional, for contrast) */}
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/40" />

        {/* 🔸 Content */}
        <div className="relative z-20 mx-4 flex flex-col items-center justify-center rounded-2xl border bg-white/15 p-10 px-4 text-center text-white sm:mx-0 sm:w-3/4 dark:bg-neutral-800/50">
          <div className="flex flex-col gap-4">
            <h1 id="musicCareer" className={`${title({ size: 'xl' })} `}>
              MTrax Digital Media, the best platform to grow your{' '}
              <span className="text-lightThemePrimaryText dark:text-darkThemePrimaryText">
                Music Career
              </span>
            </h1>
          </div>
          <p className="mt-12 max-w-2xl text-2xl font-semibold leading-10 text-neutral-200 dark:text-neutral-200">
            If you are an artist/publisher/music company owner and think YouTube
            Channel management and Music Distribution are a big deal, feel
            free to contact Us.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-20">
        {service.map((item, index) => {
          const splitTitle = item.title.split(' ');

          return (
            <div key={index} className="px-4 sm:px-0">
              <h1
                className={`${title()} mx-auto flex w-3/4 flex-wrap justify-center`}
              >
                {splitTitle.map((item, index) => {
                  const isLast = index === splitTitle.length - 1;
                  return (
                    <span
                      key={index}
                      className={`${isLast ? 'text-lightThemePrimaryText dark:text-darkThemePrimaryText' : ''} flex justify-center leading-normal`}
                    >
                      {item}&nbsp;
                    </span>
                  );
                })}
              </h1>
              <div className="my-12 grid grid-cols-7 gap-10">
                <div
                  className={`${item.imageOrder === 1 ? 'sm:order-1' : 'sm:order-2'} col-span-full sm:col-span-3`}
                >
                  <div className="rounded-2xl bg-orange-500 p-2">
                    <Image
                      className="rounded-xl shadow-sm"
                      isZoomed
                      alt={item.title}
                      src={servicesImage[item.title].src}
                    />
                  </div>
                </div>
                <div
                  className={`${item.imageOrder !== 1 ? 'order-1' : 'order-2'} col-span-full flex flex-col items-start justify-center gap-5 sm:col-span-4`}
                >
                  {item.details.map((detailItem) => {
                    return (
                      <div className="flex items-center justify-start gap-3 text-start text-xl font-normal tracking-wide">
                        <span className="">
                          <CircleCheck size={28} />
                        </span>
                        <span className="">{detailItem}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="ms:mb-0 mb-12">
        <div className="mb-8 flex flex-col justify-center gap-2">
          <h1 className={`${title()} leading-normal`}>
            More Reasons to Choose{' '}
            <span
              className={`text-lightThemePrimaryText dark:text-darkThemePrimaryText`}
            >
              MTrax Digital Media
            </span>
          </h1>
        </div>
        <div>
          <div className="grid gap-y-5 px-4 pt-5 sm:grid-cols-2 sm:gap-5 sm:gap-y-12 sm:px-0">
            {reasonsToChoose.map((item, index) => {
              return (
                <div className="mx-auto rounded-xl border p-4 text-start shadow-lg sm:w-4/5 dark:border-2 dark:border-neutral-600">
                  <h1
                    className={`${title({ size: 'sm' })} mb-4 font-semibold text-lightThemePrimaryText dark:text-darkThemePrimaryText`}
                  >
                    {item.title}
                  </h1>
                  <p className="mt-4 text-lg font-semibold text-gray-500 dark:text-white">
                    {item.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
