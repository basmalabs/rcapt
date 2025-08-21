import clsx from "clsx";

interface WhyChooseUsCardProps {
  title: string;
  description: string;
  icon: string;
}

const styles = {
  card: clsx(
    "bg-green-100 dark:bg-green-900 rounded-xl shadow-md p-6 ",
    "text-center hover:shadow-xl transition duration-300",
    "hover:shadow-gray-400/30 dark:hover:shadow-gray-600/30"
  ),
  icon: clsx("text-4xl mb-4"),
  title: clsx(
    "text-xl font-semibold",
    "text-gray-800 dark:text-gray-200 mb-2"
  ),
  description: clsx("text-gray-600 dark:text-gray-400"),
};

function WhyChooseUsCard( { title, description, icon }: WhyChooseUsCardProps ) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{ icon }</div>
      <h3 className={styles.title}>{ title }</h3>
      <p className={styles.description}>{ description }</p>
    </div>
  );
}

export default WhyChooseUsCard;