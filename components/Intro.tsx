"use client";

import Image from "next/image";
import Link from "next/link";

// framer motion
import { motion } from "framer-motion";

// images
import portrait from "@/public/portrait.png";

// react icons
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section ref={ref} className="mb-28 max-w-[50rem] h-screen">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Image
              src={portrait}
              alt="Portrait"
              className="h-24 w-24 rounded-full object-cover shadow-xl border-[0.35rem] border-white"
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-4xl"
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-center"
      >
        <span className="font-bold">Hi, my name is Lubos.</span> I am Junior{" "}
        <span className="font-bold">Frontend Developer.</span> I enjoy building{" "}
        <span className="italic">sites and apps.</span> My focus is{" "}
        <span className="underline">React(Next.js).</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-col sm:flex-row justify-center items-center gap-2 text-lg font-medium"
      >
        <Link
          className="group flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition bg-gray-900 text-white px-7 py-3"
          href="#contact"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-50 group-hover:translate-x-1 transition " />{" "}
        </Link>

        <a
          className="group flex items-center justify-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition bg-white text-gray-900 px-7 py-3 border border-black/10 dark:bg-white/10 dark:text-white/80 "
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-50 group-hover:translate-x-1 transition" />{" "}
        </a>

        <a
          href="https://www.linkedin.com/in/lubo%C5%A1-jur%C4%8Da-364262237"
          target="_blank"
          className="flex items-center justify-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition bg-white text-gray-900 text-[1.25rem] p-4 border border-black/10 dark:bg-white/10 dark:text-white/80"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/lubosJurca"
          target="_blank"
          className="flex items-center justify-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition bg-white text-gray-900 text-xl p-4 border border-black/10 dark:bg-white/10 dark:text-white/80"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
