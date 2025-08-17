"use client"

import React from 'react';
import clsx from 'clsx';
import { buttonStyles } from '@/styles/components';
import type { ButtonProps } from "@/mytypes/compProps";
import { useRouter } from 'next/navigation';


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
      className={ clsx( className, buttonStyles.base ) }
      onClick={ handleClick }
      { ...props }
    >
      {children}
    </button>
  );
}

export default Button;
