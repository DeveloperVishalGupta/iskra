'use client';
import { title } from '../../components/primitives';

import UnderDev from '../../components/UnderDev';

export const preferences = [
  { key: 'inquiry', label: 'Inquiry' },
  { key: 'request', label: 'Request' },
  { key: 'support for any services', label: 'Support for any services' },
  { key: 'revenue shareing plan', label: 'Revenue shareing plan' },
];
export const involmentPossion = [
  { key: 'possition-a', label: 'Possition A' },
  { key: 'possition-a', label: 'Possition AB' },
  { key: 'possition-a', label: 'Possition AV' },
  { key: 'possition-a', label: 'Possition AD' },
  { key: 'possition-a', label: 'Possition AF' },
  { key: 'possition-a', label: 'Possition AG' },
  { key: 'possition-a', label: 'Possition AE' },
];

export default function OurProjectPage() {
  return (
    <div className="flex flex-col w-full items-center gap-y-10  overflow-hidden ">
      <div className="w-4/5 ">
        <div className=" mb-8 flex justify-center text-center md:text-start">
          <h1 className={title({})}>Programs</h1>
        </div>
        <UnderDev section={'Programs'} />
      </div>
    </div>
  );
}
