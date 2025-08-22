import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { TITLE_NAME } from "@/utils/constants";
import MainLayout from "@/components/MainLayout";

const font = Roboto({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ font.className }>
      <body>
          <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: `${TITLE_NAME} | Your Partner for Physical Therapy`,
  description: `${TITLE_NAME} | Your Partner for Physical Therapy`,
  icons: {
    icon: "https://res.cloudinary.com/farooqdotdev/image/upload/v1755189113/rcapt/logo.png"
  },
};
