import { title } from '../../components/primitives';
import { Timeline } from '../../components/ui/timeline';
import { VideoPromoCard } from '../../components/VideoPromoCard';
import { publishingRoyalties } from '../../constant';
import musicPublished from '../../assets/images/musicPublished.jpg';
import { HeroSectionTemp } from '../../components/heroSectionTemp';

export default function PublishingPage() {
  const data = [
    {
      title: 'Step 1',
      content: (
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col gap-4">
            <h1 className={title()}>signup & Register</h1>
          </div>
          <p className="mt-24 max-w-2xl text-2xl font-semibold leading-10 text-neutral-500 dark:text-neutral-400">
            Just sign up and register your account with HarDan music Group. Now,
            you can access our easy-to-use dashboard and 100+ stores to
            distribute your music worldwide.
          </p>
        </div>
      ),
    },
    {
      title: 'Step 2',
      content: (
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col gap-4">
            <h1 className={title()}>Collect your Royalties</h1>
          </div>
          <p className="mt-24 max-w-2xl text-2xl font-semibold leading-10 text-neutral-500 dark:text-neutral-400">
            Once you register your songs, leave the rest to us. We will help you
            collect all your publishing royalties from multiple stores on your
            behalf so that you don’t miss any.
          </p>
        </div>
      ),
    },
    {
      title: 'Step 3',
      content: (
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col gap-4">
            <h1 className={title()}>
              Pitch your Music for Radio, TV, Films, Ads, etc.
            </h1>
          </div>
          <p className="mt-24 max-w-2xl text-2xl font-semibold leading-10 text-neutral-500 dark:text-neutral-400">
            Thanks to our sync licensing team! Now you can relax as our music
            pitching experts will help you pitch your music on the right
            platforms. Now, all you need to do is to embrace a global fanbase.
          </p>
        </div>
      ),
    },
    {
      title: 'Step 4',
      content: (
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col gap-4">
            <h1 className={title({})}>Get Paid</h1>
          </div>
          <p className="mt-24 max-w-2xl text-2xl font-semibold leading-10 text-neutral-500 dark:text-neutral-400">
            Finally! Here is the fun part. You start earning publishing
            royalties automatically into your account whenever someone streams,
            downloads, or plays your music.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="flex flex-col gap-y-20">
      <HeroSectionTemp
        heading={
          <div className="flex flex-col gap-4">
            <h1 className={title({ size: 'xl' })}>
              Publish Your{' '}
              <span className="text-lightThemePrimaryText dark:text-darkThemePrimaryText">
                Music
              </span>
            </h1>
            <h1 className={`${title({ size: 'xl' })}`}>
              Make{' '}
              <span className="text-lightThemePrimaryText dark:text-darkThemePrimaryText">
                Money
              </span>
            </h1>
          </div>
        }
        details={`Earn money for the songs you write or compose. Publish your songs
          worldwide with us and collect all the songwriting royalties you
          deserve.`}
      />
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-4">
          <h1 className={title({})}>
            How can I{' '}
            <span className="text-lightThemePrimaryText dark:text-darkThemePrimaryText">
              publish
            </span>{' '}
            my music?
          </h1>
        </div>
        <div className="relative w-full overflow-clip">
          <Timeline data={data} />
        </div>
      </div>

      <div>
        <div className="mb-8 flex flex-col justify-center gap-2">
          <h1 className={`${title()} `}>
            Music{' '}
            <span className="text-lightThemePrimaryText dark:text-darkThemePrimaryText">
              Publishing Royalties
            </span>{' '}
            You Get{' '}
          </h1>
        </div>
        <div>
          <div className="grid gap-5 gap-y-5 pt-5 sm:grid-cols-2 sm:gap-y-12">
            {publishingRoyalties.map((item, index) => {
              return (
                <div className="mx-auto w-4/5 rounded-xl border p-4 text-start shadow-lg dark:border-2 dark:border-neutral-600">
                  <h1
                    className={`${title({ size: 'sm' })} mb-4 font-semibold text-lightThemePrimaryText dark:text-darkThemePrimaryText`}
                  >
                    {item.title}
                  </h1>
                  <p className="mt-4 text-lg font-semibold text-gray-500 dark:text-neutral-400">
                    {item.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-0">
        <VideoPromoCard
          image={musicPublished}
          heading={
            <h1 className={`${title({ size: 'sm' })} font-semibold`}>
              Your Best Music
              <span className="text-lightThemePrimaryText dark:text-darkThemePrimaryText">
                {' '}
                Publishing Partner{' '}
              </span>
            </h1>
          }
          details={`Are you an artist? No more worries about publishing music or collecting royalties. We help you publish music on the right platform and get you the royalties you deserve.`}
        />
      </div>
      <div className="">
        <HeroSectionTemp
          heading={
            <div className="flex flex-col gap-4">
              <h1 className={title({ size: 'lg' })}>Collect your publishing</h1>
              <h1 className={`${title({ size: 'lg' })}`}>
                royalties with{' '}
                <span className="text-lightThemePrimaryText dark:text-darkThemePrimaryText">
                  {' '}
                  authority
                </span>
              </h1>
            </div>
          }
          componentWidth={'90%'}
          detailsFont={20}
          details={`Once you appoint HarDan Music Group as your publishing partner, you focus more on creating some amazing music and we focus on publishing them on the right platform and managing your music rights effectively.`}
        />
      </div>
    </div>
  );
}
