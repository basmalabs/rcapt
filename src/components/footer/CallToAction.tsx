"use client";

import clsx from "clsx";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Modal from "@/components/Modal";
import PrivacyPolicy from "@/components/footer/PrivacyPolicy";
import TermsOfService from "@/components/footer/TermsOfService";
import { textStyles } from "./styles";

const styles = {
  div: clsx(
    "flex flex-col md:flex-row justify-center item-center",
    "divide-y-2 md:divide-x-2 md:divide-y-0"
  ),
  p: clsx( "py-2 md:px-4 md:py-0 lg:px-10 uppercase text-center" ),
}

export default function CallToAction() {
  const [ isTermsModalOpen, setTermsModalOpen ] = useState( false );
  const [ isPrivacyModalOpen, setPrivacyModalOpen ] = useState( false );

  const router = useRouter();
  const textStyle = clsx( textStyles.link, styles.p );

  return (
    <>
      <div className={ styles.div }>
        <p
          onClick={ () => router.push( "/admin-dashboard" ) }
          className={ textStyle }
        >
          Admin Log In
        </p>
        <p
          onClick={ () => setPrivacyModalOpen( true ) }
          className={ textStyle }
        >
          Privacy Policy
        </p>
        <p
          onClick={ () => setTermsModalOpen( true ) }
          className={ textStyle }
        >
          Terms of Service
        </p>
      </div>

      {/* Modals */ }
      <Modal isOpen={ isTermsModalOpen } onClose={ () => setTermsModalOpen( false ) }>
        <TermsOfService />
      </Modal>

      <Modal isOpen={ isPrivacyModalOpen } onClose={ () => setPrivacyModalOpen( false ) }>
        <PrivacyPolicy />
      </Modal>
    </>
  );
}