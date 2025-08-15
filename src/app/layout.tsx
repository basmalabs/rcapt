import type { Metadata } from "next";
import "./globals.css";
import { TITLE_NAME } from "@/utils/constants";
import MainLayout from "@/components/MainLayout";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
    icon: "/rcapt.ico"
  },
};
