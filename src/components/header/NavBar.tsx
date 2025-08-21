"use client";

import clsx from "clsx";

import SmartLink from "@/components/SmartLink";
import { usePathname } from "next/navigation";

const navStyles = {
  nav: clsx(
    "flex  flex-row flex-wrap p-2 md:p-4 w-full space-x-4 justify-center",
  ),
  link: ( href: string, pathname: string ) => clsx(
    "block p-2 md:p-4 text-base",
    "hover:bg-green-400 dark:hover:bg-green-600 hover:shadow-md hover:z-10",
    pathname === href
      ? "text-green-700 dark:text-green-400 font-bold hover:text-green-900 dark:hover:text-white"
      : "text-gray-900 dark:text-white",
  ),
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
  { href: "/patient-forms", label: "Patient Forms" },
];

const NavBar = () => {
  const pathname = usePathname();
  const linkStyles = ( href: string ) => navStyles.link( href, pathname );

  return (
    <nav className={navStyles.nav}>
      {NAV_LINKS.map( ( { href, label } ) => (
        <SmartLink
          key={ href }
          href={ href }
          className={ linkStyles( href ) }
        >
          {label}
        </SmartLink>
      ))}
    </nav>
  );
};

export default NavBar;

