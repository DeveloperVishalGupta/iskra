import AnitaAromatic from '../assets/images/AnitaAromatic.png';
import g1 from '../assets/images/gallary/g-1.jpeg';
import g2 from '../assets/images/gallary/g-2.jpeg';
import g3 from '../assets/images/gallary/g-3.jpeg';
import g4 from '../assets/images/gallary/g-4.jpeg';
import g5 from '../assets/images/gallary/g-5.jpeg';
import g6 from '../assets/images/gallary/g-6.jpeg';
import g7 from '../assets/images/gallary/g-7.jpeg';
import g8 from '../assets/images/gallary/g-8.jpeg';
import g9 from '../assets/images/gallary/g-9.jpeg';
import g10 from '../assets/images/gallary/g-10.jpeg';
import g11 from '../assets/images/gallary/g-11.jpg';
import g12 from '../assets/images/gallary/g-12.jpg';
import g13 from '../assets/images/gallary/g-13.png';
import g14 from '../assets/images/gallary/g-14.png';
import g15 from '../assets/images/gallary/g-15.jpg';
import g16 from '../assets/images/gallary/g-16.jpg';
import g17 from '../assets/images/gallary/g-17.png';
import g18 from '../assets/images/gallary/g-18.png';

export const gallaryImages = [
  g1,
  g2,
  g3,
  g4,
  g5,
  g6,
  g7,
  g8,
  g9,
  g10,
  g11,
  g12,
  g13,
  g14,
  g15,
  g16,
  g17,
  g18,
];

export const getInTouch = [
  {
    type: 'info mail',
    contactSorce: 'mtraxdigitalmedia@gmail.com',
    showText: 'mtraxdigitalmedia@gmail.com',
  },
];

export const Company = {
  title: 'Company',
  links: [
    {
      title: 'about',
      url: '#',
    },
    {
      title: 'Contact',
      url: '#',
    },
    {
      title: 'Support',
      url: '#',
    },
  ],
};

export const UsefullLinks = {
  title: 'Usefull Links',
  links: [
    {
      title: 'Pricing',
      url: '#',
    },
    {
      title: 'Service',
      url: '#',
    },
    {
      title: 'sell your music',
      url: '#',
    },
    {
      title: 'Guidlines',
      url: '#',
    },
  ],
};

export const socialMedia = [
  {
    name: 'FaceBook',
    link: 'https://www.facebook.com/mg.plus.77',
  },
  {
    name: 'FaceBook',
    link: 'https://www.instagram.com/manish_becharu',
  },
  {
    name: 'threads',
    link: 'https://www.threads.com/@manish_becharu',
  },
  {
    name: 'FaceBook',
    link: 'https://www.facebook.com/mg.plus.77',
  },
];

export const cardsDummy = [
  {
    title: 'Stripe',
    description:
      'A technology company that builds economic infrastructure for the internet.',
    link: 'https://stripe.com',
  },
  {
    title: 'Netflix',
    description:
      'A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    link: 'https://netflix.com',
  },
  {
    title: 'Google',
    description:
      'A multinational technology company that specializes in Internet-related services and products.',
    link: 'https://google.com',
  },
  {
    title: 'Meta',
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: 'https://meta.com',
  },
  {
    title: 'Amazon',
    description:
      'A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
    link: 'https://amazon.com',
  },
  {
    title: 'Microsoft',
    description:
      'A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.',
    link: 'https://microsoft.com',
  },
];

export const plansPricing = [
  {
    title: 'HMG – ULTRA',
    price: '₹ 2499',
    duration: 'year',
    description: 'Empowering the Next Generation of Stars',
    cta: 'Get Started',
    gradient: 'from-orange-500 to-yellow-500',
  },
  {
    title: 'HMG – PRO',
    price: '₹ 1499',
    duration: 'year',
    description: "Elevating Tomorrow's Stars with HMG Pro",
    cta: 'Get Started',
    gradient: 'from-blue-500 to-cyan-300',
  },
  {
    title: 'FREE',
    price: '₹ 0',
    duration: 'LIFETIME + a signup fee Applied',
    description: 'Kickstart Your Music Journey with HMG Free',
    cta: 'Get Started',
    gradient: 'from-green-600 to-yellow-300',
  },
  {
    title: 'HMG For Distributors',
    price: '₹ 14999',
    oldPrice: '₹ 49999',
    duration: 'year',
    description: 'Empowering the Next Wave of Talent with HMG for Distributors',
    cta: 'Get Started',
    gradient: 'from-rose-500 to-orange-400',
  },
  {
    title: 'HMG – Ultra – SR',
    price: '₹ 699',
    duration: 'Single Release',
    description:
      'Unleash Your Potential with HMG - Ultra SR: The Ultimate Single Release Plan',
    cta: 'Get Started',
    gradient: 'from-purple-500 to-pink-400',
  },
  {
    title: 'REVENUE SHARING PLAN',
    price: '₹ 0',
    duration: 'Forever Include All Paid Features',
    description:
      'Applicable only to users generating at least $300 USD per month',
    cta: 'Contact Us',
    gradient: 'from-slate-700 to-slate-500',
  },
];

