import clsx from "clsx";

export const buttonStyles = {
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

export const modalStyles = {
  bg: clsx(
    "fixed inset-0 z-50",
    "flex items-center justify-center",
    "bg-black/20 dark:bg-white/20 px-4",
    "opacity-0 transition-opacity",
    "delay-150 duration-500 ease-in",
  ),
  bg_transition: (isOpen: boolean) =>
    clsx(
      isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
    ),
  container: clsx(
    "relative",
    "p-4 md:p-6 rounded-lg shadow-lg w-96",
    "bg-white dark:bg-gray-800",
    "w-full max-w-[85vw] lg:max-w-[70vw]",
  ),
  buttonDiv: clsx( "flex justify-end bg-inherit z-10" ),
  childrenDiv: clsx(
    "overflow-y-auto scrollbar-hidden",
    "max-h-[75vh] md:max-h-[85vh]",
  ),
  closeButton: clsx( "absolute top-3 right-3 px-2 text-6xl" ),
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

export const appointmentFormStyles = {
  container: clsx(
    "max-w-2xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg"
  ),
  headerDiv: clsx( "mb-8 text-center" ),
  groupDiv: clsx(
    "w-full flex",
    "flex-col md:flex-row md:flex-wrap gap-4"
  ),
  fieldDiv: clsx( "mb-4 w-full md:w-[48%]" ),
  label: clsx(
    "block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
  ),
  input: clsx(
    "w-full p-2",
    "border border-green-400 rounded-lg",
    "text-gray-900 dark:text-gray-100 dark:bg-gray-800",
    "focus:ring-2 focus:ring-green-400 focus:outline-none"
  ),
  warning: clsx( "text-yellow-800 dark:text-yellow-200 text-sm mb-4" ),
  error: clsx( "text-red-600 dark:text-red-400 text-sm mt-1" ),
  button: clsx(
    "w-full mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
  ),
  mainHeading: clsx(
    "text-2xl md:text-4xl font-bold",
    "text-green-600 dark:text-green-400"
  ),
  mainSubHeading: clsx( "text-base md:text-lg" ),
  divHeading: clsx(
    "text-xl md:text-2xl mb-2",
    "text-green-800 dark:text-green-200"
  ),
};
