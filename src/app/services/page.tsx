import type { Metadata } from "next";
import clsx from "clsx";

import { TITLE_NAME } from "@/utils/constants";
import { services } from "./pageTexts";
import ServiceCard from "@/app/services/ServiceCard";

const styles = {
  section: clsx(
    "pt-[140px] md:pt-[100px] md:pb-6 lg:pb-8",
    "mx-auto",
    // "max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw]",
  ),
  heading: clsx(
    "pt-10 md:pt-14 pb-2 md:pb-2",
    "text-5xl md:text-6xl font-extrabold text-center"
  ),
  subHeading: clsx(
    "pb-4",
    "text-lg md:text-xl font-normal text-center"
  ),
  servicesDiv: clsx(
    "space-y-2 md:space-y-6 items-center",
    " w-full"
  ),
};

function Services() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Our Services
      </h2>
      <p className={styles.subHeading}>
        Let us be your partner for Physical Therapy & Health Services
      </p>
      <div className={styles.servicesDiv}>
        {services.map((service, idx) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            image={service.image}
            reverse={idx % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;

export const metadata: Metadata = {
  title: `Our Services | ${TITLE_NAME}`,
  description: "Explore the range of physical therapy services we offer.",
};
