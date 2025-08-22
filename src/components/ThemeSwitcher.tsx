"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import clsx from "clsx";
import { useEffect, useState } from "react";

const styles = {
  button: clsx(
    "flex items-center justify-center",
    "fixed w-16 h-16 bottom-8 right-4 shadow-lg",
    "rounded-full",
    "bg-green-700 dark:bg-green-400",
    "hover:bg-green-600 dark:hover:bg-green-300",
    "transition-colors",
    "z-600"
  ),
  icon: clsx(
    "text-white w-8 h-8"
  ),
};

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [ mounted, setMounted ] = useState( false );

  // Ensure component is mounted to prevent hydration mismatch
  useEffect( () => {
    setMounted( true );
  }, [] );

  if ( !mounted ) {
    return null;
  }

  const toggleTheme = () => {
    setTheme( theme === "dark" ? "light" : "dark" );
  };

  return (
    <button
      onClick={ toggleTheme }
      className={ styles.button }
      title="Toggle Theme"
    >
      { theme === "dark" ? <Sun className={styles.icon} /> : <Moon className={styles.icon} /> }
    </button>
  );
}

export default ThemeSwitcher;
