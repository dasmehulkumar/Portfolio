// @flow strict
import { publications } from "@/utils/data/publications";
import { FaBookOpen } from "react-icons/fa";
import GlowCard from "../../helper/glow-card";
import Image from "next/image";
// import Link from "next/link";

function PublicationsSection() {
  return (
    <div id="publications" className="relative z-50 my-12 lg:my-24">

      <Image
        src="/section.svg"
        alt="Publications"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      {/* Section Heading */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">

          <span className="w-24 h-[2px] bg-[#1a1443]"></span>

          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md flex items-center gap-2">
            <FaBookOpen className="text-green-400" />
            Publications
          </span>

          <span className="w-24 h-[2px] bg-[#1a1443]"></span>

        </div>
      </div>

      {/* Publications Grid */}
      <div className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {publications.map((pub) => (
            <GlowCard key={pub.id} identifier={`publication-${pub.id}`}>

              <div className="p-4 relative">

                <Image
                  src="/blur-23.svg"
                  alt="blur"
                  width={1080}
                  height={200}
                  className="absolute bottom-0 opacity-80"
                />

                <div className="flex items-start gap-4">

                  <FaBookOpen
                    className="text-green-400 mt-1 flex-shrink-0"
                    size={24}
                  />

                  <div>

                    <p className="font-semibold text-white text-lg">
                      {pub.title}
                    </p>

                    {pub.publisher && (
                      <p className="text-gray-300 text-sm mt-1">
                        {pub.publisher}
                      </p>
                    )}

                    {pub.year && (
                      <p className="text-gray-400 text-xs mt-1">
                        {pub.year}
                      </p>
                    )}

                    {pub.description && (
                      <p className="text-gray-400 text-sm mt-2">
                        {pub.description}
                      </p>
                    )}

                    {pub.link && (
                              <a
                                href={pub.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-10 mt-3 inline-block bg-pink-600 text-white px-3 py-1 rounded text-xs hover:bg-pink-700"
                              >
                                View Paper
                              </a>
                            )}

                  </div>

                </div>
              </div>

            </GlowCard>
          ))}

        </div>
      </div>
    </div>
  );
}

export default PublicationsSection;