"use client";

import clsx from "clsx";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Modal from "@/components/Modal";
import PrivacyPolicy from "@/components/footer/PrivacyPolicy";
import TermsOfService from "@/components/footer/TermsOfService";
import { textStyles, callToActionStyle } from "@/styles/footer";


export default function CallToAction() {
  const [ isTermsModalOpen, setTermsModalOpen ] = useState( false );
  const [ isPrivacyModalOpen, setPrivacyModalOpen ] = useState( false );

  const router = useRouter();
  const textStyle = clsx( textStyles.link, callToActionStyle.p );

  return (
    <>
      <div className={ callToActionStyle.div }>
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