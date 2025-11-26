import PropTypes from "prop-types";
import { Send } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useToast } from "@/hooks/use-toast";
import clsx from "clsx";

export const ContactForm = () => {
  const { toast } = useToast();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Your name is required"),
    email: Yup.string()
      .email("Enter a valid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    const mailto = `mailto:ashishthomas13@zohomail.in?subject=Contact from ${
      values.name
    }&body=${encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`
    )}`;

    globalThis.location.href = mailto;

    setTimeout(() => {
      toast({
        title: "Email client opened!",
        description: "Please send your message from your email client.",
      });
      setSubmitting(false);
      resetForm();
    }, 800);
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6">
          <FormField label="Your Name" name="name" type="text" />

          <FormField label="Your Email" name="email" type="email" />

          <FormTextarea label="Your Message" name="message" rows="5" />

          <button
            type="submit"
            disabled={isSubmitting}
            className={clsx(
              "cosmic-button w-full flex items-center justify-center gap-2",
              isSubmitting && "opacity-70 cursor-not-allowed"
            )}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <Send size={16} />
          </button>
        </Form>
      )}
    </Formik>
  );
};

/* -------------------- Reusable Input Component -------------------- */

const FormField = ({ label, name, ...props }) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={name} className="text-sm font-medium">
      {label}
    </label>

    <Field
      id={name}
      name={name}
      {...props}
      className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground 
                 focus:ring-2 focus:ring-primary focus:border-primary 
                 dark:bg-neutral-900 dark:border-neutral-700 dark:text-gray-200 outline-none transition"
    />

    <ErrorMessage
      name={name}
      component="p"
      className="text-sm text-red-500 dark:text-red-400"
    />
  </div>
);

/* -------------------- Reusable Textarea Component -------------------- */

const FormTextarea = ({ label, name, ...props }) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={name} className="text-sm font-medium">
      {label}
    </label>

    <Field
      as="textarea"
      id={name}
      name={name}
      {...props}
      className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground 
                 focus:ring-2 focus:ring-primary focus:border-primary resize-none 
                 dark:bg-neutral-900 dark:border-neutral-700 dark:text-gray-200 outline-none transition"
    />

    <ErrorMessage
      name={name}
      component="p"
      className="text-sm text-red-500 dark:text-red-400"
    />
  </div>
);

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
FormTextarea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
