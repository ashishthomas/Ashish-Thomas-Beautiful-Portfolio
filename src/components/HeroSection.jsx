import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-24"
    >
      <div className="container max-w-4xl mx-auto text-center z-10 space-y-8 sm:space-y-12">
        <div className="space-y-6">
          {/* ✅ Animated Profile Image */}
          <div className="flex justify-center">
            <img
              src="/projects/ashish_professional.png"
              alt="Ashish Sunil Thomas"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40
               rounded-full border-4 border-primary shadow-xl object-cover
               opacity-0 animate-fade-in scale-90 hover:scale-100 transition-all duration-500 ease-in-out"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-center">
            <span className="opacity-0 animate-fade-in"> Hi, I&apos;m </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Ashish Sunil
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Thomas
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 text-center">
            I create stellar web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex justify-center">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
