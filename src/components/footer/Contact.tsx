"use client";

import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { Phone, Mail, Landmark } from "lucide-react";

import { URL } from "@/utils/constants";
import { containerStyles, textStyles } from "./styles";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import AppointmentForm from "@/components/AppointmentForm";

const contactStyles = {
  // Main container for contact information
  div: clsx( "flex flex-row gap-2 justify-center items-center" ),
  // Each subcontainers directly in the contact component
  // except the top texts.
  contactsDiv: clsx(
    "flex flex-col md:flex-row justify-center",
    "space-y-2 md:space-y-0 md:space-x-8"
  ),
  // Container call, email and address
  contactsSubDiv: clsx(
    // Container for each contact method
    "flex flex-row md:flex-col items-center justify-evenly",
    "py-2 px-4 space-x-4 md:space-x-0 md:space-y-2",
    // Normal View
    "text-left md:text-center ",
    "text-green-800 dark:text-green-900",
    "bg-green-400 dark:bg-green-300",
    "border-2 border-green-500",
    // Hover Effects
    "hover:text-green-100 dark:hover:text-green-300",
    "hover:bg-green-600 dark:hover:bg-green-900",
    "hover:border-2 hover:border-green-700 dark:hover:border-green-200",
    // Active Effects
    "active:text-white dark:active:text-green-700",
    "active:scale-95 active:bg-green-600 dark:active:bg-green-200",
  ),
  button: clsx( "w-full md:w-[300px] rounded-none" ),
  contactIcon: clsx( "grow-0" ),
  socialIcon: clsx( "" ),
  text: clsx( "grow-1" ),
}

export default function Contact() {
  const [ isBookModalOpen, setBookModalOpen ] = useState( false );
  return (
    <section className={ containerStyles.container }>
      <h2 className={ textStyles.h1 }>RCA Physical Therapy Inc.</h2>
      <p className={ textStyles.contact_p }>Serving Merrillville, Crown-Point, Horbart, Gary, Sherrivile IN</p>

      <div className={ contactStyles.contactsDiv }>
        <Link
          href={ "tel:+12195254176" }
          target="_blank"
          className={ contactStyles.contactsSubDiv }
        >
          <Phone className={ contactStyles.contactIcon } />
          <p className={ contactStyles.text }>219-525-4176</p>
        </Link>
        <Link
          href={ "mailto:rcaphysicaltherapy@gmail.com" }
          target="_blank"
          className={ contactStyles.contactsSubDiv }
        >
          <Mail className={ contactStyles.contactIcon } />
          <p className={ contactStyles.text }>rcaphysicaltherapy@gmail.com</p>
        </Link>
        <Link
          href={ "https://maps.google.com/maps?ll=41.460945,-87.331321&z=16&t=m&hl=en&gl=US&mapclient=embed&q=8687%20Connecticut%20St%20Merrillville%2C%20IN%2046410" }
          target="_blank"
          className={ contactStyles.contactsSubDiv }
        >
          <Landmark className={ contactStyles.contactIcon } />
          <p className={ contactStyles.text }>
            8687 Connecticut St.
            Suite F. <br />
            Merrillville, IN 46410
            USA
          </p>
        </Link>
      </div>
      <div className={ contactStyles.div }>
        <SocialIcon url={ URL.facebook } target="_blank" className={ contactStyles.socialIcon } />
        <SocialIcon url={ URL.linkedin } target="_blank" className={ contactStyles.socialIcon } />
      </div>

      <div className={ contactStyles.div }>
        <Button
          className={ contactStyles.button }
          onClick={ () => setBookModalOpen( true ) }
        >
          Book An Appointment
        </Button>
      </div>

      <Modal isOpen={ isBookModalOpen } onClose={ () => setBookModalOpen( false ) }>
        <AppointmentForm />
      </Modal>
    </section>
  );
}