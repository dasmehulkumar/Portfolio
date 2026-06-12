// @flow strict
import { hobbies } from "@/utils/data/hobbies";

function HobbiesSection() {
  return (
    <div id="hobbies" className="relative z-50 my-12 lg:my-24">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md flex items-center gap-2">
            Hobbies
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {hobbies.map((hobby, idx) => (
          <div
            key={idx}
            className="bg-[#18143a] border border-[#25213b] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {hobby.icon}
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">{hobby.title}</h3>
            <p className="text-gray-300 text-sm">{hobby.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HobbiesSection; 