"use client"

import { create } from "zustand";
import type { UIState } from "@/mytypes/store";

export const useUIStore = create<UIState>( () => ( {
  isMobile: false,
  isScrolled: false,
}));

// Attach global event listeners only once
if ( typeof window !== "undefined" ) {
  const handleResize = () => {
    useUIStore.setState( { isMobile: window.innerWidth < 768 } );
  };

  const handleScroll = () => {
    useUIStore.setState( { isScrolled: window.scrollY > 20 } );
  };

  // Initial run
  handleResize();
  handleScroll();

  window.addEventListener( "resize", handleResize );
  window.addEventListener( "scroll", handleScroll );
}