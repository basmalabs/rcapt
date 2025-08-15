import clsx from "clsx";
import PoweredBy from "@/components/footers/PoweredBy";
import Contact from "@/components/footers/Contact";
import OperatingHours from "@/components/footers/OperatingHours";

const styles = {
  footer: clsx(
    "flex flex-col items-center justify-center",
    "px-4 py-4 w-full min-h-[10vh]",
    "bg-green-100/30 text-gray-900",
    "dark:bg-green-900/30 dark:text-white"
  ),
  container: clsx(
    "flex flex-col md:flex-row items-top justify-center",
    "py-2 space-y-8 md:space-x-8",
  ),
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Contact />
        <OperatingHours />
      </div>
      <PoweredBy />
    </footer>
  );
}

export default Footer;
