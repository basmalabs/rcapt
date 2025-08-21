import clsx from "clsx";

// General Styles in Footer Section
export const containerStyles = {
  // Footer Container
  footer: clsx(
    "flex flex-col items-center justify-center",
    "p-0 w-full min-h-[10vh]",
    "space-y-8 md:space-y-4",
    "bg-green-200 text-gray-900",
    "dark:bg-green-950 dark:text-white"
  ),
  // Each sub-container directly in the footer.
  container: clsx(
    "flex flex-col space-y-4 w-full max-w-[80vw] md:max-w-[75vw] lg:max-w-[60vw]",
    "m-auto py-8 lg:py-12"
  ),
}

export const textStyles = {
  h1: clsx(
    "text-3xl font-semibold text-center",
    "text-green-700 dark:text-green-400"
  ),
  contact_p: clsx( "text-center text-xl" ),
  link: clsx( "hover:underline cursor-pointer" ),
}

// Reordering items in a section
export const reArrange = {
  m3w2: "order-3 md:order-2 mt-4 md:mt-0",
  m2w3: "order-2 md:order-3 mt-4 md:mt-0",
}

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