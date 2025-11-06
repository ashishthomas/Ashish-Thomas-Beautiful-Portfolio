import { Send } from "lucide-react";
import { useState } from "react";
import PropTypes from "prop-types";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, message } = e.target;

    const mailto = `mailto:ashishthomas13@zohomail.in?subject=Contact from ${
      name.value
    }&body=${encodeURIComponent(
      `Name: ${name.value}\nEmail: ${email.value}\n\nMessage:\n${message.value}`
    )}`;

    globalThis.location.href = mailto;

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Email client opened!",
        description: "Please send your message from your email client.",
      });
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input label="Your Name" name="name" required />
      <Input label="Your Email" name="email" type="email" required />
      <Textarea label="Your Message" name="message" required />

      <button
        type="submit"
        disabled={isSubmitting}
        className="cosmic-button w-full flex items-center justify-center gap-2"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        <Send size={16} />
      </button>
    </form>
  );
};

const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <input
      {...props}
      className="w-full px-4 py-3 rounded-md border border-input bg-background"
    />
  </div>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
};

const Textarea = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <textarea
      {...props}
      className="w-full px-4 py-3 rounded-md border border-input bg-background resize-none"
    />
  </div>
);

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
};
