import clsx from "clsx";

export const containerStyles = {
  footer: clsx(
      "flex flex-col items-center justify-center",
      "px-4 py-4 w-full min-h-[10vh]",
      "bg-green-100/30 text-gray-900",
      "dark:bg-green-900/30 dark:text-white"
    ),
    container: clsx(
      "flex flex-col md:flex-row items-top justify-center",
      "py-2 space-y-8 md:space-x-8",
    ),
}

export const sectionStyles = {
  container: clsx( "grow-1 flex flex-col space-y-4 max-w-[60vw] md:max-w-[30vw]" ),
  header: clsx(
    "text-lg font-semibold",
    "text-green-700 dark:text-green-400"
  ),
}

export const sectionsArrange = {
  m3w2: "order-3 md:order-2 mt-4 md:mt-0",
  m2w3: "order-2 md:order-3 mt-4 md:mt-0",
}

export const contactStyles = {
  div: clsx( "flex flex-row gap-2" ),
  icon: clsx( "grow-0" ),
  text: clsx( "grow-1" ),
}

// For Social Icons and their container
export const socialStyles = {
  div: clsx( "flex flex-row gap-2 justify-left mt-2" ),
  icon: clsx( "" )
}

export const poweredByStyles = {
  container: clsx(
    "flex flex-col items-center justify-center",
    "py-4 space-y-2"
  ),
  link: clsx(
    "text-green-700 hover:underline dark:text-green-400 font-bold"
  ),
  icon: clsx( "inline" ),
  text: clsx( "" )
}

export const tableStyles = {
  wrapper: clsx( 
    "overflow-x-auto", // prevent overflow issues on mobile
    "mt-1"
  ),
  table: clsx(
    "table-auto border-collapse w-full text-sm",
  ),
  th: clsx(
    "border-b border-green-300 dark:border-green-700",
    "px-4 py-2 text-left font-semibold",
    "bg-green-100/50 dark:bg-green-900/50"
  ),
  tr: (isOpen: boolean) => clsx(
    "border-b border-green-200 dark:border-green-700",
    isOpen && "bg-green-100 dark:bg-green-900"
  ),
  td: clsx(
    "border-b border-green-200 dark:border-green-700",
    "px-2 py-2"
  ),
};

export const currentStatusStyles = {
  wrapper: (isOpen: boolean) => clsx(
    "flex flex-row item-start p-3",
    isOpen
      ? "bg-green-300 dark:bg-green-800/30"
      : "bg-red-300 dark:bg-red-800/30",
  ),
  label: clsx( "basis-sm text-sm font-normal" ),
  value: clsx( "basis-xl justify-self-center text-3xl text-center uppercase font-bold" ),
}

export const callToActionStyle = {
  div: clsx( "flex flex-col space-y-2" ),
  button: clsx( "w-full" ),
  header: clsx(
    "text-normal font-semibold",
    "text-green-900 dark:text-green-100",
  ),
  link: clsx( "hover:underline text-sm cursor-pointer" ),
}