"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";

const modalStyles = {
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

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

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
        <div className={ modalStyles.buttonDiv }>
          <button className={ modalStyles.closeButton } onClick={ onClose }>
            &times;
          </button>
        </div>
        <div className={ modalStyles.childrenDiv }>
          { children }
        </div>
      </div>
    </div>
  );
}
