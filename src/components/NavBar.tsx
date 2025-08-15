"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NavBar = () => {
  const pathname = usePathname();
  const styles = {
    nav: clsx(
      "flex flex-row flex-wrap p-4 w-full space-x-4 justify-center",
      // "border-2 border-green-400 rounded-xl shadow-md"
    ),
    link: ( href: string ) => clsx(
      "block p-2 rounded-md text-md",
      pathname === href
        ? "text-white bg-green-400 dark:bg-green-600 rounded-xl shadow-md z-10"
        : "text-gray-700 dark:text-white hover:text-green-600 dark:hover:text-green-400",
    ),
  };

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.link("/")}>
        Home
      </Link>
      <Link href="/about" className={styles.link("/about")}>
        About
      </Link>
      <Link href="/services" className={styles.link("/services")}>
        Services
      </Link>
      <Link href="/reviews" className={styles.link("/reviews")}>
        Reviews
      </Link>
      <Link href="/contact" className={styles.link("/contact")}>
        Contact
      </Link>
      <Link href="/patient-forms" className={styles.link("/patient-forms")}>
        Patient Forms
      </Link>
    </nav>
  );
};

export default NavBar;
