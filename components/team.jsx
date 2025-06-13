'use client';
import teamMembers from '../constant/team.json';
import maleUser from '../assets/images/maleUser.jpg';
import femaleUser from '../assets/images/femaleUser.jpg';
import Image from 'next/image';
function Team() {
  const team = teamMembers;
  const membersPhoto = {
    anshulAnand: null,
    priyankarPrasad: null,
    aakashKadam: null,
  };

  return (
    <div className={`relative`}>
      <div className="h-full w-full py-5 lg:px-40">
        <div className="col-span-2" />
        <div className="z-0 col-span-12 md:col-span-8">
          <div className="flex flex-col">
            <div>
              {team.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="mt-12 flex flex-col justify-center gap-2 py-3  md:mx-auto md:max-w-[75rem]"
                  >
                    <p className="text-center text-[1.75rem] font-medium  md:text-start md:text-[2.15rem]">
                      {item.teamTitle}
                    </p>
                    <p
                      className={`mx-auto w-3/4 text-center text-lg dark:text-gray-400 text-neutral-500  md:mx-0 md:w-full md:text-start`}
                    >
                      {item.teamDetail}
                    </p>
                    <div className="mt-12 grid gap-8 px-4 md:grid-cols-3 md:px-0 lg:grid-cols-3 xl:grid-cols-3">
                      {item.data.map((dataItem, dataIndex) => {
                        console.log(dataItem.image);
                        console.log(dataItem.gender);

                        console.log(membersPhoto);

                        return (
                          <div key={dataIndex} className="flex justify-center ">
                            <div className="w-full max-w-sm overflow-hidden rounded-2xl ">
                              <div className="relative h-56 w-full overflow-hidden">
                                <Image
                                  src={
                                    membersPhoto[dataItem.image]
                                      ? membersPhoto[dataItem.image]
                                      : dataItem.gender === 0
                                        ? maleUser
                                        : femaleUser
                                  }
                                  alt={dataItem.name}
                                  className="h-full w-full object-cover object-top"
                                  loading="lazy"
                                  decoding="async"
                                />
                              </div>
                              <div className="body bg-neutral-100 dark:bg-white  px-4 pt-6 pb-3">
                                <p className="text-xl font-bold text-black">
                                  {dataItem.name}
                                </p>
                                <p className="text-base font-medium text-[#387ff5]">
                                  {dataItem.position}
                                </p>
                                <p className="mt-5 text-sm font-normal text-[#787A82]">
                                  {dataItem.discribe}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
