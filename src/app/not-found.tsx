import type { Metadata } from "next";
import { TITLE_NAME } from "@/utils/constants";
import clsx from "clsx";
import Button from "@/components/Button";


const styles = {
  container: clsx(
    "flex flex-col items-center justify-center min-h-[60vh]",
    "dark:bg-gray-900 dark:text-white"
  ),
  title: clsx("text-9xl font-bold mb-4 text-green-400 dark:text-green-500"),
  message: clsx("text-3xl mb-6"),
  link: clsx("px-4 py-2 border-2 border-green-500 text-green-500 rounded-xl hover:bg-green-500 hover:text-white"),
};

export default function NotFound() {

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Oops! Page not found.</p>
      <Button route="/">Go back home</Button>
    </div>
  );
}

export const metadata: Metadata = {
  title: `Page Not Found | ${TITLE_NAME}`,
  description: "404 - Page Not Found",
};