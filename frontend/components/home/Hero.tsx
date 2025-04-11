import { Zap } from "lucide-react";
import Image from "next/image";

export default function Hero(): React.JSX.Element {
  return (
    <section className="px-8 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-[40px] bg-foreground dark:bg-card overflow-hidden relative h-[400px] flex justify-end border border-border">
          <div className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-accent flex items-center justify-center z-20 animate-pulse">
            <Zap className="w-8 h-8 text-dark-100" />
          </div>
          <div className="absolute left-32 top-32 z-10 max-w-[50rem]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-background dark:text-light-100 mb-4 leading-tight">
              <span className="block">Ace Your Interviews</span>
              <span className="block">
                with <span className="text-accent">AI-Powered</span> Coaching
              </span>
            </h1>

            <p className="text-background/80 dark:text-light-100/80 mb-6 text-lg italic">
              Get personalized mock interviews, real-time feedback, and <br />
              data-driven insights to land your dream job.
            </p>
          </div>

          <div className="absolute left-60 inset-0 bg-gradient-to-r from-transparent via-foreground/75 dark:via-dark-300/75 to-foreground/25 dark:to-dark-300/25 w-full" />

          <Image
            width={1024}
            height={1024}
            src="/hero.jpeg"
            alt="robot"
            className="h-full w-auto object-cover object-right"
            priority
          />
        </div>
      </div>
    </section>
  );
}
