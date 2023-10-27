"use client";

import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

const Button = () => {
  const { pending } = useFormStatus();
  return (
    <button
    disabled={pending}
      type="submit"
      className="h-[3rem] w-[8rem] bg-gray-900 text-white dark:bg-white dark:bg-opacity-10  rounded-full outline-none flex justify-center items-center gap-2 transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 disabled:opacity-50 disabled:cursor-not-allowed "
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white "></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1" />
        </>
      )}
    </button>
  );
};

export default Button;
