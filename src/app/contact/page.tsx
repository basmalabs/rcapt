import type { Metadata } from "next";
import clsx from "clsx";

import { TITLE_NAME } from "@/utils/constants";
import AppointmentForm from "@/components/AppointmentForm";
import MessageForm from "@/app/contact/MessageForm";

const styles = {
  section: clsx(
    "pt-[140px] md:pt-[100px] md:pb-20",
  ),
  mainContainer: clsx(
    "container px-4",
    "max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw]",
    "place-self-center"
  ),
  heading: clsx(
    "pt-10 md:pt-14 pb-2 md:pb-2",
    "text-5xl md:text-6xl font-extrabold text-center"
  ),
  subHeading: clsx(
    "pb-8",
    "text-lg md:text-xl font-normal text-center text-gray-700 dark:text-gray-300"
  ),
  formsContainer: clsx("mt-8 flex flex-col lg:flex-row gap-8 justify-center"),
  formWrapper: clsx("flex-1 flex justify-center"),
};

function Contact() {
  return (
    <section className={styles.section}>
      <div className={styles.mainContainer}>
        <h2 className={styles.heading}>Contact Us</h2>
        <p className={styles.subHeading}>
          Whether you have questions or want to book a therapy session, use the forms below and our team will assist you promptly.
        </p>

        <div className={styles.formsContainer}>
          <div className={styles.formWrapper}>
            <MessageForm />
          </div>
          <div className={styles.formWrapper}>
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

export const metadata: Metadata = {
  title: `Contact Us | ${TITLE_NAME}`,
  description: "Get in touch with our team for any inquiries or assistance.",
};
