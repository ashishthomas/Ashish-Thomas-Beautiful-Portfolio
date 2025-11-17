import { ArrowUp } from "lucide-react";
import { useState } from "react";

export const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative mt-20 bg-card border-t border-border pt-20 pb-12 px-6 overflow-hidden">
      {/* Bottom Fade Effect */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-t from-card to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row justify-between gap-16 relative z-10">
        {/* Brand Section */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold">AshishTech</h3>
          <p className="text-sm text-muted-foreground mt-2 max-w-sm">
            Crafting fast, modern, and user-centric applications with React,
            Node.js, and the latest web technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h4 className="font-medium mb-3 text-lg">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#hero" className="hover:text-primary transition">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-primary transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-primary transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="flex-1">
          <h4 className="font-medium mb-3 text-lg">Connect</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href="https://github.com/ashishthomas"
                target="_blank"
                className="hover:text-primary transition"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/ashish-sunil-thomas-a34334137"
                target="_blank"
                className="hover:text-primary transition"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:ashishthomas@gmail.com"
                className="hover:text-primary transition"
              >
                Email
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex-1 max-w-md">
          <h4 className="font-medium mb-3 text-lg">Subscribe to Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Stay updated with project launches, articles, and development
            insights.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email.trim()) {
                alert("Subscribed Successfully!");
                setEmail("");
              }
            }}
            className="flex gap-2"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-background border border-border text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 w-full h-px bg-border" />

      {/* Copyright */}
      <p className="text-center text-sm text-muted-foreground mt-6">
        &copy; {new Date().getFullYear()} AshishTech — All rights reserved.
      </p>

      {/* Scroll to Top Button */}
      <a
        href="#hero"
        aria-label="Scroll to top"
        className="fixed bottom-4 right-4 sm:absolute sm:bottom-6 sm:right-6 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors shadow-sm"
        style={{ zIndex: 60 }}
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
