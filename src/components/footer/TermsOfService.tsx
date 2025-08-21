"use client";

import { modalArticleStyles } from "./styles";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <article className={ modalArticleStyles.container }>
      <h1 className={ modalArticleStyles.h1 }>
        RCA Physical Therapy Inc. Terms of Service
      </h1>

      <p>
        These Terms of Service (<strong>“Terms”</strong>) govern your access to and use of the services provided by RCA Physical Therapy Inc. (<strong>“we”, “our”, or “us”</strong>) through our website{ " " }
        <Link href="https://www.rcapt.com/" title="https://www.rcapt.com/" className={ modalArticleStyles.link } target="_blank" rel="noopener noreferrer">
          https://www.rcapt.com/
        </Link>
        { " " }(the <strong>“Site”</strong>) and any related services.
      </p>

      <section className={ modalArticleStyles.section }>
        <h2 className={ modalArticleStyles.h2 }>Acceptance of Terms</h2>
        <p>
          By accessing or using our Site, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, please do not use the Site.
        </p>
      </section>

      <section className={ modalArticleStyles.section }>
        <h2 className={ modalArticleStyles.h2 }>Use of the Site</h2>
        <ul className={ modalArticleStyles.list }>
          <li>You must be at least 18 years old or have the consent of a parent or guardian to use our services.</li>
          <li>You agree to use the Site only for lawful purposes and not for any illegal or unauthorized activities.</li>
          <li>You may not attempt to interfere with or disrupt the Site, servers, or networks connected to the Site.</li>
        </ul>
      </section>

      <section className={ modalArticleStyles.section }>
        <h2 className={ modalArticleStyles.h2 }>Appointments and Services</h2>
        <p>
          All appointments are subject to availability. RCA Physical Therapy Inc. reserves the right to reschedule or cancel appointments as necessary. Services are provided as described on the Site, and we do not guarantee specific outcomes.
        </p>
      </section>

      <section className={ modalArticleStyles.section }>
        <h2 className={ modalArticleStyles.h2 }>Payment and Billing</h2>
        <p>
          Payment for services must be made in full at the time of service unless otherwise agreed. We accept the payment methods listed on our Site. You are responsible for any fees or charges associated with your payment method.
        </p>
      </section>

      <section className={ modalArticleStyles.section }>
        <h2 className={ modalArticleStyles.h2 }>User Content</h2>
        <p>
          If you submit any content (e.g., feedback, reviews) to the Site, you grant us a non-exclusive, royalty-free, worldwide license to use, copy, modify, and display that content in connection with our services.
        </p>
      </section>

      <section className={ modalArticleStyles.section }>
        <h2 className={ modalArticleStyles.h2 }>Intellectual Property</h2>
        <p>
          All content on the Site, including text, graphics, logos, and software, is the property of RCA Physical Therapy Inc. or its licensors and is protected by copyright and other intellectual property laws. You may not use any content without our prior written permission.
        </p>
      </section>

      <section className={ modalArticleStyles.section }>
        <h2 className={ modalArticleStyles.h2 }>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, RCA Physical Therapy Inc. shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Site or services, even if advised of the possibility of such damages.
        </p>
      </section>

      <section className={ modalArticleStyles.section }>
        <h2 className={ modalArticleStyles.h2 }>Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws of the State of Indiana, without regard to its conflict of law principles.
        </p>
      </section>

      <section className={ modalArticleStyles.section }>
        <h2 className={ modalArticleStyles.h2 }>Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. Any changes will be posted on this page, and your continued use of the Site constitutes acceptance of the updated Terms.
        </p>
      </section>

      <section className={ modalArticleStyles.section }>
        <h2 className={ modalArticleStyles.h2 }>Contact Us</h2>
        <p>
          For questions regarding these Terms, please contact us by email at{ " " }
          <Link href="mailto:RCAPhysicalTherapy@gmail.com" title="mailto:RCAPhysicalTherapy@gmail.com" className={ modalArticleStyles.link }>
            RCAPhysicalTherapy@gmail.com
          </Link>{ " " }
          or by mail at:
        </p>
        <p>8687 Connecticut St, Suite F, Merrillville, IN 46410</p>
      </section>
    </article>
  );
}
