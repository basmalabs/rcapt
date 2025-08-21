import clsx from "clsx";
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const styles = {
  container: clsx(
    "relative h-96 md:h-[500px] w-full",
    "pt-[140px] md:pt-[100px]",
  ),
  image: clsx(
    "absolute inset-0 w-full h-full",
    "object-cover brightness-75",
  ),
  overlay: clsx(
    "absolute inset-0 w-full h-full z-10",
    "bg-gradient-to-b from-white/50 to-white/30",
    "dark:from-black/40 dark:to-black/80"
  ),
  textDiv: clsx(
    "relative z-20 flex flex-col items-center justify-center",
    "h-full text-center px-4",
  ),
  h1: clsx("text-4xl md:text-6xl font-bold text-white"),
  p: clsx("mt-4 text-lg md:text-2xl text-white"),
};

function HeroSection({ title, subtitle, imageUrl }: HeroSectionProps) {
  return (
    <div className={styles.container}>
      <Image
        src={ imageUrl }
        alt={ title }
        className={ styles.image }
        width={ 1920 }
        height={ 1920 }
        quality={ 10 }
      />
      <div className={ styles.overlay }></div>
      <div className={styles.textDiv}>
        <h1 className={styles.h1}>{title}</h1>
        <p className={styles.p}>{subtitle}</p>
      </div>
    </div>
  );
}

export default HeroSection;
