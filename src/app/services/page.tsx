import type { Metadata } from "next";
import { TITLE_NAME } from "@/utils/constants";


function Services() {
  return (
    <div>
      <h1>Our Services</h1>
      <p>Explore the range of physical therapy services we offer to help you recover and improve your health.</p>
    </div>
  );
}

export default Services;

export const metadata: Metadata = {
  title: `Our Services | ${TITLE_NAME}`,
  description: "Explore the range of physical therapy services we offer.",
};
