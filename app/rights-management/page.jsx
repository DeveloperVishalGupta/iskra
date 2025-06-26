import { Card, CardBody } from '@heroui/card';
import { FaceBook, YouTube } from '../../assets/brand-Icons';
import { HeroSectionTemp } from '../../components/heroSectionTemp';
import { title } from '../../components/primitives';
import { VideoPromoCard } from '../../components/VideoPromoCard';
import { Benefits, rightsProtect } from '../../constant';
import Image from 'next/image';
import ownership from '../../assets/images/musicPublished.jpg';
import concert from '../../assets/images/concert.jpg';
import relatable from '../../assets/images/relatable.jpg';
import Discribe from '../../components/discribe';

export default function RightsManagementPage() {
  const servicesImage = {
    Youtube: <YouTube />,
    Facebook: <FaceBook />,
  };

  const benefits = {
    ownership,
    'Flexible and reliable': relatable,
    'Dedicated Support': concert,
  };

  return (
    <div className="flex flex-col gap-20">
      <div>
        <HeroSectionTemp
          heading={
            <h1 className={title({ size: 'lg' })}>
              We take 100%{' '}
              <span className="text-lightThemePrimaryText dark:text-darkThemePrimaryText">
                responsibility{' '}
              </span>
              for your music
            </h1>
          }
          componentWidth={'90%'}
          detailsFont={20}
          btnTitle="Protect your music now"
          showButton
          details={`Managing your music rights and collecting your royalties are no more stressful. We hold a hundred percent responsibility and commitment to managing and protecting your music and royalty rights worldwide across multiple platforms.`}
        />
      </div>
      <div className="px-4 sm:px-0">
        <VideoPromoCard
          video={'/videos/musicArtist.mp4'}
          heading={
            <h1 className={title({ size: 'lg' })}>
              Your Digital Rights Manager and{' '}
              <span className="text-lightThemePrimaryText dark:text-darkThemePrimaryText">
                Partner
              </span>
            </h1>
          }
          details={`We know how hard it is for musicians and artists to create masterpieces. Is that all? No, protecting your digital music rights and royalties across various platforms globally is a hectic job. And, if you do not manage it properly, others start copying your music and distributing it for free - putting all your efforts in vain. 
Here at HarDan Music Group, we are committed to helping artists bag their rights properly and earn their revenue effortlessly. We ensure that your music is distributed with proper agreements and rights so that you earn royalties every time without fail and get compensated. That's why we've made Digital Rights Manager (DRM). DRM will allow every artist to protect their music free of charge.`}
        />
      </div>

      <div>
        <div className="mx-auto w-4/5 leading-10 sm:w-3/5">
          <h1 className={title({ size: 'lg' })}>
            Manage Your{' '}
            <span className="text-lightThemePrimaryText dark:text-darkThemePrimaryText">
              Rights{' '}
            </span>{' '}
            &{' '}
            <span className="text-lightThemePrimaryText dark:text-darkThemePrimaryText">
              protect{' '}
            </span>{' '}
            your work
          </h1>
        </div>
        <div className="mt-12">
          <div className="grid gap-5 gap-y-5 pt-5 sm:grid-cols-2 sm:gap-y-12">
            {rightsProtect.map((item, index) => {
              return (
                <div className="mx-auto w-4/5 rounded-xl border p-4 text-start shadow-lg dark:border-2 dark:border-neutral-600">
                  <div className="flex items-center gap-3">
                    <span>{servicesImage[item.title]}</span>
                    <h1
                      className={`${title({ size: 'sm' })} font-semibold text-lightThemePrimaryText dark:text-darkThemePrimaryText`}
                    >
                      {item.title}
                    </h1>
                  </div>

                  <p className="mt-4 text-lg font-semibold text-gray-500 dark:text-neutral-400">
                    {item.details}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div>
        <div className="mx-auto w-3/5 leading-10">
          <h1 className={title({ size: 'lg' })}>
            Your{' '}
            <span className="text-lightThemePrimaryText dark:text-darkThemePrimaryText">
              Benefits{' '}
            </span>
          </h1>
        </div>
        <div className="mt-12 px-4 sm:px-0">
          <div className="grid grid-cols-1 gap-5 gap-y-12 pt-5">
            {Benefits.map((item, index) => {
              return (
                <>
                  <Card
                    isBlurred
                    className="border-none bg-background/60 bg-gradient-to-tr from-[#FFB457] to-[#FF705B] sm:p-4 dark:bg-default-100/50"
                    shadow="sm"
                  >
                    <CardBody className=" ">
                      <div className="grid grid-cols-6 items-center justify-center gap-6 rounded-lg bg-white/15 p-6 md:grid-cols-12 md:gap-4 dark:bg-neutral-800/50">
                        <div className="relative col-span-6 md:col-span-4">
                          <Image
                            alt="Album cover"
                            className="overflow-hidden rounded-lg object-cover"
                            shadow="md"
                            src={benefits[item.title]}
                            width="100%"
                          />
                        </div>

                        <div className="col-span-6 flex-col md:col-span-8">
                          <div className="flex flex-col items-center justify-between gap-8">
                            <h1 className={title({})}>{item.heading}</h1>
                            <p className="text-lg font-semibold text-gray-500 dark:text-white">
                              {item.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mb-12 px-4 sm:mb-4 sm:px-0">
        <Discribe />
      </div>
    </div>
  );
}