export const tabs = [
  {
    title: "Our artist's plans",
    value: 'product',
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Product Tab</p>
      </div>
    ),
  },
  {
    title: 'Our Labels plans',
    value: 'services',
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Services tab</p>
      </div>
    ),
  },
  {
    title: 'Other plans',
    value: 'playground',
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Playground tab</p>
      </div>
    ),
  },
];

// data/tableData.ts

export const musicDistributors = [
  'HARDAN MUSIC',
  'ONE MUSIC RECORD',
  'TUNECORE',
  'DISTROKID',
  'AMUSE',
];

export const musicFeatures = [
  {
    title: 'Revenue Sharing from Digital Stores',
    values: ['100%', '100%', '100%', '85%', '100%'],
  },
  {
    title: 'Revenue Sharing Youtube Content ID',
    values: ['100%', '100%', '85%', '85%', '85%'],
  },
  {
    title: "Artist's",
    values: [
      "5 Artist's",
      'Single Artist Only',
      'Single Artist Only',
      'Single Artist Only',
      'Single Artist Only',
    ],
  },
  {
    title: 'Unlimited Releases For 1 Year',
    values: ['✔', '✔', '✔', '✔', '✔'],
  },
  {
    title: 'Available For Lifetime Without Annual Fees',
    values: ['✔', '✔', '₹ 1,499, ₹ 2,599', '$22.99', '$19.99 & $59.99'],
  },
  {
    title: 'Release Timing',
    values: [
      '6 to 12 Working Hours',
      '3 to 5 Working Days',
      '2 - 5 Working Days',
      '1 Week',
      '5-14 Days',
    ],
  },
  {
    title: 'Email Support',
    values: [
      '6 to 12 Working Hours',
      '2 to 4 Working Days',
      '3 to 5 Working Days',
      '3 to 5 Working Days',
      '3 to 5 Working Days',
    ],
  },
  {
    title: 'Free ISRC & UPC',
    values: ['✔', '✔', '✔', '✔', '✔'],
  },
  {
    title: 'Automated Invoice Generation',
    values: ['✔', '✔', '❌', '❌', '❌'],
  },
  {
    title: 'URL Shortener',
    values: ['✔', '✔', '❌', '❌', '❌'],
  },
  {
    title: 'Instagram Account Linking with Music',
    values: ['✔', '✔', '❌', '❌', '❌'],
  },
  {
    title: 'Copyright Removal From Dashboard',
    values: ['✔', '✔', '❌', '❌', '❌'],
  },
];

