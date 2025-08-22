import Image from "next/image";
import clsx from "clsx";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  blurImage?: string;
  reverse?: boolean; // alternates layout
}

const styles = {
  mainContainer: (reverse: boolean) => clsx(
    "w-full py-12",
    reverse && "bg-green-100 dark:bg-green-900"
  ),
  container: (reverse: boolean) => clsx(
    "flex flex-col place-self-center gap-6",
    "md:flex-row md:gap-12",
    "max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw]",
    reverse && "md:flex-row-reverse"
  ),
  imgDiv: clsx("w-full md:w-1/2"),
  image: clsx(
    "rounded-2xl shadow-lg w-full h-64 object-cover"
  ),
  textDiv: clsx("w-full md:w-1/2 flex flex-col justify-center"),
  text_h3: clsx( "text-xl md:text-2xl lg:text-3xl font-bold mb-4" ),
  text_p: clsx( "text-md lg:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed" )
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, blurImage, reverse }) => {
  return (
    <section className={styles.mainContainer(!!reverse)}>
      <div
        className={styles.container(!!reverse)}
      >
        {/* Image */}
        <div className={styles.imgDiv}>
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className={styles.image}
            placeholder="blur"
            blurDataURL={blurImage ? blurImage : image}
          />
        </div>

        {/* Text */}
        <div className={styles.textDiv}>
          <h3 className={styles.text_h3}>{title}</h3>
          <p className={styles.text_p}>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
