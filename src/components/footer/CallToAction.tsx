"use client";

import clsx from "clsx";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import AppointmentForm from "@/components/AppointmentForm";
import PrivacyPolicy from "@/components/footer/PrivacyPolicy";
import TermsOfService from "@/components/footer/TermsOfService";
import {
  sectionStyles, callToActionStyle, sectionsArrange
} from "@/styles/footer";


export default function CallToAction() {
  const [ isBookModalOpen, setBookModalOpen ] = useState( false );
  const [ isTermsModalOpen, setTermsModalOpen ] = useState( false );
  const [ isPrivacyModalOpen, setPrivacyModalOpen ] = useState( false );

  const router = useRouter();

  return (
    <section className={ clsx(sectionStyles.container, sectionsArrange.m2w3) }>
      <div className={ callToActionStyle.div }>
        <Button
          className={ callToActionStyle.button }
          onClick={ () => setBookModalOpen( true ) }
        >
          Book An Appointment
        </Button>
      </div>
      <div className={ callToActionStyle.div }>
        <h3 className={ callToActionStyle.header }>Important Docs</h3>
        <p onClick={ () => router.push( "/about" ) } className={ callToActionStyle.link }>About Us</p>
        <p onClick={ () => router.push( "/about" ) } className={ callToActionStyle.link }>Meet the Team</p>
        <p onClick={ () => setPrivacyModalOpen( true ) } className={ callToActionStyle.link }>Privacy Policy</p>
        <p onClick={ () => setTermsModalOpen( true ) } className={ callToActionStyle.link }>Terms of Service</p>
      </div>

      {/* Modals */ }
      <Modal isOpen={ isBookModalOpen } onClose={ () => setBookModalOpen( false ) }>
        <AppointmentForm />
      </Modal>

      <Modal isOpen={ isTermsModalOpen } onClose={ () => setTermsModalOpen( false ) }>
        <TermsOfService />
      </Modal>

      <Modal isOpen={ isPrivacyModalOpen } onClose={ () => setPrivacyModalOpen( false ) }>
        <PrivacyPolicy />
      </Modal>
    </section>
  );
}