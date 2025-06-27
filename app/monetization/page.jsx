import { HeroSectionTemp } from '../../components/heroSectionTemp';
import { title } from '../../components/primitives';
import { VideoPromoCard } from '../../components/VideoPromoCard';
import youtube from '../../assets/images/youtube.jpg';
import Discribe from '../../components/discribe';
import { Timeline } from '../../components/ui/timeline';

export const YoutubeMonetizationSteps = [
  {
    title: 'Step 1',
    content: (
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-4">
          <h1 className={title()}>Sign up</h1>
        </div>
        <p className="mt-24 max-w-2xl text-2xl font-semibold leading-10 text-neutral-500 dark:text-neutral-400">
          {`Create your HarDan Music account today and distribute music to
          multiple stores right from our dashboard. It's as easy as one, two, or
          three`}
        </p>
      </div>
    ),
  },
  {
    title: 'Step 2',
    content: (
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-4">
          <h1 className={title()}>Apply for Channel Management</h1>
        </div>
        <p className="mt-24 max-w-2xl text-2xl font-semibold leading-10 text-neutral-500 dark:text-neutral-400">
          Efficiently manage your YouTube channels and get the best out of them
          with the help of an expert team for YouTube.
        </p>
      </div>
    ),
  },
  {
    title: 'Step 3',
    content: (
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-4">
          <h1 className={title()}>Apply for YouTube Channel Monetization</h1>
        </div>
        <p className="mt-24 max-w-2xl text-2xl font-semibold leading-10 text-neutral-500 dark:text-neutral-400">
          We help you deliver your music to YouTube Content ID and monetize
          every track you own, claiming 100% music rights & royalties.
        </p>
      </div>
    ),
  },
  {
    title: 'Step 4',
    content: (
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-4">
          <h1 className={title({})}>Upload Your Music</h1>
        </div>
        <p className="mt-24 max-w-2xl text-2xl font-semibold leading-10 text-neutral-500 dark:text-neutral-400">
          Upload your music to HarDan music and provide detailed info like track
          name, artist name, artwork, and more.
        </p>
      </div>
    ),
  },
  {
    title: 'Step 5',
    content: (
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-4">
          <h1 className={title({})}>Your music on YouTube</h1>
        </div>
        <p className="mt-24 max-w-2xl text-2xl font-semibold leading-10 text-neutral-500 dark:text-neutral-400">
          We will send your songs to YouTube to get a unique Content ID to track
          your soundtracks easily.
        </p>
      </div>
    ),
  },
  {
    title: 'Step 6',
    content: (
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-4">
          <h1 className={title({})}>Let YouTube do the work for you</h1>
        </div>
        <p className="mt-24 max-w-2xl text-2xl font-semibold leading-10 text-neutral-500 dark:text-neutral-400">
          Once your music is successfully uploaded on YouTube and people start
          listening to it or using it in their videos, YouTube will
          automatically make a claim on your behalf.
        </p>
      </div>
    ),
  },
  {
    title: 'Step 7',
    content: (
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-4">
          <h1 className={title({})}>Make Money</h1>
        </div>
        <p className="mt-24 max-w-2xl text-2xl font-semibold leading-10 text-neutral-500 dark:text-neutral-400">
          We help you collect music royalties every time someone uses, streams,
          or downloads your music. You get paid directly into your bank account.
        </p>
      </div>
    ),
  },
];

export default function MonetizationPage() {
  return (
    <div className="flex flex-col gap-20">
      <div>
        <HeroSectionTemp
          showButton
          btnTitle="Get stared for free"
          componentWidth={'100%'}
          details={`Make money every single time someone plays your music anywhere on YouTube, and manage your channels effectively.`}
          heading={
            <h1 className={title({ size: 'xl' })}>
              <span className="text-lightThemePrimaryText dark:text-darkThemePrimaryText">
                YouTube Monetization{' '}
              </span>{' '}
              & Channel Management
            </h1>
          }
        />
      </div>
      <div className="px-4 sm:px-0">
        <VideoPromoCard
          showPlateforms
          details={`We support thousands of creators like you to get the revenue you deserve. With an expert team to distribute your music into YouTube Content ID, we help you optimize, manage, and monetize your YouTube channels and protect your copyrights and royalties.`}
          heading={
            <h1 className={title({ size: 'lg' })}>
              YouTube
              <span className="text-lightThemePrimaryText dark:text-darkThemePrimaryText">
                {' '}
                Monetization
              </span>{' '}
              &{' '}
              <span className="text-lightThemePrimaryText dark:text-darkThemePrimaryText">
                {' '}
                Partner Program
              </span>
            </h1>
          }
          image={youtube}
        />
      </div>
      <div className="relative w-full overflow-clip">
        <Timeline data={YoutubeMonetizationSteps} />
      </div>
      <div className="pt-10">
        <HeroSectionTemp
          showButton
          btnTitle="sign up now"
          componentWidth={'90%'}
          details={`Start monetizing your YouTube channels and earn unlimited income whenever someone  streams or uses your music. Get expert assistance to optimize and manage your YouTube   channels efficiently. Skyrocket your music career with HarDan Music Group.
`}
          heading={
            <h1 className={title({ size: 'lg' })}>
              Create Unlimited
              <span className="text-lightThemePrimaryText dark:text-darkThemePrimaryText">
                {' '}
                Music{' '}
              </span>{' '}
              & Earn Unlimited{' '}
              <span className="text-lightThemePrimaryText dark:text-darkThemePrimaryText">
                Money{' '}
              </span>{' '}
              on{' '}
              <span className="text-lightThemePrimaryText dark:text-darkThemePrimaryText">
                Youtube{' '}
              </span>
            </h1>
          }
        />
      </div>

      <div className="px-4 sm:px-0">
        <Discribe />
      </div>
    </div>
  );
}
