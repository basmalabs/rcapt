"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";
import { modalStyles } from "@/styles/components";
import type { ModalProps } from "@/mytypes/compProps";

export default function Modal( { isOpen, onClose, children }: ModalProps ) {
  const [ show, setShow ] = useState( isOpen ); // controls DOM presence
  const [ visible, setVisible ] = useState( isOpen ); // controls transition

  // Handle opening
  useEffect( () => {
    if ( isOpen ) {
      setShow( true );
      requestAnimationFrame( () => setVisible( true ) ); // trigger transition in
    } else {
      setVisible( false ); // start transitiion out
    }
  }, [ isOpen ] );

  // Cleanup after transition ends
  const handleTransitionEnd = () => {
    if ( !visible ) setShow( false );
  };

  if ( !show ) return null;

  return (
    <div
      className={ clsx( modalStyles.bg, modalStyles.bg_transition( isOpen ) ) }
      onClick={ onClose }
      onTransitionEnd={ handleTransitionEnd }
    >
      <div
        className={ modalStyles.container }
        onClick={ ( e ) => e.stopPropagation() } // prevent closing when clicking inside
      >
        { children }
      </div>
    </div>
  );
}
