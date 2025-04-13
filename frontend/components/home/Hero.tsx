import { Zap } from "lucide-react";
import Image from "next/image";

export default function Hero(): React.JSX.Element {
  return (
    <section className="mb-12 md:mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl md:rounded-[40px] bg-foreground dark:bg-card overflow-hidden relative h-auto md:h-[400px] flex flex-col md:flex-row justify-end border border-border">
          {/* Content Section - appears first on mobile */}
          <div className="p-6 md:p-0 md:absolute left-20 md:top-1/2 md:-translate-y-1/2 z-10 w-full md:max-w-[50rem] order-1 md:order-none">
            {/* Zap icon - positioned differently on mobile vs desktop */}
            <div className="md:absolute -left-16 -top-8 md:top-1/2 md:-translate-y-1/2 w-16 h-16 rounded-full bg-accent flex items-center justify-center z-20 animate-pulse mb-4 md:mb-0">
              <Zap className="w-8 h-8 text-dark-100" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-background dark:text-light-100 mb-4 leading-tight">
              <span className="block">Ace Your Interviews</span>
              <span className="block">
                with <span className="text-accent">AI-Powered</span> Coaching
              </span>
            </h1>

            <p className="text-background/80 dark:text-light-100/80 mb-6 text-base sm:text-lg italic md:max-w-xl">
              Get personalized mock interviews, real-time feedback, and
              data-driven insights to land your dream job.
            </p>
          </div>

          {/* Gradient overlay - only on desktop */}
          <div className="hidden md:block absolute left-40 inset-0 z-10 bg-gradient-to-r from-transparent via-foreground/75 dark:via-dark-300/75 to-foreground/25 dark:to-dark-300/25 w-full" />

          {/* Image Section - appears second on mobile */}
          <div className="relative w-full h-64 md:h-full md:w-auto order-2 md:order-none">
            <Image
              width={1024}
              height={1024}
              src="/hero.jpeg"
              alt="AI-powered interview coaching"
              className="h-full w-full md:w-auto object-cover object-center md:object-right"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
