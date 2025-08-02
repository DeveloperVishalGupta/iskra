'use client';
import { title } from '../../components/primitives';
import { musicPlatforms, whatOffers } from '../../constant';
import singer from '../../assets/images/singer.jpg';
import { HoverEffect } from '../../components/ui/card-hover-effect';
// import { aboutUsHeroImage } from '../../assets';

import {
  FaceBook,
  Instagram,
  Spotify,
  Ticktock,
  YouTube,
} from '../../assets/brand-Icons';
import { VideoPromoCard } from '../../components/VideoPromoCard';
import { TextOnGlass } from '../../components/TextOnGlass';
import Image from 'next/image';
// import { aboutUsHeroImage } from '../../assets';
import aboutUsHeroImage from '../../assets/images/concert.jpg';
import { Tab, Tabs } from '@heroui/tabs';
import { Card, CardBody, CardHeader } from '@heroui/card';
// import worldwideDistributionServiceImage from '../../assets/images/services-1.jpg';
import bulbIcon from '../../assets/images/bulb-icon.png';

export default function AboutPage() {
  let tabs = [
    {
      id: 'about',
      label: 'About',
      content: {
        introduction: [
          'Pratham is an innovative learning organization created to improve the quality of education in India. As one of the largest non-governmental organizations in the country, Pratham focuses on high-quality, low-cost, and replicable interventions to address gaps in the education system. Established in 1995 to provide education to children in the slums of Mumbai, Pratham has grown both in scope and geographical coverage.',
          'Pratham means "first" in Sanskrit. True to its name, it is the first major organization to achieve lasting, wide-scale success in India\'s educational landscape. This has been made possible due to various policies and strategies adopted by the organization.',
        ],
        cards: [
          {
            icon: '',
            title: 'Dedicated To Large-Scale Change',
            link: '#',
            detail:
              'The mission to improve the quality of education in India and ensure that all children not only attend but also thrive in school is being accomplished by working in collaboration with the government, local communities, parents, teachers, volunteers, and civil society members. Our programs aim to supplement rather than replace governmental efforts. They are implemented on a large scale to not only reach as many children as possible, but also to create an adoptable demonstration model for state governments.',
          },
          {
            icon: '',
            title: 'A Focus on Innovation',
            link: '#',
            detail:
              "Pratham's strategies reconfigure teaching methodologies, break down traditional tactics, and challenge the current rote learning mechanisms in our schools. Our programs are innovative and outcome-driven. In its early years Pratham developed innovative teaching-learning approaches, materials, and measurement methods. In 2005, we pioneered a nationwide survey of schooling and learning that has had a major impact on national and international policy discussions.",
          },
        ],
      },
    },
    {
      id: 'photos',
      label: 'Photos',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 'music',
      label: 'Music',
      content:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      id: 'videos',
      label: 'Videos',
      content:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

  const images = {
    'Dedicated To Large-Scale Changes': bulbIcon,
    //   worldwideDistributionServiceImage,
    // 'Music Publishing Worldwide': musicPublishingServiceImage,
    // 'YouTube Channel Monetization and CMS Services':
    //   youTubeMonetizationServiceImage,
    // 'Copyright Management': ManagemenmServiceImage,
  };
  return (
    <div className="">
      <div className="mb-20">
        <div className="relative h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
          <Image
            src={aboutUsHeroImage}
            alt="About Us"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />

          {/* 🔸 Overlay (optional, for contrast) */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

          {/* 🔸 Content */}
          <TextOnGlass
            primaryPoint={'MTrax Digital Media'}
            heading={', a leading platform for CMS & Music Distribution'}
            detail={
              'MTrax Digital Media Pvt Ltd provides broad range of services from YouTube CMS to Music distribution on all major OTT platforms.'
            }
          />
        </div>
      </div>
      <div className="flex flex-col gap-20  lg:px-28">
        <div className="flex flex-col px-4">
          {/* <Switch className="mb-4" isSelected={isVertical} onValueChange={setIsVertical}>
        Vertical
      </Switch> */}

          <div className="flex w-full flex-col">
            <Tabs
              aria-label="Dynamic tabs"
              items={tabs}
              isVertical={true}
              className="md:min-w-52 xl:min-w-64 block sticky top-52 pageTabs "
            >
              {(item) => (
                <Tab
                  key={item.id}
                  title={item.label}
                  className="w-full text-start 1111 justify-start"
                >
                  <Card>
                    <CardBody className="p-10 leading-8 tracking-wide  mx-auto text-neutral-600">
                      {item.content.introduction && (
                        <div className="pb-10">
                          <div className="text-4xl font-semibold mb-3">
                            Introduction
                          </div>

                          <p>{item.content.introduction}</p>
                        </div>
                      )}
                      <div className="grid grid-cols-2 gap-4  ">
                        {item?.content?.cards?.map((Carditem, index) => {
                          return (
                            <div key={index}>
                              <Card>
                                <CardHeader>
                                  {console.log(images)}
                                  <Image src={images[title] && images[title]} />
                                  {}
                                </CardHeader>
                                <CardBody className="">
                                  <div className="px-3">
                                    <p className="text-xl text-center my-3 font-semibold">
                                      {Carditem.title}
                                    </p>
                                    <p className="">{Carditem.detail}</p>
                                  </div>
                                </CardBody>
                              </Card>
                            </div>
                          );
                        })}
                      </div>
                    </CardBody>
                  </Card>
                </Tab>
              )}
            </Tabs>
          </div>
        </div>
        <div className="text-2xl w-4/5 leading-10  mx-auto   font-semibold dark:text-neutral-300 text-neutral-600">
          <p className="mt-16">
            With a deep passion for music and a strong grasp of the digital
            landscape, we specialize in distributing your music across all major
            streaming platforms, including Spotify, Apple Music, YouTube Music,
            Amazon, and more.
          </p>
          <p className="mt-16">
            Our mission is to bridge the gap between independent artists and a
            global audience. Whether you're an emerging artist or an established
            label, we provide seamless, reliable, and transparent distribution
            services designed to elevate your reach and revenue.
          </p>
        </div>

        <div className="">
          <div className="flex flex-col sm:flex-row gap-2 justify-center mb-8">
            <h1 className={`${title()} `}>What We Offer:</h1>

            <h1
              className={`${title()} text-lightThemePrimaryText dark:text-darkThemePrimaryText`}
            >
              your music
            </h1>
          </div>
          <HoverEffect items={whatOffers} page={'distribution'} showIcons />
        </div>
        <div className="  px-4 sm:px-0">
          <VideoPromoCard
            image={singer}
            heading={
              <h1 className={`${title({ size: 'sm' })} font-semibold  `}>
                Your Official Music{' '}
                <span className="text-lightThemePrimaryText dark:text-darkThemePrimaryText">
                  Release Partner
                </span>
              </h1>
            }
            details={`Launch your official music in style. We help you quickly
                get your music videos live on the most popular social platforms
                and earn royalties. We have you covered from setup and launch to
                video uploads and rights management.`}
            showPlateforms
          />
        </div>

        <div className="h-[calc(100vh-6.625rem)] px-4 flex justify-center items-start flex-col">
          <div className="flex flex-col gap-5 items-center mx-auto justify-center mb-8">
            <h1 className={`${title()} `}>
              Promote Your Music in All Major{' '}
              <span
                className={`sm:hidden leading-relaxed text-lightThemePrimaryText dark:text-darkThemePrimaryText`}
              >
                Social Media Channels
              </span>
            </h1>
            <h1
              className={`${title()} text-lightThemePrimaryText dark:text-darkThemePrimaryText hidden md:block`}
            >
              Social Media Channels
            </h1>
          </div>
          <p className="text-2xl leading-10 mt-18 font-medium dark:text-neutral-400 text-neutral-500">
            With a growing network of artists, producers, and labels, we take
            pride in helping music creators thrive in the digital age. At MTrax
            Digital Media, your sound matters — and we make sure the world hears
            it.
          </p>
          <div className="socialmedia flex justify-around flex-wrap items-center gap-8 px-4 sm:px-0 sm:w-1/2 mx-auto  mt-12 icons">
            <Instagram />
            <FaceBook />
            <Ticktock />
            <Spotify />
            <YouTube />
          </div>
          <h1
            className={`${title({ size: 'sm' })} mt-20 text-lightThemeSecondryText dark:text-darkThemeSecondryText hidden md:block`}
          >
            Join the movement. Distribute with confidence. Grow with us.
          </h1>
        </div>
      </div>
    </div>
  );
}
