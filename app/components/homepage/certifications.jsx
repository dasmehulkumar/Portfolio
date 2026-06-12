// @flow strict
import { certifications } from "@/utils/data/certifications";
import Image from "next/image";
import { FaCertificate } from "react-icons/fa";
import GlowCard from "../helper/glow-card";

function CertificationsSection() {
  return (
    <div id="certifications" className="relative z-50 my-12 lg:my-24">
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
            <FaCertificate className="text-blue-400 animate-bounce" /> Certifications
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {certifications.map((cert) => (
          <GlowCard key={cert.id} identifier={`certification-${cert.id}`}>
            <div className="p-3 relative text-white">
              <Image
                src="/blur-23.svg"
                alt="Hero"
                width={1080}
                height={200}
                className="absolute bottom-0 opacity-80"
              />
              <div className="w-full h-48 relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-semibold text-lg text-center">{cert.title}</h3>
              <p className="text-sm text-center mt-1">{cert.issuer}</p>
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  );
}

export default CertificationsSection; 