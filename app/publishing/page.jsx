import { title } from '../../components/primitives';
import { Timeline } from '../../components/ui/timeline';
import { publishingRoyalties } from '../../constant';
import { HeroSectionTemp } from '../../components/heroSectionTemp';

export default function PublishingPage() {
  const data = [
    {
      title: 'Step 1',
      content: (
        <div className="flex justify-center  flex-col items-center ">
          <div className="flex flex-col gap-4">
            <h1 className={title()}>signup & Register</h1>
          </div>
          <p className="text-2xl max-w-2xl leading-10 mt-24 font-semibold dark:text-neutral-400 text-neutral-500">
            Just sign up and register your account with ous Group. Now, you can
            access our easy-to-use dashboard and 100+ stores to distribute your
            music worldwide.
          </p>
        </div>
      ),
    },
    {
      title: 'Step 2',
      content: (
        <div className="flex justify-center  flex-col items-center ">
          <div className="flex flex-col gap-4">
            <h1 className={title()}>Collect your Royalties</h1>
          </div>
          <p className="text-2xl max-w-2xl leading-10 mt-24 font-semibold dark:text-neutral-400 text-neutral-500">
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
        <div className="flex justify-center  flex-col items-center ">
          <div className="flex flex-col gap-4">
            <h1 className={title()}>
              Pitch your Music for Radio, TV, Films, Ads, etc.
            </h1>
          </div>
          <p className="text-2xl max-w-2xl leading-10 mt-24 font-semibold dark:text-neutral-400 text-neutral-500">
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
        <div className="flex justify-center  flex-col items-center ">
          <div className="flex flex-col gap-4">
            <h1 className={title({})}>Get Paid</h1>
          </div>
          <p className="text-2xl max-w-2xl leading-10 mt-24 font-semibold dark:text-neutral-400 text-neutral-500">
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
      <div className="flex flex-col items-center ">
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
        <div className="flex flex-col gap-2 justify-center mb-8">
          <h1 className={`${title()} `}>
            Music{' '}
            <span className="text-lightThemePrimaryText dark:text-darkThemePrimaryText">
              Publishing Royalties
            </span>{' '}
            You Get{' '}
          </h1>
        </div>
        <div>
          <div className="grid sm:grid-cols-2 gap-5 pt-5 gap-y-5 sm:gap-y-12">
            {publishingRoyalties.map((item, index) => {
              return (
                <div
                  key={index}
                  className="text-start w-4/5 shadow-lg p-4 rounded-xl dark:border-neutral-600 dark:border-2 border mx-auto"
                >
                  <h1
                    className={`${title({ size: 'sm' })} font-semibold mb-4  text-lightThemePrimaryText dark:text-darkThemePrimaryText  `}
                  >
                    {item.title}
                  </h1>
                  <p className="text-lg mt-4 font-semibold dark:text-neutral-400 text-gray-500">
                    {item.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
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
