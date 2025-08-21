"use client"

import clsx from "clsx";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";

function GeneralLayout( { children }: { children: React.ReactNode } ) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Header />
        <main
          className={ clsx(
            "min-h-[60vh] ",
            "text-gray-900 dark:text-white",
            "bg-white dark:bg-gray-900",
          ) }
        >
          { children }
        </main>
        <ThemeSwitcher />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default GeneralLayout;
