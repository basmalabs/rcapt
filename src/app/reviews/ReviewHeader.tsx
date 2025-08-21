"use client"

import { useState } from "react";
import clsx from "clsx";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import AppointmentForm from "@/components/AppointmentForm";

const styles = {
  section: clsx(
    "flex flex-col md:flex-row items-center justify-between",
    "w-full md:w-[70vw] lg:w-[50vw] mx-auto p-6 md:py-4 space-y-3 md:space-y-0 md:space-x-6"
  ),
  title: clsx(
    "text-2xl font-extrabold"
  ),
  subtitle: clsx(
    "text-base text-gray-600 dark:text-gray-400"
  ),
  googleText: clsx(
    "font-semibold text-yellow-600 dark:text-yellow-200"
  ),
  button: clsx( "text-base md:text-lg lg:text-xl" ),
};

export default function ReviewHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className={ styles.section }>
        <div>
          <h1 className={ styles.title }>What Our Customers Say</h1>
          <p className={ styles.subtitle }>
            Real reviews on{ " " }
            <span className={ styles.googleText }>
              Google
            </span>
            { " " } from people who have experienced our services.
          </p>
        </div>
        <Button
          className={ styles.button }
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
