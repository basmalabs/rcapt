import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { SmartLinkProps } from '@/mytypes/compProps';

export default function SmartLink( { children, href, ...props }: SmartLinkProps ) {
  const pathname = usePathname();

  const handleClick = ( e: React.MouseEvent<HTMLAnchorElement> ) => {
    if ( pathname === href ) {
      e.preventDefault(); // Prevent reload if already on this page
    }
  };

  return (
    <Link
      href={ href }
      onClick={ handleClick }
      { ...props }
    >
      { children }
    </Link>
  );
}
