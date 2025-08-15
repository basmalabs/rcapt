import clsx from "clsx";

export const buttonStyles = {
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

export const modalStyles = {
  bg: clsx(
    "fixed inset-0 z-50",
    "flex items-center justify-center",
    "bg-black/50 dark:bg-white/50 px-4",
  ),
  container: clsx(
    "p-6 rounded-lg shadow-lg w-96",
    "bg-white dark:bg-gray-800",
    "w-full max-w-[85vw] max-h-[75vh] overflow-y-auto",
    "transform transition-all"
  ),
};

export const modalArticleStyles = {
  container: clsx(
    "max-w-4xl mx-auto p-6 space-y-6 text-gray-900 dark:text-gray-100 text-justify"
  ),
  h1: clsx(
    "text-left text-4xl font-bold text-green-700 dark:text-green-300"
  ),
  h2: clsx(
    "text-left text-xl uppercase font-semibold text-green-700 dark:text-green-300"
  ),
  section: clsx( "space-y-2" ),
  list: clsx( "list-disc list-outside space-y-1 pl-5" ),
  link: clsx( "text-green-600 dark:text-green-400 hover:underline active:underline" )
};