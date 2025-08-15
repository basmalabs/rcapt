import NavBar from '@/components/NavBar';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

const styles = {
  header: clsx(
    "flex flex-col md:flex-row",
    "items-center justify-evenly",
    "px-4 py-4 w-full md:px-2 py-4",
    "bg-green-100/30 text-gray-900",
    "dark:bg-green-900/30 dark:text-white",
    "shadow-sm dark:shadow-green-900",
    // "border-b border-green-300 dark:border-green-900",
    "fixed top-0 left-0 right-0 z-50"
  ),
  div: clsx( "flex items-center" ),
  logoImage: clsx( "hover:scale-105 transition-transform duration-200" ),
};

function Header() {
  return (
    <header className={styles.header}>
      <div className={ styles.div }>
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/farooqdotdev/image/upload/v1755189113/rcapt/logo.png"
            alt="RCA Physical Therapy Inc. Logo"
            height={ 100 }
            width={ 100 }
            className={ styles.logoImage }
          />
        </Link>
      </div>
      <div className={styles.div}>
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
