import PoweredBy from "@/components/footer/PoweredBy";
import Contact from "@/components/footer/Contact";
import OperatingHours from "@/components/footer/OperatingHours";
import CallToAction from "@/components/footer/CallToAction";
import { containerStyles } from "@/styles/footer";

function Footer() {
  return (
    <footer className={ containerStyles.footer}>
      <div className={containerStyles.container}>
        <Contact />
        <OperatingHours />
        <CallToAction />
      </div>
      <PoweredBy />
    </footer>
  );
}

export default Footer;
