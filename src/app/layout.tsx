import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TITLE_NAME } from "@/utils/constants";
import ThemeSwitcher from "@/components/ThemeSwitcher";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-[80vh] bg-white dark:bg-gray-900">
            { children }
            <ThemeSwitcher />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: `${TITLE_NAME} | Your Partner for Physical Therapy`,
  description: `${TITLE_NAME} | Your Partner for Physical Therapy`,
  icons: {
    icon: "/rcapt.ico"
  },
};