export const tabsData = [
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

export const musicPlatforms = [
  {
    title: 'Spotify',
    logo: '', // path to your Spotify logo
    description:
      'Get your music online on the largest music streaming service in the world.',
    bgColor: '#f57c00', // optional
  },
  {
    title: 'Apple Music',
    logo: '/logos/apple-music.png', // path to your Apple Music logo
    description:
      'Get your music available in front of 88 million subscribers worldwide.',
    bgColor: '#f57c00',
  },
  {
    title: 'Amazon Music',
    logo: '/logos/amazon-music.png',
    description: 'Reach millions of Amazon Prime members through Amazon Music.',
    bgColor: '#f57c00',
  },
  {
    title: 'YouTube Music',
    logo: '/logos/youtube-music.png',
    description:
      'Distribute to YouTube’s massive audience with audio and video tracks.',
    bgColor: '#f57c00',
  },
  {
    title: 'Deezer',
    logo: '/logos/deezer.png',
    description: 'Stream your music to over 180 countries via Deezer.',
    bgColor: '#f57c00',
  },
  {
    title: 'Tidal',
    logo: '/logos/tidal.png',
    description: 'Deliver high-fidelity audio to Tidal’s premium subscribers.',
    bgColor: '#f57c00',
  },
  {
    title: 'JioSaavn',
    logo: '/logos/jiosaavn.png',
    description:
      'Distribute your music to Indian and global listeners on JioSaavn.',
    bgColor: '#f57c00',
  },
  {
    title: 'Gaana',
    logo: '/logos/gaana.png',
    description: 'Reach regional Indian audiences via the Gaana app.',
    bgColor: '#f57c00',
  },
  {
    title: 'Wynk Music',
    logo: '/logos/wynk.png',
    description:
      'Publish songs on one of India’s top telecom-based music platforms.',
    bgColor: '#f57c00',
  },
];
export const whatOffers = [
  {
    title: 'Global Digital Music Distribution',
    description:
      'Distribute your music to top platforms like Spotify, Apple Music, and Amazon worldwide with a single upload.',
  },
  {
    title: 'Real-Time Analytics & Royalty Reports',
    description:
      'Track your streams, earnings, and listener data with accurate, real-time analytics and transparent royalty reports.',
  },
  {
    title: 'Promotional Support & Monetization Services',
    description:
      'Boost your reach with marketing support while maximizing revenue through ads, sync licensing, and monetization tools.',
  },
  {
    title: 'YouTube Content ID & Channel Monetization',
    description:
      'Protect your music on YouTube and earn money from others using your content, while growing and monetizing your own channel.',
  },
  {
    title: 'Fast Delivery to 150+ Platforms Worldwide',
    description:
      'Distribute your music instantly to over 150 global platforms, ensuring quick availability across all major streaming services.',
  },
];

export const service = [
  {
    title: 'Worldwide Music distribution and streaming',
    imageOrder: 1,
    details: [
      'Get your music stream worldwide on all major OTT platforms ',
      'Your Music, our Distribution: a perfect Junction',
    ],
  },
  {
    title: 'Music Publishing Worldwide',
    imageOrder: 2,
    details: [
      'Get paid for each streaming on any OTT Platform.',
      "Just Distribute your songs and relax, We'll help in growing.",
    ],
  },
  {
    title: 'YouTube Channel Monetization and CMS Services',
    imageOrder: 1,
    details: [
      'Monetize your songs as well as get your YouTube Music Channel linked with CMS/MCN Services.',
      'Royalty for Your arts and positive efforts will be paid periodically.',
    ],
  },
  {
    title: 'Copyright Management',
    imageOrder: 2,
    details: [
      'Get your music secured with Strong Content IDs',
      'Get paid for unauthorised publishing/streaming of your songs on any OTT platforms.',
    ],
  },
];

export const reasonsToChoose = [
  {
    title: 'Unlimited Release on the go',
    detail: 'Release unlimited music and songs over hundreds of platforms.',
  },
  {
    title: 'Free Detailed Sales Report',
    detail: 'Review the performance and sales across music platforms worldwide',
  },
  {
    title: 'Dedicated Support',
    detail: 'A team of experts ready to get you what you want - anytime.',
  },
  {
    title: 'Global platforms',
    detail:
      "Publish your music in the world's best stores no matter where you are.",
  },
];

export const otherServises = [
  { title: 'Digital Content Creation' },
  { title: 'Content Licensing & Rights Management' },
  { title: 'Digital Marketing' },
  { title: 'Audio/Video Production' },
  {
    title: 'Hindi/Bhojpuri script & song lyrics composition',
  },
  {
    title: 'poster designing',
  },
  {
    title: 'Promotions & Advertisement and other Digital Media Solutions',
  },
  { title: 'IPRS Registration for Artist, Composer & Publishers' },
];

export const publishingRoyalties = [
  {
    title: 'Mechanical  Streaming Royalties',
    detail:
      'Mechanical royalties are generated whenever someone reproduces your music  on streaming platforms.',
  },
  {
    title: 'Performance Royalties',
    detail:
      'Performance royalties are generated  whenever someone requests for the right to  play your music on public platforms.',
  },
  {
    title: 'Sync Royalties',
    detail:
      'Sync royalties refer to what you earn whenever someone uses your music in any type of content, whether it is in advertisements, YouTube videos, a movie,  Tiktok videos, or live shows.',
  },
  {
    title: 'Neighbouring  Rights',
    detail:
      'Secure your Neighbouring Rights with ous today. Our experts help you earn royalties for all your master recordings and contributions.',
  },
];

export const rightsProtect = [
  {
    title: 'Youtube',
    details:
      'Protect your music rights on YouTube and YouTube Music with a content ID. We help you claim your rights and earn royalties. Earn monthly payments whenever someone uploads a video on Youtube or Youtube Music with your music in it.',
  },
  {
    title: 'Facebook',
    details:
      'Own your music forever and earn royalties.We ensure that  you get rewarded whenever someone adds your music to their videos or stories. We help you Block, Monetize, or Claimany content around the world that matches your track.',
  },
];

export const Benefits = [
  {
    title: 'ownership',
    heading: '100% ownership',
    detail:
      ' Be in control of your music rights. Your music will be yours forever.',
  },
  {
    title: 'Flexible and reliable',
    heading: 'Flexible and reliable',
    detail:
      ' We offer reliable, flexible,  and tailor-made services to match  your specific needs.',
  },
  {
    title: 'Dedicated Support',
    heading: 'Dedicated Support',
    detail:
      'Dedicated support team to help you with music rights, copyright  protection, and royalties.',
  },
];

export const headings = [
  {
    title: 'The Right Place to Push Your Music Career Beyond Limits',
    page: '/services',
    id: 'musicCareer',
  },
  {
    title: 'worldwide distribution',
    page: '/services',
    id: 'worldwideDistribution',
  },
  {
    title: 'Global Music Publishing',
    page: '/services',
    id: 'globalMusicPublishing',
  },
  {
    title: 'YouTube Monetization',
    page: '/services',
    id: 'youTubeMonetization',
  },
  { title: 'Rights Management', page: '/services', id: 'rightsManagement' },
  {
    title: 'Distribute your music Everywhere',
    page: '/distribute-your-music',
    id: '  ',
  },
  { title: 'About Us', page: '/about', id: 'about-us' },
  { title: 'Our Team', page: '/about', id: 'our-team' },
  { title: 'Web Development', page: '/services', id: 'web-dev' },
  { title: 'Contact Us', page: '/contact', id: 'contact-us' },
];

export const contactNumbers = [
  {
    phone: '8169639763',
    type: 1,
  },

  {
    phone: '8169639763',
    type: 2,
  },
];

export const top6Musics = [
  {
    link: 'https://www.youtube.com/embed/CfkeKU-9T-M?si=G0NzpD7HOYGU-y6y',
  },
  {
    link: 'https://www.youtube.com/embed/ZfObOBL1aGg?si=WrqQrt4_ItpcVXOb',
  },
  {
    link: 'https://www.youtube.com/embed/cXpkvG4MuW4?si=xdovX90pVqhTaay9',
  },
  {
    link: 'https://www.youtube.com/embed/LWkPAvE6wMs?si=5-rs0xeo3Z689P1Z',
  },
  { link: 'https://www.youtube.com/embed/61TrcabmVkw?si=0N5-s96DLLFtMA-s' },
  { link: 'https://www.youtube.com/embed/lV6y34Cof_4?si=bgOtekU883SyU-7j' },
];

export const partenrs = [
  {
    title: 'Anita Aromatic',
    img: AnitaAromatic,
    discription: '',
  },
  {
    title: 'Argan QOD',
    img: AnitaAromatic,
    discription: '',
  },
  {
    title: 'Brazilian Hairtech',
    img: AnitaAromatic,
    discription: '',
  },
  {
    title: 'Deplieve',
    img: AnitaAromatic,
    discription: '',
  },
  {
    title: 'Jeannot',
    img: AnitaAromatic,
    discription: '',
  },
  {
    title: 'Kanpeki',
    img: AnitaAromatic,
    discription: '',
  },
  {
    title: 'Loreal',
    img: AnitaAromatic,
    discription: '',
  },
  {
    title: 'Moroccan Oil',
    img: AnitaAromatic,
    discription: '',
  },
  {
    title: 'O3',
    img: AnitaAromatic,
    discription: '',
  },
  {
    title: 'Olaplex',
    img: AnitaAromatic,
    discription: '',
  },
  {
    title: 'Raaga',
    img: AnitaAromatic,
    discription: '',
  },
  {
    title: 'Remy Laure',
    img: AnitaAromatic,
    discription: '',
  },
  {
    title: 'Richfeel',
    img: AnitaAromatic,
    discription: '',
  },
  {
    title: 'Spatika',
    img: AnitaAromatic,
    discription: '',
  },
  {
    title: 'Wella Professional',
    img: AnitaAromatic,
    discription: '',
  },
];
