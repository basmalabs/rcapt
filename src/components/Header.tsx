"use client"

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import { HEADER_LOGO_SRC } from '@/utils/constants';
import { useUIStore } from '@/store/useUIStore';
import NavBar from '@/components/header/NavBar';

const headerStyles = {
  header: clsx(
    "flex flex-col md:flex-row",
    "items-center justify-evenly",
    "fixed top-0 left-0 right-0 z-500",
    "transition-all duration-500"
  ),
  headerNotAtTop: clsx(
    "px-2 py-2 md:px-4 md:py-4",
    "backdrop-blur-md bg-green-300/70 text-gray-900",
    "dark:bg-green-950/70 dark:text-white",
    "shadow-sm shadow-green-100 dark:shadow-green-900",
  ),
  headerAtTop: clsx(
    "px-2 py-2 md:px-4 md:py-4 bg-none",
    "text-gray-900 dark:text-white",
  ),
  div: clsx( "flex items-center" ),
  divRemoved: clsx( "hidden" ),
  logoImage: clsx( "hover:scale-105 transition-transform duration-200" ),
};

function Header() {
  const { isMobile, isScrolled } = useUIStore();

  return (
    <header className={clsx(headerStyles.header, isScrolled ? headerStyles.headerNotAtTop : headerStyles.headerAtTop)}>
      <div className={ isMobile && isScrolled ? headerStyles.divRemoved : headerStyles.div }>
        <Link href="/">
          <Image
            src={HEADER_LOGO_SRC}
            alt="RCA Physical Therapy Inc. Logo"
            height={100}
            width={100}
            className={headerStyles.logoImage}
          />
        </Link>
      </div>
      <div className={headerStyles.div}>
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
