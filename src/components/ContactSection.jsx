import { ContactInfo } from "./contactComponents/ContactInfo";
import { ContactSocials } from "./contactComponents/ContactSocials";
import { ContactForm } from "./contactComponents/ContactForm";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-8 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Contact Information
            </h3>

            <ContactInfo />
            <div className="pt-8">
              <h4 className="text-2xl font-semibold mb-6 text-center md:text-left">
                Connect With Me
              </h4>
              <ContactSocials />
            </div>
          </div>

          <div className="bg-card p-4 sm:p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Send a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
