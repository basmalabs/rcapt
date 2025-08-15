"use client"

import React from 'react';
import clsx from 'clsx';
import type { ButtonProps } from "@/mytypes/compProps";
import { useRouter } from 'next/navigation';

const buttonStyles = {
  base: clsx(
    "rounded-xl px-4 py-2 transition-colors",
    "text-green-700 dark:text-white",
    "hover:text-white dark:hover:text-green-700",
    "bg-green-100 hover:bg-green-500",
    "dark:bg-green-700 dark:hover:bg-green-100",
    "border-2 border-green-400 dark:border-green-600",
    "active:scale-95 active:bg-green-600 dark:active:bg-green-200",
    "active:text-white dark:active:text-green-700"
  ),
};


function Button({ children, route, ...props }: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (route) {
      router.push(route);
    }
  };

  return (
    <button
      className={ buttonStyles.base }
      onClick={ handleClick }
      { ...props }
    >
      {children}
    </button>
  );
}

export default Button;
