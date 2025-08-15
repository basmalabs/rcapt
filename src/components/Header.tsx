"use client"

import NavBar from '@/components/header/NavBar';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { HEADER_LOGO_SRC } from '@/utils/constants';
import { useState, useEffect } from 'react';
import { headerStyles} from '@/styles/header';

function Header() {
  const [ isMobile, setIsMobile ] = useState( false );
  const [ isScrolled, setIsScrolled ] = useState( false );

  useEffect( () => {
    const handleResize = () => setIsMobile( window.innerWidth < 768 );
    const handleScroll = () => setIsScrolled( window.scrollY > 20 );

    // Checking initial state
    handleResize();
    handleScroll();

    // Adding event listeners
    window.addEventListener( "resize", handleResize );
    window.addEventListener( "scroll", handleScroll );

    // Cleanup
    return () => {
      window.removeEventListener( "resize", handleResize );
      window.removeEventListener( "scroll", handleScroll );
    };
  }, [] );

  return (
    // <header className={ clsx( styles.header, styles.headerAtTop ) }>
    <header className={clsx(headerStyles.header, isScrolled ? headerStyles.headerNotAtTop : headerStyles.headerAtTop)}>
      {/* <div className={ styles.div }> */}
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
