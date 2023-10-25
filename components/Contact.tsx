"use client";

import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import Button from "./Button";


const Contact = () => {
  const { ref } = useSectionInView("Contact");
 

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="sm:mb-[200rem] scroll-mt-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-4">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:lubos.jurca@gmail.com">
          lubos.jurca@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        action={async (formData) => await sendEmail(formData)}
        className="group mt-10 flex flex-col "
      >
        <input
          placeholder="Your email"
          name="email"
          type="email"
          required
          maxLength={100}
          className="h-14 rounded-lg border border-black/10 outline-none p-4"
        />
        <textarea
          name="message"
          required
          maxLength={500}
          placeholder="Your message"
          className="border border-black/10 h-52 my-3 p-4 outline-none rounded-lg"
        ></textarea>
        <Button />
      </form>
    </motion.section>
  );
};

export default Contact;
