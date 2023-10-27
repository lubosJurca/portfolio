import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionProvider from "@/context/activeSectionProvider";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";
import ThemeContextProvider from "@/context/themeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lubos Jurca",
  description: "Lubos Jurca Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-zinc-800 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#f1b1b3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#4a2b2b]"></div>
        <div className="bg-[#7884ab] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#493128]"></div>

        <ThemeContextProvider>
          <ActiveSectionProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
            <Footer />
          </ActiveSectionProvider>
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
