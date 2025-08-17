import clsx from "clsx";

import Contact from "@/components/footer/Contact";
import OperatingHours from "@/components/footer/OperatingHours";
import BottomLinks from "@/components/footer/BottomLinks";
import TextureDiv from "@/components/TextureDiv";
import { containerStyles } from "@/styles/footer";


function Footer() {
  return (
    <footer className={ clsx(containerStyles.footer)}>
      <TextureDiv texture="darkStripes"><Contact /></TextureDiv>
      <TextureDiv texture="asphalt"><OperatingHours /></TextureDiv>
      <TextureDiv texture="asphalt"><BottomLinks /></TextureDiv>
    </footer>
  );
}

export default Footer;
