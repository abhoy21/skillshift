import {
  Bot,
  BrainCircuit,
  MessageSquare,
  Mic2,
  Stars,
  Zap,
} from "lucide-react";
import React from "react";

export default function Experience(): React.JSX.Element {
  return (
    <section className="px-4 sm:px-8 mb-12 md:mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 md:gap-12">
          {/* Heading - responsive sizing */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-[10rem] tracking-tighter font-montserrat font-bold text-foreground dark:text-light-100 leading-tight">
              MASTER YOUR INTERVIEWS WITH AI{" "}
              <span className="text-accent">+</span>
            </h2>
          </div>

          {/* Content area - stacked on mobile, row on desktop */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 md:gap-12 lg:gap-16 w-full">
            {/* Icons - centered on mobile, left-aligned on desktop */}
            <div className="flex flex-col gap-6 md:gap-8 w-full lg:w-auto">
              <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 w-full">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-border flex items-center justify-center bg-accent">
                  <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-dark-100" />
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-border flex items-center justify-center bg-accent">
                  <BrainCircuit className="w-6 h-6 sm:w-8 sm:h-8 text-dark-100" />
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-border flex items-center justify-center bg-accent">
                  <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-dark-100" />
                </div>
              </div>

              <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 w-full">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-border flex items-center justify-center bg-accent">
                  <Mic2 className="w-6 h-6 sm:w-8 sm:h-8 text-dark-100" />
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-border flex items-center justify-center bg-accent">
                  <Stars className="w-6 h-6 sm:w-8 sm:h-8 text-dark-100" />
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-border flex items-center justify-center bg-accent">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-dark-100" />
                </div>
              </div>
            </div>

            {/* Text - responsive sizing and alignment */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground flex-1 max-w-[56rem] text-center lg:text-justify">
              Our AI-driven platform revolutionizes interview preparation by
              providing realistic mock interviews with instant, intelligent
              feedback. Designed to help you master both technical questions and
              soft skills, we offer personalized preparation tailored to your
              target roles and industries. The system analyzes your responses,
              tone, and body language to give comprehensive insights, helping
              you identify strengths and areas for improvement. With adaptive
              difficulty levels and industry-specific question banks,
              you&apos;ll gain the competitive edge needed to land your dream
              job with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
