"use client";

import clsx from "clsx";
import Link from "next/link";
import { Copyright } from "lucide-react";

import { BASMA_LABS_URL } from "@/utils/constants";
import { textStyles } from "./styles";

const styles = {
  container: clsx(
    "flex flex-col md:flex-row items-center justify-center",
    "space-y-2 md:space-x-4 md:space-y-0"
  ),
  link: clsx(
    "hover:underline font-bold",
    "text-green-700 dark:text-green-400"
  ),
  icon: clsx( "inline" ),
}

export default function BottomFooterContainer() {
  return (
      <div className={ styles.container }>
        <p>
          <Copyright className={ styles.icon } />
          <span> { new Date().getFullYear() } RCA Physical Therapy Inc.</span>
        </p>
        <p>
          Developed and Maintained by <Link href={ BASMA_LABS_URL } target="_blank" className={ clsx(textStyles.link, styles.link) }>Basma Labs</Link>
        </p>
      </div>
  );
}