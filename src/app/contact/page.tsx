import type { Metadata } from "next";
import { TITLE_NAME } from "@/utils/constants";

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions or need assistance, feel free to reach out.</p>
    </div>
  );
}

export default Contact;

export const metadata: Metadata = {
  title: `Contact Us | ${TITLE_NAME}`,
  description: "Get in touch with our team for any inquiries or assistance.",
};
