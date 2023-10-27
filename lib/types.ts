import { links } from "./data";

// active section props
export type SectionNameProps = (typeof links)[number]["name"];


export type ActiveSectionProviderProps = {
  children: React.ReactNode;
};

// create context type
export type ActiveSectionContextType = {
  activeSection: SectionNameProps;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionNameProps>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export type ContactFormProps = {
  message: string;
  email: string;
};

export type Theme = "light" | "dark";

export type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
