import type { Metadata } from "next";
import { TITLE_NAME } from "@/utils/constants";

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Learn more about our physical therapy clinic and our team.</p>
    </div>
  );
}

export default About;

export const metadata: Metadata = {
  title: `About Us | ${TITLE_NAME}`,
  description: "Learn more about our physical therapy clinic and our team.",
};
