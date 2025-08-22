"use client"

import clsx from "clsx";

const styles = {
  section: clsx(
    // "flex flex-col md:flex-row items-center justify-between",
    "w-full md:w-[70vw] lg:w-[50vw] mx-auto p-6 md:py-4 space-y-3 md:space-y-0 md:space-x-6"
  ),
  title: clsx(
    "pt-10 md:pt-14 pb-2 md:pb-2",
    "text-5xl md:text-5xl font-extrabold text-center"
  ),
  subtitle: clsx(
    "pb-4",
    "text-lg md:text-xl font-normal text-center"
  ),
  googleText: clsx(
    "font-semibold text-yellow-600 dark:text-yellow-200"
  ),
  button: clsx( "text-base md:text-lg lg:text-xl" ),
};

export default function ReviewHeader() {
  return (
    <>
      <section className={ styles.section }>
        <h1 className={ styles.title }>What Our Customers Say</h1>
        <p className={ styles.subtitle }>
          Real reviews on{ " " }
          <span className={ styles.googleText }>
            Google
          </span>
          { " " } from people who have experienced our services.
        </p>
      </section>
    </>
  )
}
