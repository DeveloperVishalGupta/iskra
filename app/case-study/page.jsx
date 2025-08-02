import { title } from '../../components/primitives';

export const YoutubeMonetizationSteps = [
  {
    title: 'Step 1',
    content: (
      <div className="flex justify-center  flex-col items-center ">
        <div className="flex flex-col gap-4">
          <h1 className={title()}>Sign up</h1>
        </div>
        <p className="text-2xl max-w-2xl leading-10 mt-24 font-semibold dark:text-neutral-400 text-neutral-500">
          Create your HarDan Music account today and distribute music to
          multiple stores right from our dashboard. It's as easy as one, two, or
          three
        </p>
      </div>
    ),
  },
  {
    title: 'Step 2',
    content: (
      <div className="flex justify-center  flex-col items-center ">
        <div className="flex flex-col gap-4">
          <h1 className={title()}>Apply for Channel Management</h1>
        </div>
        <p className="text-2xl max-w-2xl leading-10 mt-24 font-semibold dark:text-neutral-400 text-neutral-500">
          Efficiently manage your YouTube channels and get the best out of them
          with the help of an expert team for YouTube.
        </p>
      </div>
    ),
  },
  {
    title: 'Step 3',
    content: (
      <div className="flex justify-center  flex-col items-center ">
        <div className="flex flex-col gap-4">
          <h1 className={title()}>Apply for YouTube Channel Monetization</h1>
        </div>
        <p className="text-2xl max-w-2xl leading-10 mt-24 font-semibold dark:text-neutral-400 text-neutral-500">
          We help you deliver your music to YouTube Content ID and monetize
          every track you own, claiming 100% music rights & royalties.
        </p>
      </div>
    ),
  },
  {
    title: 'Step 4',
    content: (
      <div className="flex justify-center  flex-col items-center ">
        <div className="flex flex-col gap-4">
          <h1 className={title({})}>Upload Your Music</h1>
        </div>
        <p className="text-2xl max-w-2xl leading-10 mt-24 font-semibold dark:text-neutral-400 text-neutral-500">
          Upload your music to HarDan music and provide detailed info like track
          name, artist name, artwork, and more.
        </p>
      </div>
    ),
  },
  {
    title: 'Step 5',
    content: (
      <div className="flex justify-center  flex-col items-center ">
        <div className="flex flex-col gap-4">
          <h1 className={title({})}>Your music on YouTube</h1>
        </div>
        <p className="text-2xl max-w-2xl leading-10 mt-24 font-semibold dark:text-neutral-400 text-neutral-500">
          We will send your songs to YouTube to get a unique Content ID to track
          your soundtracks easily.
        </p>
      </div>
    ),
  },
  {
    title: 'Step 6',
    content: (
      <div className="flex justify-center  flex-col items-center ">
        <div className="flex flex-col gap-4">
          <h1 className={title({})}>Let YouTube do the work for you</h1>
        </div>
        <p className="text-2xl max-w-2xl leading-10 mt-24 font-semibold dark:text-neutral-400 text-neutral-500">
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
      <div className="flex justify-center  flex-col items-center ">
        <div className="flex flex-col gap-4">
          <h1 className={title({})}>Make Money</h1>
        </div>
        <p className="text-2xl max-w-2xl leading-10 mt-24 font-semibold dark:text-neutral-400 text-neutral-500">
          We help you collect music royalties every time someone uses, streams,
          or downloads your music. You get paid directly into your bank account.
        </p>
      </div>
    ),
  },
];

const defaultCaseStudyData = {
  title: 'Transforming Customer Experience: The Acme Corp. Story',
  subtitle:
    'A deep dive into how innovative solutions led to remarkable growth.',
  introduction:
    'Acme Corp., a leading provider of enterprise software solutions, faced challenges in scaling their customer support operations while maintaining high satisfaction rates. This case study explores their journey in adopting a new AI-powered support platform, resulting in significant improvements across key performance indicators.',
  challenges: [
    {
      icon: (
        <svg
          className="w-6 h-6 mr-2 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      ),
      title: 'Rising Support Volume',
      description:
        'With rapid user growth, the volume of customer inquiries surged, overwhelming the existing human-centric support team. Response times were increasing, leading to customer frustration.',
    },
    {
      icon: (
        <svg
          className="w-6 h-6 mr-2 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      ),
      title: 'Inconsistent Resolution',
      description:
        'Lack of standardized processes and tools led to inconsistent quality in issue resolution, impacting overall customer satisfaction scores.',
    },
  ],
  solution: {
    description:
      'Acme Corp. partnered with Innovate Solutions to implement a bespoke AI-powered customer support platform. This platform integrated several key features:',
    features: [
      {
        name: 'Intelligent Chatbot',
        description:
          'Designed to handle common queries, providing instant answers and deflecting a significant portion of tickets from human agents.',
      },
      {
        name: 'Automated Ticket Routing',
        description:
          'Advanced algorithms ensured complex issues were routed to the most qualified human agent, reducing transfer times and improving first-contact resolution.',
      },
      {
        name: 'Knowledge Base Integration',
        description:
          'Seamlessly connected to an extensive knowledge base, allowing both the chatbot and agents to quickly access relevant information.',
      },
      {
        name: 'Sentiment Analysis',
        description:
          'Monitored customer sentiment in real-time, flagging urgent or negative interactions for immediate human intervention.',
      },
    ],
  },
  results: [
    { value: '60%', label: 'Reduction in Response Time' },
    { value: '45%', label: 'Increase in Customer Satisfaction' },
    { value: '30%', label: 'Decrease in Operational Costs' },
  ],
  conclusion:
    'The implementation of the new platform led to tangible and measurable improvements. Acme Corp. not only enhanced its customer service but also achieved significant cost efficiencies, allowing them to reallocate resources to innovation and growth.',
};

export default function CaseStudyPage({
  caseStudyData = defaultCaseStudyData,
}) {
  return (
    <div className="flex flex-col gap-20">
      <div className="min-h-screen bg-gray-100 font-sans text-gray-800 p-4 sm:p-6 md:p-8 lg:p-10">
        {/* Case Study Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header Section */}
          <header className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 sm:p-8 rounded-t-xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-2">
              {caseStudyData.title}
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl text-center">
              {caseStudyData.subtitle}
            </p>
          </header>

          {/* Introduction Section */}
          <section className="p-6 sm:p-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {caseStudyData.introduction}
            </p>
          </section>

          {/* Problem Section */}
          <section className="p-6 sm:p-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              The Challenge
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudyData.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-4 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-blue-600 mb-2 flex items-center">
                    {challenge.icon}
                    {challenge.title}
                  </h3>
                  <p className="text-gray-700">{challenge.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Solution Section */}
          <section className="p-6 sm:p-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              The Solution
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {caseStudyData.solution.description}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              {caseStudyData.solution.features.map((feature, index) => (
                <li key={index}>
                  <span className="font-semibold">{feature.name}:</span>{' '}
                  {feature.description}
                </li>
              ))}
            </ul>
          </section>

          {/* Results Section */}
          <section className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              The Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {caseStudyData.results.map((result, index) => (
                <div
                  key={index}
                  className="bg-green-50 p-4 rounded-lg shadow-sm"
                >
                  <p className="text-4xl font-bold text-green-700">
                    {result.value}
                  </p>
                  <p className="text-lg text-gray-700">{result.label}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed mt-6">
              {caseStudyData.conclusion}
            </p>
          </section>

          {/* Footer Section */}
          <footer className="bg-gray-800 p-6 sm:p-8 rounded-b-xl text-center text-white text-sm">
            <p>&copy; 2025 Acme Corp. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
