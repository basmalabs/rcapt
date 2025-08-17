"use client";

import SmartLink from "@/components/SmartLink";
import { usePathname } from "next/navigation";
import { navStyles } from "@/styles/header";

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

