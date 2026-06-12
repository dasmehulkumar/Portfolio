// "use client";

// import { useEffect, useState } from "react";
// import { personalData } from "@/utils/data/personal-data";
// import AboutSection from "../homepage/about";
// // import Blog from "./homepage/blog";
// import ContactSection from "../homepage/contact";
// import Education from "../homepage/education";
// import Experience from "../homepage/experience";
// import HeroSection from "../homepage/hero-section";
// import Projects from "../homepage/projects";
// import Publications from "../homepage/Publications";
// import Skills from "../homepage/skills";

// export default function ClientHome() {
//   //   const [blogs, setBlogs] = useState([]);

//   //   useEffect(() => {
//   //     async function getData() {
//   //       try {
//   //         const res = await fetch(
//   //           `https://dev.to/api/articles?username=${personalData.devUsername}`
//   //         );
//   //         const data = await res.json();
//   //         const filtered = data
//   //           .filter((item) => item?.cover_image)
//   //           .sort(() => Math.random() - 0.5);
//   //         setBlogs(filtered);
//   //       } catch (e) {
//   //         console.error("Failed to fetch blogs", e);
//   //       }
//   //     }
//   //     getData();
//   //   }, []);

//   return (
//     <div suppressHydrationWarning>
//       <HeroSection />
//       <AboutSection />
//       <Experience />
//       <Skills />
//       <Projects />
//       <Publications />
//       <Education />
//       {/* <Blog blogs={blogs} /> */}
//       <ContactSection />
//     </div>
//   );
// }
