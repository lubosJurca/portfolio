"use client";

import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import Button from "./Button";
import toast from "react-hot-toast";
import { useRef } from "react";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className=" scroll-mt-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-4 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:lubos.jurca@gmail.com">
          lubos.jurca@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
      ref={formRef}
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          formRef.current?.reset()
          toast.success("Email sent successfully");
        }}
        className="group mt-10 flex flex-col dark:text-black/80 mx-4"
      >
        <input
          placeholder="Your email"
          name="email"
          type="email"
          required
          maxLength={100}
          className="h-14 rounded-lg border border-black/10 outline-none p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all  "
        />
        <textarea
          name="message"
          required
          maxLength={500}
          placeholder="Your message"
          className="border border-black/10 h-52 my-3 p-4 outline-none rounded-lg dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
        ></textarea>
        <Button />
      </form>
    </motion.section>
  );
};

export default Contact;
