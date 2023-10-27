"use client";

import {
  Theme,
  ThemeContextProviderProps,
  ThemeContextType,
} from "@/lib/types";
import React, { useEffect, useState, createContext, useContext } from "react";

// create context
const ThemeContext = createContext<ThemeContextType | null>(null);

// create provider
export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

//   toggle theme
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

    // set theme based on local storage or system preferences on first load
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// create hook to handle null context
export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
