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
    "bg-black/50 px-4",
  ),
  container: clsx(
    "p-6 rounded-lg shadow-lg w-96",
    "bg-white dark:bg-gray-800",
    "w-full max-w-md max-h-[75vh] overflow-y-auto",
    "transform transition-all"
  ),
}