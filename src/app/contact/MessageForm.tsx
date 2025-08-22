"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
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
    "shadow-lg shadow-gray-300 dark:shadow-gray-800",
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
  name: yup.string().required("Required"),
  email: yup.string().required("Required").email("Invalid email"),
  message: yup.string().required("Required"),
});

function MessageForm() {
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<MessageFormValues>({
    resolver: yupResolver(messageSchema),
  });

  const onSubmit = async (data: MessageFormValues) => {
    try {

      const response = await fetch( "/api/contactMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify( data ),
      } );

      if ( !response.ok ) {
        const errorText = await response.text();
        throw new Error( errorText || "Failed to submit" );
      }

      setSubmitMessage( "Message sent successfully!" );
      reset();

    } catch ( error: unknown ) {
      
      console.error( "Error saving message:", error );
      setSubmitMessage( "Failed to submit message. Please try again." );
    
    } finally {
      
      // Hide the message after 3 seconds
      setTimeout( () => setSubmitMessage( null ), 5000 );
    }
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
          {...register("name")}
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
          {...register("email")}
          className={styles.input}
        />
        {errors.email && (
          <p className="text-sm text-red-500">
            {errors.email.message}
          </p>
        )}

        <textarea
          placeholder="Your Message"
          {...register("message")}
          className={styles.textarea}
        />
        {errors.message && (
          <p className="text-sm text-red-500">
            {errors.message.message}
          </p>
        )}

        {/* Submit */ }
        { submitMessage && (
          <p
            className={ clsx(
              "mt-2 text-center",
              submitMessage.includes( "success" ) ? "text-green-600" : "text-red-500"
            ) }
          >
            { submitMessage }
          </p>
        ) }
        <button type="submit" disabled={isSubmitting} className={styles.button}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}

export default MessageForm;
