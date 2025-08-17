"use client";

import clsx from "clsx";
import Link from "next/link";
import { Copyright } from "lucide-react";
import { BASMA_LABS_URL } from "@/utils/constants";
import { containerStyles, textStyles, poweredByStyles } from "@/styles/footer";

export default function BottomFooterContainer() {
  return (
      <div className={ poweredByStyles.container }>
        <p>
          <Copyright className={ poweredByStyles.icon } />
          <span> { new Date().getFullYear() } RCA Physical Therapy Inc.</span>
        </p>
        <p>
          Developed and Maintained by <Link href={ BASMA_LABS_URL } target="_blank" className={ clsx(textStyles.link, poweredByStyles.link) }>Basma Labs</Link>
        </p>
      </div>
  );
}