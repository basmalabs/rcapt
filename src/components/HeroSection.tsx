"use client"

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

import Button from "./Button";
import AppointmentForm from "@/components/AppointmentForm";
import Modal from "@/components/Modal";

const styles = {
  container: clsx(
    "relative h-[60vh] md:h-[70vh] lg:h-[80vh] w-full",
    "pt-[140px] md:pt-[100px] justify-center items-center",
  ),
  image: clsx(
    "absolute inset-0 w-full h-full",
    "object-cover brightness-75",
  ),
  overlay: clsx(
    "absolute inset-0 w-full h-full z-10",
    "bg-gradient-to-b from-white/40 to-black/80",
    "dark:from-black/40 dark:to-black/80"
  ),
  textDiv: clsx(
    "relative z-20 flex flex-col items-center justify-center",
    "h-full w-[90vw] place-self-center text-center px-4",
  ),
  h1: clsx("text-4xl md:text-6xl lg:text-8xl font-extrabold text-white dark:text-white"),
  p: clsx("mt-6 text-xl md:text-2xl lg:text-4xl font-semibold text-white dark:text-white"),
  p_small: clsx("mt-4 text-sm md:text-base lg:text-xl text-white/80 dark:text-white/70"),
  button: clsx(
    "mt-6 rounded-xl text-lg md:text-xl lg:text-2xl",
    "w-[300px] h-[50px] md:w-[400px]"
  ),
};


function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <Image
          src="https://res.cloudinary.com/farooqdotdev/image/upload/v1755886953/rcapt/our-office-wide.jpg"
          alt="Welcome to Our Physical Therapy Clinic"
          className={styles.image}
          width={1920}
          height={1920}
          placeholder="blur"
          blurDataURL="https://res.cloudinary.com/farooqdotdev/image/upload/v1755886953/rcapt/our-office-wide-blur.jpg"
        />
        <div className={styles.overlay}></div>
        <div className={styles.textDiv}>
          <h1 className={styles.h1}>
            Osteopractic Physical Therapy
          </h1>
          <p className={styles.p}>
            Relieve pain, restore strength, and reclaim your life with expert care.
          </p>
          <p className={styles.p_small}>
            Personalized treatment plans, no unnecessary medications or surgery.
          </p>
          <Button className={styles.button} onClick={() => setIsModalOpen(true)}>
            Book an Appointment
          </Button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AppointmentForm />
      </Modal>
    </>
  );
}

export default HeroSection;
