import { SocialIcon } from "react-social-icons";
import { Phone, Mail, Landmark } from "lucide-react";
import { URL } from "@/utils/constants";
import { sectionStyles, contactStyles, socialStyles } from "@/styles/footer";


export default function Contact() {
  return (
    <section className={ sectionStyles.container }>
      <h2 className={ sectionStyles.header }>RCA Physical Therapy Inc.</h2>
      <p>Serving Merrillville, Crown-Point, Horbart, Gary, Sherrivile IN</p>
      <div className={ contactStyles.div }>
        <Phone className={ contactStyles.icon } />
        <p className={ contactStyles.text }>219-525-4176</p>
      </div>
      <div className={ contactStyles.div }>
        <Mail className={ contactStyles.icon } />
        <p className={ contactStyles.text }>rcaphysicaltherapy@gmail.com</p>
      </div>
      <div className={ contactStyles.div }>
        <Landmark className={ contactStyles.icon } />
        <p className={ contactStyles.text }>
          8687 Connecticut St. <br />
          Suite F. <br />
          Merrillville, IN 46410 <br />
          USA
        </p>
      </div>
      <div className={ socialStyles.div }>
        <SocialIcon url={ URL.facebook } target="_blank" className={ socialStyles.icon } />
        <SocialIcon url={ URL.linkedin } target="_blank" className={ socialStyles.icon } />
      </div>
    </section>
  );
}