"use client";

import Image from "next/image";
import portrait from "@/public/portrait.jpg";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem]">
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
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-center"
      >
        <span className="font-bold">Hi, my name is Lubos.</span> I am Junior{" "}
        <span className="font-bold">Frontend Developer.</span> I enjoy building{" "}
        <span className="italic">sites and apps.</span> My focus is{" "}
        <span className="underline">React(Next.js).</span>
      </motion.p>
    </section>
  );
};

export default Intro;
