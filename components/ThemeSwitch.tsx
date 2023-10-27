"use client";

import { useTheme } from "@/context/themeContext";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-30 backdrop-blur-[0.5rem] border  border-white border-opacity-40 shadow-2xl rounded-full flex justify-center items-center hover:scale-110 active:scale-105 transition-all dark:bg-slate-950 "
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitch;
