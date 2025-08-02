import Image from 'next/image';
import { Card, CardBody } from '@heroui/card';

function Gallery({ data, showMoreButton = false }) {
  return (
    <div>
      <section
        id="gallery"
        className="bg-white/40 rounded-2xl shadow-lg border py-10"
      >
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery Grid */}
          <div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6"
            id="gallery-grid"
          >
            {/* Gallery items will be dynamically populated  */}
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 animate__animated animate__fadeIn"
                >
                  <Card className="items-center ">
                    <CardBody className=" overflow-hidden">
                      <Image
                        loading="lazy"
                        src={item}
                        alt={'image'}
                        className="w-full h-auto rounded-xl hover:scale-110 transition-all duration-300 "
                      />
                    </CardBody>
                  </Card>
                </div>
              );
            })}
          </div>
          {/* Load More Button  */}
          {showMoreButton && (
            <div div className="text-center mt-12">
              <button
                id="load-more"
                className="bg-rose-500 text-white px-8 py-3 rounded-lg hover:bg-rose-600 transition-colors"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Gallery;
