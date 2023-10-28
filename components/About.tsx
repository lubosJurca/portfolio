"use client";

import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
      className=" max-w-[45rem] text-center leading-8 px-4 sm:px-0 scroll-mt-28 "
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        While working in a different field I decided to make a career change. I had always been interested in programming and decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned {" "}
        <span className="font-medium">frontend web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Firebase and Tailwind CSS.
        </span>
         I am also familiar with TypeScript and Next.js. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a frontend
        developer.
      </p>

      <p>
        <span className="italic">When I am not coding</span>, I enjoy spending time with my family, hiking, and playing football. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning{" "}
        <span className="font-medium">Vue.js and German language</span>. I am also
        learning how to be role model for my daughter.
      </p>
    </motion.section>
  );
};

export default About;
