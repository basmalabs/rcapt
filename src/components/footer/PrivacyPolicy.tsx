"use client";

import Link from "next/link";
import { modalArticleStyles } from "@/styles/components";

export default function PrivacyPolicy() {
  return (
    <article className={modalArticleStyles.container}>
      <h1 className={modalArticleStyles.h1}>
        RCA Physical Therapy Inc. Privacy Policy
      </h1>

      <p>
        This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from{ " " }
        <Link href="https://www.rcapt.com/" title="https://www.rcapt.com/" className={modalArticleStyles.link} target="_blank" rel="noopener noreferrer">
          https://www.rcapt.com/
        </Link>
        { " " }(the <strong>&ldquo;Site&rdquo;</strong>).
      </p>

      <section className={modalArticleStyles.section}>
        <h2 className={modalArticleStyles.h2}>
          Personal Information We Collect
        </h2>
        <p>
          When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as <strong>&ldquo;Device Information&rdquo;</strong>.
        </p>
        <p>We collect Device Information using the following technologies:</p>
        <ul className={modalArticleStyles.list}>
          <li>
            <strong>&ldquo;Cookies&rdquo;</strong> are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit <Link href="http://www.allaboutcookies.org" title="http://www.allaboutcookies.org" className={modalArticleStyles.link} target="_blank" rel="noopener noreferrer">allaboutcookies.org</Link>.
          </li>
          <li>
            <strong>&ldquo;Log files&rdquo;</strong> track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
          </li>
          <li>
            <strong>&ldquo;Web beacons&rdquo;, &ldquo;tags&rdquo;, and &ldquo;pixels&rdquo;</strong> are electronic files used to record information about how you browse the Site.
          </li>
        </ul>
        <p>When we talk about <strong>&ldquo;Personal Information&rdquo;</strong> in this Privacy Policy, we are talking about Device Information.</p>
      </section>

      <section className={modalArticleStyles.section}>
        <h2 className={modalArticleStyles.h2}>
          How Do We Use Your Personal Information
        </h2>
        <p>
          We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
        </p>
      </section>

      <section className={modalArticleStyles.section}>
        <h2 className={modalArticleStyles.h2}>
          Sharing Your Personal Information
        </h2>
        <p>
          We share your Personal Information with third parties to help us use your Personal Information, as described above. We also use Google Analytics to help us understand how our customers use the Site–you can read more about how Google uses your Personal Information here:{ " " }
          <Link href="https://www.google.com/intl/en/policies/privacy/" title="https://www.google.com/intl/en/policies/privacy/" className={modalArticleStyles.link} target="_blank" rel="noopener noreferrer">
            Google Privacy Policy
          </Link>
          .
        </p>
        <p>
          You can also opt-out of Google Analytics here:{ " " }
          <Link href="https://tools.google.com/dlpage/gaoptout" title="https://tools.google.com/dlpage/gaoptout" className={modalArticleStyles.link} target="_blank" rel="noopener noreferrer">
            here
          </Link>
          .
        </p>
        <p>Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>
      </section>

      <section className={modalArticleStyles.section}>
        <h2 className={modalArticleStyles.h2}>
          Behavioural Advertising
        </h2>
        <p>
          As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit{ " " }
          <Link
            href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work"
            title="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work"
            className={ modalArticleStyles.link } target="_blank" rel="noopener noreferrer"
          >
            the Network Advertising Initiative&rsquo;s (<strong>&ldquo;NAI&rdquo;</strong>) educational page
          </Link>
          .
        </p>
        <p>You can opt out of targeted advertising by:</p>
        <ul className={modalArticleStyles.list}>
          <li>
            <Link href="https://www.facebook.com/settings/?tab=ads" title="https://www.facebook.com/settings/?tab=ads" className={modalArticleStyles.link} target="_blank" rel="noopener noreferrer">Facebook</Link>
          </li>
          <li>
            <Link href="https://www.google.com/settings/ads/anonymous" title="https://www.google.com/settings/ads/anonymous" className={modalArticleStyles.link} target="_blank" rel="noopener noreferrer">Google</Link>
          </li>
          <li>
            <Link href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads" title="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads" className={modalArticleStyles.link} target="_blank" rel="noopener noreferrer">Bing</Link>
          </li>
        </ul>
        <p>
          Additionally, you can opt out of some of these services by visiting{" "}
          <Link href="http://optout.aboutads.info/" title="http://optout.aboutads.info/" className={ modalArticleStyles.link } target="_blank" rel="noopener noreferrer">the Digital Advertising Alliance&rsquo;s opt-out portal</Link>.
        </p>
      </section>

      <section className={modalArticleStyles.section}>
        <h2 className={modalArticleStyles.h2}>Do Not Track</h2>
        <p>Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.</p>
      </section>

      <section className={modalArticleStyles.section}>
        <h2 className={modalArticleStyles.h2}>Data Retention</h2>
        <p>When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.</p>
      </section>

      <section className={modalArticleStyles.section}>
        <h2 className={modalArticleStyles.h2}>Changes</h2>
        <p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>
      </section>

      <section className={modalArticleStyles.section}>
        <h2 className={modalArticleStyles.h2}>Contact Us</h2>
        <p>
          For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by email at{ " " }
          <Link href="mailto:RCAPhysicalTherapy@gmail.com" title="RCAPhysicalTherapy@gmail.com" className={modalArticleStyles.link}>
            RCAPhysicalTherapy@gmail.com
          </Link>{ " " }
          or by mail using the details provided below:
        </p>
        <p>8687 Connecticut St, Suite F, Merrillville, IN 46410</p>
      </section>
    </article>
  );
}
