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
    <section className="px-8 mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-12">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-5xl lg:text-[10rem] tracking-tighter font-montserrat font-bold text-foreground dark:text-light-100 leading-tight">
              MASTER YOUR INTERVIEWS WITH AI{" "}
              <span className="text-accent">+</span>
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row items-start gap-16 w-full">
            <div className="flex flex-col gap-8 w-full lg:w-auto">
              <div className="flex justify-center lg:justify-start gap-4 w-full">
                <div className="w-16 h-16 rounded-full border-2 border-border flex items-center justify-center bg-accent">
                  <Bot className="w-8 h-8 text-dark-100" />
                </div>
                <div className="w-16 h-16 rounded-full border-2 border-border flex items-center justify-center bg-accent">
                  <BrainCircuit className="w-8 h-8 text-dark-100" />
                </div>
                <div className="w-16 h-16 rounded-full border-2 border-border flex items-center justify-center bg-accent">
                  <MessageSquare className="w-8 h-8 text-dark-100" />
                </div>
              </div>

              <div className="flex justify-center lg:justify-start gap-4 w-full">
                <div className="w-16 h-16 rounded-full border-2 border-border flex items-center justify-center bg-accent">
                  <Mic2 className="w-8 h-8 text-dark-100" />
                </div>
                <div className="w-16 h-16 rounded-full border-2 border-border flex items-center justify-center bg-accent">
                  <Stars className="w-8 h-8 text-dark-100" />
                </div>
                <div className="w-16 h-16 rounded-full border-2 border-border flex items-center justify-center bg-accent">
                  <Zap className="w-8 h-8 text-dark-100" />
                </div>
              </div>
            </div>
            <p className="text-xl text-muted-foreground flex-1 max-w-[56rem] text-justify">
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
