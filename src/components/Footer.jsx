import { ArrowUp } from "lucide-react";
import { useState } from "react";

export const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative mt-24 bg-card border-t border-border py-20 px-6 overflow-hidden">
      {/* Top Fade Shadow */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-t from-card/95 to-transparent pointer-events-none" />

      {/* Main Footer Grid */}
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              AshishTech
            </h3>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Building beautiful experiences with clean code, thoughtful UI, and
              modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-foreground/90">
              Quick Links
            </h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              {[
                ["Home", "#hero"],
                ["Projects", "#projects"],
                ["Skills", "#skills"],
                ["Contact", "#contact"],
              ].map(([label, link]) => (
                <li key={label}>
                  <a
                    href={link}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-foreground/90">
              Connect
            </h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              {[
                ["GitHub", "https://github.com/ashishthomas"],
                [
                  "LinkedIn",
                  "https://linkedin.com/in/ashish-sunil-thomas-a34334137",
                ],
                ["Email", "mailto:ashishthomas@gmail.com"],
              ].map(([label, link]) => (
                <li key={label}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-foreground/90">
              Subscribe to Newsletter
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get updates on new projects, tutorials, and development insights.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) {
                  alert("Subscribed Successfully!");
                  setEmail("");
                }
              }}
              className="flex items-center gap-3"
            >
              <input
                type="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none text-sm transition"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-primary text-white rounded-lg hover:opacity-90 transition"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 w-full h-px bg-border" />

        {/* Copyright */}
        <p className="text-center text-sm text-muted-foreground mt-6 tracking-wide">
          © {new Date().getFullYear()} AshishTech • All rights reserved.
        </p>
      </div>

      {/* Scroll to Top Button */}
      <a
        href="#hero"
        aria-label="Scroll to top"
        className="fixed bottom-5 right-5 sm:absolute sm:bottom-8 sm:right-8 p-2.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors shadow-md backdrop-blur-sm"
        style={{ zIndex: 60 }}
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
