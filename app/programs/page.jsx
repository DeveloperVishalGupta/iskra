'use client';
import { title } from '../../components/primitives';
import UnderDev from '../../components/UnderDev';
import program1Image from '../../assets/images/donate1.jpg';
import Image from 'next/image';

const programs = [
  {
    image: program1Image,
    title: 'Programs 1',
    detail: [
      'At ISKRA, we take pride in implementing impactful, community-driven initiatives through meaningful partnerships with leading CSR entities. One of our key collaborations was with nAmazon CSR, in association with ASVSS NGO, to promote women’s entrepreneurship among tribal communities in Padgha, Maharashtra. The project focused on strengthening Self-Help Groups (SHGs), building entrepreneurial skills, and enhancing local livelihoods for tribal women through sustainable economic activities.',
    ],
  },
  {
    title: 'Programs 2',
    detail: [
      'Another significant project was implemented in partnership with Tata Power Community Development Trust (TPCDT). This multi-thematic initiative focused on access to public entitlements, including assistance with ration card documentation, while also addressing livelihood generation, gender sensitization, and healthcare awareness. The project included organizing health camps, conducting community mobilization sessions, and supporting underprivileged families in navigating essential government services.',
    ],
  },
  {
    title: 'Programs 3',
    detail: [
      'More recently, we collaborated with Bharat Petroleum Corporation Limited (BPCL) to implement a comprehensive public health and nutrition initiative in Khalapur Taluka, Raigad district. The project focused on improving the health and nutrition indicators of pregnant women, lactating mothers, adolescent girls, and children under six, through the distribution of nutrition kits, organizing health camps, and equipping Anganwadi workers with digital diagnostic kits.',
    ],
  },
];

export default function OurProjectPage() {
  return (
    <div className="flex w-4/5 flex-col self-center items-center gap-y-10  overflow-hidden ">
      {/* <div className=" "> */}
      {programs.length > 0 ? (
        programs.map((item, index) => {
          return (
            <>
              <div
                key={index}
                className="flex justify-center text-center md:text-start"
              >
                <h1 className={title({})}>{item.title}</h1>
              </div>
              <div className=" mx-auto bg-white rounded-xl shadow-lg p-8 ">
                {item.image && (
                  <Image
                    src={item.image}
                    className="rounded-lg w-3/4 mx-auto mb-4"
                  />
                )}
                <p className="text-xl tracking-wide lowercase">
                  {item.detail.join('\n')}
                </p>
              </div>
            </>
          );
        })
      ) : (
        <>
          <div className=" mb-8 flex justify-center text-center md:text-start">
            <h1 className={title({})}>Programs</h1>
          </div>
          <UnderDev section={'Programs'} />
        </>
      )}
    </div>
  );
}
