import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import audiophile from "@/public/audiophile.png";
import linkedIn from "@/public/Linkedin_Clone.png";
import portfolio from "@/public/portfolio.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Skillmea",
    description:
      "I enrolled course to learn  HTML, CSS and JavaScript. I own a certificate for completing the course.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "FreeCodeCamp",
    description:
      "I took a course to learn Responsive Web Design. I own a certificate for completing the course.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Scrimba",
    description:
      "I followed a course FrontEnd Path with focus on React. I own a certificate for completing the course.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2023",
  },
] as const;

export const projectsData = [
  {
    title: "Audiophile",
    description:
      "I created this e-commerce site for a challenge. You can add products to the cart and proceed to checkout. It's fully responsive.",
    tags: ["React", "React Router", "Responsive design", "Firebase"],
    imageUrl: audiophile,
    linkUrl: "https://audiophile-ecommerce-tan.vercel.app/",
  },
  {
    title: "LinkedIn Clone",
    description:
      "I created this LinkedIn clone for a challenge. It's fully responsive. Redux for state management and Firebase for authentication.",
    tags: ["React", "Firebase", "Redux", "Material UI", "Tailwind"],
    imageUrl: linkedIn,
    linkUrl: "https://linkedin-2-0-one.vercel.app/",
  },
  {
    title: "Portfolio",
    description:
      "I created this portfolio to showcase my skills. It's fully responsive.",
    tags: ["React", "Next.js", "Typescript", "Tailwind", "Framer-motion"],
    imageUrl: portfolio,
    linkUrl: "https://portfolio-steel.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Firebase",
  "Figma",
  "Next.js",
  "Git",
  "Tailwind",
  "Redux",
  "Framer Motion",
] as const;
