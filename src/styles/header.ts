import clsx from "clsx";

export const headerStyles = {
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

export const navStyles = {
  nav: clsx(
    "flex  flex-row flex-wrap p-2 md:p-4 w-full space-x-4 justify-center",
  ),
  link: ( href: string, pathname: string ) => clsx(
    "block p-2 md:p-4 text-base",
    "hover:bg-green-400 dark:hover:bg-green-600 hover:shadow-md hover:z-10",
    pathname === href
      ? "text-green-700 dark:text-green-400 font-bold hover:text-green-900 dark:hover:text-white"
      : "text-gray-900 dark:text-white",
  ),
};