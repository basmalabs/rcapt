"use client"

import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  route?: string;
};

const styles = {
  base: clsx(
    "px-4 py-2 transition-colors",
    // "text-md md:text-lg",
    "text-white hover:text-green-800 dark:hover:text-green-900",
    "bg-green-600 hover:bg-green-400 dark:hover:bg-green-300",
    // "border-2 border-green-400 dark:border-green-600",
    "active:scale-95 active:bg-green-600 dark:active:bg-green-200",
    "active:text-white dark:active:text-green-700",
    "shadow-xl shadow-green-600/20 hover:shadow-green-400/20"
  ),
};


function Button({ children, route, className, ...props }: ButtonProps) {
  const router = useRouter();

  // Route works even if onClick prop is passed.
  const handleClick = ( e: React.MouseEvent<HTMLButtonElement> ) => {
    props.onClick?.( e );
    // Prevent default behavior if route is defined
    if ( route && !e.defaultPrevented ) {
      router.push( route );
    }
  };

  return (
    <button
      className={ clsx( className, styles.base ) }
      onClick={ handleClick }
      { ...props }
    >
      {children}
    </button>
  );
}

export default Button;
