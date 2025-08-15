import { modalStyles } from "@/styles/components";
import type { ModalProps } from "@/mytypes/compProps";

export default function Modal( { isOpen, onClose, children }: ModalProps ) {
  if ( !isOpen ) return null;

  return (
    <div
      className={ modalStyles.bg }
      onClick={ onClose }
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
