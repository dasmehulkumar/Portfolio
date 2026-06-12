// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { FaUsers, FaComments, FaLightbulb, FaClock, FaTasks, FaChalkboardTeacher, FaBrain, FaSyncAlt } from "react-icons/fa";

const softSkillIcons = {
  "Leadership": <FaChalkboardTeacher className="text-2xl text-[#16f2b3]" />,
  "Team Collaboration": <FaUsers className="text-2xl text-[#16f2b3]" />,
  "Public Speaking": <FaComments className="text-2xl text-[#16f2b3]" />,
  "Problem-Solving": <FaLightbulb className="text-2xl text-[#16f2b3]" />,
  "Time Management": <FaClock className="text-2xl text-[#16f2b3]" />,
  "Event Coordination": <FaTasks className="text-2xl text-[#16f2b3]" />,
  "Critical Thinking": <FaBrain className="text-2xl text-[#16f2b3]" />,
  "Adaptability": <FaSyncAlt className="text-2xl text-[#16f2b3]" />,
};

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Technical Skills Marquee */}
      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.technical.map((skill, id) => (
            <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}>
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-lg">
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Enhanced Soft Skills Section */}
      <div className="max-w-4xl mx-auto mt-8">
        <div className="bg-gradient-to-br from-[#18143a] to-[#1a1443] border border-[#25213b] rounded-xl p-8 shadow-xl flex flex-col items-center">
          <h3 className="text-white text-xl font-bold mb-6 tracking-wide">Soft Skills</h3>
          <div className="flex flex-wrap gap-6 justify-center">
            {skillsData.soft.map((skill, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-[#23204a] border border-[#25213b] rounded-lg px-6 py-4 shadow-md hover:shadow-violet-500/30 transition-all duration-300 min-w-[140px] animate-fade-in"
              >
                {softSkillIcons[skill] || <FaLightbulb className="text-2xl text-[#16f2b3]" />}
                <span className="mt-2 text-[#16f2b3] font-semibold text-base text-center">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;