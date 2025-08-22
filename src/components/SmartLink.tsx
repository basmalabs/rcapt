import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

export type SmartLinkProps = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
    href: string;
  };

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
