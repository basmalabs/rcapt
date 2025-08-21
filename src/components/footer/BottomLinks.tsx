import clsx from "clsx";
import { containerStyles } from "./styles";
import CallToAction from "@/components/footer/CallToAction";
import PoweredBy from "@/components/footer/PoweredBy";

function BottomLinks() {
  return (
    <section className={ clsx(containerStyles.container) }>
      <CallToAction />
      <PoweredBy />
    </section>
  );
}

export default BottomLinks;
