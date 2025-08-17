"use client";

import Link from "next/link";
import { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { Phone, Mail, Landmark } from "lucide-react";

import { URL } from "@/utils/constants";
import { containerStyles, textStyles, contactStyles } from "@/styles/footer";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import AppointmentForm from "@/components/AppointmentForm";

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