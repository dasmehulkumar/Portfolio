// @flow strict
import { achievements } from "@/utils/data/achievements";
import { FaTrophy } from "react-icons/fa";
import GlowCard from "../helper/glow-card";
import Image from "next/image";

function AchievementsSection() {
  return (
    <div id="achievements" className="relative z-50 my-12 lg:my-24">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md flex items-center gap-2">
            <FaTrophy className="text-yellow-400" /> Achievements
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((ach) => (
            <GlowCard key={ach.id} identifier={`achievement-${ach.id}`}>
              <div className="p-4 relative">
                <Image
                  src="/blur-23.svg"
                  alt="Hero"
                  width={1080}
                  height={200}
                  className="absolute bottom-0 opacity-80"
                />
                <div className="flex items-start gap-4">
                  <FaTrophy className="text-yellow-400 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-white text-lg">{ach.title}</p>
                    {ach.description && (
                      <p className="text-gray-300 text-sm mt-1">{ach.description}</p>
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

export default AchievementsSection; 