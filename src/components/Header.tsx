"use client"

import NavBar from '@/components/header/NavBar';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { HEADER_LOGO_SRC } from '@/utils/constants';
import { headerStyles } from '@/styles/header';
import { useUIStore } from '@/store/useUIStore';

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
