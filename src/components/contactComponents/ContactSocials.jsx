import { X, Code2 } from "lucide-react";

export const ContactSocials = () => (
  <div className="flex space-x-4 justify-center">
    <a
      href="https://www.linkedin.com/in/ashish-sunil-thomas-a34334137/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <LinkedInIcon />
    </a>

    <a
      href="https://x.com/ast_developer"
      target="_blank"
      rel="noopener noreferrer"
    >
      <X />
    </a>

    <a
      href="https://dev.to/ashish_sunilthomas_1"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Code2 />
    </a>
  </div>
);

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="h-6 w-6 text-primary"
  >
    <path d="..." />
  </svg>
);
