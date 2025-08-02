import { TextOnGlass } from '../components/TextOnGlass';
import homeHeroImage from '../assets/images/donate1.jpg';
import Image from 'next/image';
import CustomButton from '../components/Button';

export default function Home() {
  return (
    <section className="">
      <div className="relative h-[calc(100vh-6rem)] flex items-center justify-center overflow-hidden">
        <Image
          src={homeHeroImage}
          alt="About Us"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

        <TextOnGlass
          primaryPoint={'We are a charity to change the life'}
          detail={
            'Helping communities thrive by providing aid, education, and opporttunities.'
          }
        />
      </div>

      <div className="px-24 bg-slate-100">
        <div className="min-h-screen  flex items-center justify-center p-4 sm:p-8 font-inter">
          <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="flex flex-col justify-center text-center lg:text-left p-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-700 leading-tight mb-6">
                Together We Are <br /> Strengthening Humanity
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                We've been campaigning for a green and peaceful future for 40
                years, and we're not stopping now. It's time to rise up like
                never before and fight for our climate and communities.
              </p>
              <div className="flex justify-center lg:justify-start">
                <CustomButton title={'Read About Us'} />
              </div>
            </div>

            <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center p-4">
              <div className="relative grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-xl z-10">
                <div className="col-span-1 row-span-1 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://placehold.co/400x300/E0E7FF/000000?text=Image+1"
                    alt="People packing supplies"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="col-span-1 row-span-1 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 -mt-8 sm:-mt-16">
                  <img
                    src="https://placehold.co/400x300/FEE2E2/000000?text=Image+2"
                    alt="People distributing aid"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="col-span-1 row-span-1 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 -mb-8 sm:-mb-16">
                  <img
                    src="https://placehold.co/400x300/D1FAE5/000000?text=Image+3"
                    alt="Elderly person sitting"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="col-span-1 row-span-1 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://placehold.co/400x300/DBEAFE/000000?text=Image+4"
                    alt="People working together"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
