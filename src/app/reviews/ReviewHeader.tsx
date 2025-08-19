"use client"

import { useState } from "react";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import AppointmentForm from "@/components/AppointmentForm";
import { reviewHeaderStyles } from "@/styles/reviews";

export default function ReviewHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className={ reviewHeaderStyles.section }>
        <div>
          <h1 className={ reviewHeaderStyles.title }>What Our Customers Say</h1>
          <p className={ reviewHeaderStyles.subtitle }>
            Real reviews on{ " " }
            <span className={ reviewHeaderStyles.googleText }>
              Google
            </span>
            { " " } from people who have experienced our services.
          </p>
        </div>
        <Button
          className={ reviewHeaderStyles.button }
          onClick={ () => { setIsModalOpen( true ); } }
        >
          Book An Appointment
        </Button>
      </section>
      <Modal isOpen={ isModalOpen } onClose={ () => setIsModalOpen(false) }>
        <AppointmentForm />
      </Modal>
    </>
  )
}
