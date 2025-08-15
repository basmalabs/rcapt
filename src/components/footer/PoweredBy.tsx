"use client";

import Link from "next/link";
import { Copyright } from "lucide-react";
import { BASMA_LABS_URL } from "@/utils/constants";
import { poweredByStyles } from "@/styles/footer";


export default function BottomFooterContainer() {
  return (
    <div className={ poweredByStyles.container }>
      <div>
        <Copyright className={ poweredByStyles.icon } />
        <span className={ poweredByStyles.text }> { new Date().getFullYear() } RCA Physical Therapy Inc.</span>
      </div>
      <div>
        Developed and Maintained by <Link href={ BASMA_LABS_URL } target="_blank" className={ poweredByStyles.link }>Basma Labs</Link>
      </div>
    </div>
  );
}