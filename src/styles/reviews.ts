import clsx from "clsx";

export const reviewCardStyle = {
  container: clsx(
    "flex flex-col w-full",
    "p-4 md:p-6",
    "bg-green-100 dark:bg-green-800",
    "border border-green-200 dark:border-green-700 rounded-2xl",
    "shadow-md shadow-green-400 transition-shadow duration-300",
  ),
  titleDiv: clsx( "flex items-center mb-2" ),
  titleTextDiv: clsx( "ml-3" ),
  starsDiv: clsx( "flex mb-2 place-self-center" ),
  profileImage: clsx( "rounded-full" ),
  name: clsx( "font-bold text-lg" ),
  time: clsx( "text-sm" ),
  ratingStar: ( state: boolean ) => clsx(
    state
      ? "text-yellow-400"
      : "text-gray-300",
  ),
  reviewText: clsx(
    "text-justify",
    "line-clamp-4"
  ),
  readMore: clsx(
    "w-full rounded-xl text-sm mt-2 place-self-center",
  ),
}

export const loadReviewsStyle = {
  container: clsx(
    "max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw]",
    "m-auto mb-4",
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    "gap-4 md:gap-6 lg:gap-8"
  ),
}

export const readMoreModalStyles = {
  container: "p-4",
  title: "text-xl md:text-2xl lg:text-4xl",
  starsDiv: "flex items-center",
  ratingStar: (isFilled: boolean) => `text-yellow-500 ${isFilled ? 'opacity-100' : 'opacity-50'}`,
  review: clsx(
    "text-base md:text-lg lg:text-xl",
    "m-4 md:mx-6 lg:mx-10 text-justify"
  ),
  date: "text-sm md:text-base lg:text-lg",
  dataSource: "text-xs text-gray-900/70 dark:text-white/70",
};