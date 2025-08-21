import type { Metadata } from "next";
import clsx from "clsx";

import HeroSection from "@/app/about/HeroSection";
import SectionTitle from "@/app/about/SectionTitle";
import ValueCard from "@/app/about/ValueCard";
import WhyChooseUsCard from "@/app/about/WhyChooseUsCard";
import { TITLE_NAME } from "@/utils/constants";
import { ourValues, ourFeatures } from "@/app/about/pageTexts";

const styles = {
  mainContainer: clsx( "space-y-20" ),
  mv_section: clsx( "container mx-auto px-4 space-y-8" ),
  mv_p: clsx( "text-gray-700 dark:text-gray-300" ),
  val_section: clsx( "bg-green-100 dark:bg-green-900 py-16" ),
  val_mainContainer: clsx( "container mx-auto px-4" ),
  val_cardContainer: clsx(
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    "gap-8 mt-8"
  ),
  wcu_mainContainer: clsx( "container mx-auto px-4 pb-12" ),
  wcu_cardContainer: clsx(
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    "gap-8 mt-12"
  ),
};

function About() {
  return (
    <div className={styles.mainContainer}>
      {/* Hero Section */ }
      <HeroSection
        title="RCA Physical Therapy"
        subtitle="Providing exceptional care since 2003"
        imageUrl="/exercise-facility.jpg"
      />

      {/* Mission & Vision */ }
      <section className={styles.mv_section}>
        <SectionTitle title="Our Mission" />
        <p className={styles.mv_p}>
          Our Mission is to provide excellent patient experience and extraordinary customer service by using evidence-based treatment approaches in a relaxed and affectionate environment.
        </p>

        <SectionTitle title="Our Vision" />
        <p className={styles.mv_p}>
          RCA Physical Therapy Inc. aspires to be the premier first-choice physical therapy clinic with advanced and specialist care that improve quality of life for people with pain, muscle/nerve, joint, and movement problems in our community. We provide clinical excellence with optimal outcomes for our patients by restoring, maintaining, and enhancing their health.
        </p>
      </section>

      {/* Values */ }
      <section className={styles.val_section}>
        <div className={styles.val_mainContainer}>
          <SectionTitle title="Our Values" />
          <div className={styles.val_cardContainer}>
            { ourValues.map( ( value ) => (
              <ValueCard
                key={ value.title }
                title={ value.title }
                description={ value.description }
              />
            ) ) }
          </div>
        </div>
      </section>

      {/* Why Choose Us */ }
      <section className={styles.mv_section}>
        <div className={styles.wcu_mainContainer}>
          <SectionTitle title="Why Choose Us" />
          <div className={styles.wcu_cardContainer}>
            { ourFeatures.map( ( feature ) => (
              <WhyChooseUsCard
                key={ feature.title }
                title={ feature.title }
                description={ feature.description }
                icon={ feature.icon }
              />
            ) ) }
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

export const metadata: Metadata = {
  title: `About Us | ${TITLE_NAME}`,
  description: "Learn more about our physical therapy clinic and our team.",
};
