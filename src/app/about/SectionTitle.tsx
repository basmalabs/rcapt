import clsx from "clsx";

interface SectionTitleProps {
  title: string;
}

const style = {
  container: clsx(
    "text-3xl font-semibold text-green-900 dark:text-green-100",
    "border-b-2 border-green-400 dark:border-green-600 inline-block pb-2"
  ),
}

function SectionTitle( { title }: SectionTitleProps ) {
  return (
    <h2 className={style.container}>
      { title }
    </h2>
  );
}

export default SectionTitle;