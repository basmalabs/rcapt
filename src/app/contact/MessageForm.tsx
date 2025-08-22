"use client";

import { useForm } from "react-hook-form";
import clsx from "clsx";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type MessageFormValues = {
  name: string;
  email: string;
  message: string;
};

const styles = {
  container: clsx(
    "p-8 bg-white dark:bg-gray-900 rounded-2xl",
    "shadow-lg shadow-gray-300 dark:shadow-gray-800"
  ),
  form: clsx("w-full space-y-4"),
  input: clsx(
    "w-full rounded-lg border border-gray-300 dark:border-gray-700",
    "p-3 text-base focus:outline-none focus:ring-2 focus:ring-green-500",
    "dark:bg-gray-800 dark:text-white"
  ),
  textarea: clsx(
    "w-full rounded-lg border border-gray-300 dark:border-gray-700",
    "p-3 text-base focus:outline-none focus:ring-2 focus:ring-green-500",
    "h-32 resize-none",
    "dark:bg-gray-800 dark:text-white"
  ),
  button: clsx(
    "w-full bg-green-600 hover:bg-green-700 text-white",
    "font-semibold py-3 px-6 rounded-lg transition-colors"
  ),
  headerDiv: clsx( "mb-8 text-center" ),
  mainHeading: clsx(
    "text-2xl md:text-4xl font-bold",
    "text-green-600 dark:text-green-400"
  ),
  mainSubHeading: clsx( "text-base md:text-lg" ),
};

const messageSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

function MessageForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<MessageFormValues>();

  const onSubmit = async (data: MessageFormValues) => {
    console.log("Message form submitted:", data);
    // TODO: integrate with EmailJS / API route
    reset();
  };

  return (
    <section className={styles.container}>
      <div className={ styles.headerDiv }>
        <h1 className={ styles.mainHeading }>
          Send Us a Message
        </h1>
        <p className={ styles.mainSubHeading }>
          Have questions or need more information? Drop us a quick message and our team will get back to you shortly.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input
          type="text"
          placeholder="Your Name"
          {...register("name", { required: "Name is required" })}
          className={styles.input}
        />
        {errors.name && (
          <p className="text-sm text-red-500">
            {errors.name.message}
          </p>
        )}

        <input
          type="email"
          placeholder="Your Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "Invalid email address",
            },
          })}
          className={styles.input}
        />
        {errors.email && (
          <p className="text-sm text-red-500">
            {errors.email.message}
          </p>
        )}

        <textarea
          placeholder="Your Message"
          {...register("message", { required: "Message is required" })}
          className={styles.textarea}
        />
        {errors.message && (
          <p className="text-sm text-red-500">
            {errors.message.message}
          </p>
        )}

        <button type="submit" disabled={isSubmitting} className={styles.button}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}

export default MessageForm;
