"use client";

import { createContext, useContext, useState } from "react";
import { ActiveSectionContextType, ActiveSectionProviderProps, SectionNameProps } from "@/lib/types";


//creating context
export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);


// creating provider
const ActiveSectionProvider = ({ children }: ActiveSectionProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionNameProps>("Home");
  
   // used to prevent active section from changing when user clicks on a link
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {" "}
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionProvider;

// custom hook to handle null in context
export function useActiveSection() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error("useActiveSection must be used within a provider");
  }

  return context;
}
