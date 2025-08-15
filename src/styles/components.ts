import clsx from "clsx";

export const modalStyles = {
  bg: clsx(
    "fixed inset-0 z-50",
    "flex items-center justify-center",
    "bg-black/50 px-4",
  ),
  container: clsx(
    "p-6 rounded-lg shadow-lg w-96",
    "bg-white dark:bg-gray-800",
    "w-full max-w-md max-h-[75vh] overflow-y-auto",
    "transform transition-all"
  ),
}