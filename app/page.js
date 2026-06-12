import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import AchievementsSection from "./components/homepage/achievements";
import CertificationsSection from "./components/homepage/certifications";
import HobbiesSection from "./components/homepage/hobbies";
import PublicationsSection from "./components/homepage/Publications";

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <PublicationsSection />
      <Education />
      <AchievementsSection />
      <CertificationsSection />
      <HobbiesSection />
      <ContactSection />
    </div>
  );
}