'use client';
import { title } from '../../components/primitives';
import {  whatOffers } from '../../constant';
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
import aboutUsHeroImage from '../../assets/images/donate11.jpg';
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
          'Integrated Sustainable Knowledge and Research Academy (ISKRA) is a non-profit organization established in 2015 with a mission to work on the Right to food, Community Development, and Empowerment of Women in Maharashtra. The organizational areas of interventions include Right to food, Health, Advocacy for Human Rights, Women Empowerment, Livelihood, Community Development, and Financial Inclusivity. The organization has a strong hold over field areas specifically, in the slum parts of Mumbai and Rural areas of Maharashtra for its interventions',
        ],
        cards: [
          
        ],
      },
    },
    {
      id: 'photos',
      label: 'Board Members',
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
          <div className="flex w-full flex-col my-6">
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
      </div>
    </div>
  );
}
