'use client';
import { title } from '../../components/primitives';
import { gallaryImages } from '../../constant';
import Gallery from '../../components/gallery';
import UnderDev from '../../components/UnderDev';
export const preferences = [
  { key: 'inquiry', label: 'Inquiry' },
  { key: 'request', label: 'Request' },
  { key: 'support for any services', label: 'Support for any services' },
  { key: 'revenue shareing plan', label: 'Revenue shareing plan' },
];

export default function ResourcePage() {
  return (
    <div className="flex flex-col w-full items-center gap-y-10  overflow-hidden ">
      <div className="w-4/5 h-[calc(100vh-6rem)] py-8 md:py-10 ">
        <div className=" mb-8 flex justify-center text-center md:text-start">
          <h1 className={title({})}>Annual Report</h1>
        </div>
        <div className='mt-24'>
        <UnderDev section={'annual report'} />
        </div>
      </div>
      <div className="px-4 flex justify-center text-center md:text-start">
        <h1 className={title({})}>Our Gallary</h1>
      </div>

      <div className="w-4/5 mb-6">
        <Gallery
          heading={'Our Partners'}
          headingText={
            'Trusted by Our Partners for Exceptional Transformations'
          }
          data={gallaryImages}
        />
      </div>
    </div>
  );
}
