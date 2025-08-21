import clsx from "clsx";

interface ValueCardProps {
  title: string;
  description: string;
}

const styles = {
  container: clsx(
    "bg-white dark:bg-black shadow-md p-6 rounded-xl",
    "hover:shadow-xl transition-shadow duration-300",
    "hover:shadow-green-400/30 dark:hover:shadow-green-600/30"
  ),
  title: clsx("text-xl font-semibold mb-2"),
  description: clsx("text-gray-600 dark:text-gray-400"),
};

function ValueCard( { title, description }: ValueCardProps ) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        { title }
      </h3>
      <p className={styles.description}>
        { description }
      </p>
    </div>
  );
}

export default ValueCard;
