import clsx from "clsx";

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

// General Text Styles in Footer Section
export const textStyles = {
  h1: clsx(
    "text-3xl font-semibold text-center",
    "text-green-700 dark:text-green-400"
  ),
  contact_p: clsx("text-center text-xl"),
  link: clsx( "hover:underline cursor-pointer" ),
}

// Reordering items in a section
export const reArrange = {
  m3w2: "order-3 md:order-2 mt-4 md:mt-0",
  m2w3: "order-2 md:order-3 mt-4 md:mt-0",
}

// Contact Component Styles
export const contactStyles = {
  // Main container for contact information
  div: clsx( "flex flex-row gap-2 justify-center items-center" ),
  // Each subcontainers directly in the contact component
  // except the top texts.
  contactsDiv: clsx(
    "flex flex-col md:flex-row justify-center",
    "space-y-2 md:space-y-0 md:space-x-8"
  ),
  // Container call, email and address
  contactsSubDiv: clsx(
    // Container for each contact method
    "flex flex-row md:flex-col items-center justify-evenly",
    "py-2 px-4 space-x-4 md:space-x-0 md:space-y-2",
    // Normal View
    "text-left md:text-center ",
    "text-green-800 dark:text-green-900",
    "bg-green-400 dark:bg-green-300",
    "border-2 border-green-500",
    // Hover Effects
    "hover:text-green-100 dark:hover:text-green-300",
    "hover:bg-green-600 dark:hover:bg-green-900",
    "hover:border-2 hover:border-green-700 dark:hover:border-green-200",
    // Active Effects
    "active:text-white dark:active:text-green-700",
    "active:scale-95 active:bg-green-600 dark:active:bg-green-200",
  ),
  button: clsx( "w-full md:w-[300px] rounded-none" ),
  contactIcon: clsx( "grow-0" ),
  socialIcon: clsx( "" ),
  text: clsx( "grow-1" ),
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
    isOpen && "bg-green-400 dark:bg-green-600"
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
      ? "bg-green-400 dark:bg-green-600"
      : "bg-red-400 dark:bg-red-700",
  ),
  label: clsx( "basis-sm text-sm font-normal" ),
  value: clsx( "basis-xl justify-self-center text-3xl text-center uppercase font-bold" ),
}

export const callToActionStyle = {
  div: clsx(
    "flex flex-col md:flex-row justify-center item-center",
    // "pt-2 md:pt-6",
    "divide-y-2 md:divide-x-2 md:divide-y-0"
  ),
  p: clsx("py-2 md:px-4 md:py-0 lg:px-10 uppercase text-center"),
}

export const poweredByStyles = {
  container: clsx(
    "flex flex-col md:flex-row items-center justify-center",
    // "pt-2 pb-4",
    "space-y-2 md:space-x-4 md:space-y-0"
  ),
  link: clsx(
    "text-green-700 hover:underline dark:text-green-400 font-bold"
  ),
  icon: clsx( "inline" ),
}