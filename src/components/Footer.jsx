import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground text-center w-full">
        {" "}
        &copy; {new Date().getFullYear()} AshishTech - All rights reserved.
      </p>
      <a
        href="#hero"
        className="fixed bottom-4 right-4 sm:absolute sm:bottom-auto sm:right-8 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        style={{ zIndex: 60 }}
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
