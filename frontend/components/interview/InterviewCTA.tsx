import Image from "next/image";
import { Button } from "../ui/button";

export default function InterviewCTA(): React.JSX.Element {
  return (
    <section className="mb-12 md:mb-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl md:rounded-[40px] bg-foreground dark:bg-card overflow-hidden relative h-auto md:h-[400px] flex flex-col md:flex-row justify-end border border-border transition-all duration-300 hover:shadow-xl dark:hover:shadow-lg dark:hover:shadow-accent/20">
          <div className="p-8 md:p-12 lg:p-16 md:absolute left-0 md:top-1/2 md:-translate-y-1/2 z-10 w-full md:max-w-[50rem] order-1 md:order-none">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-background dark:text-light-100 leading-tight tracking-tight">
                <span className="block pb-2 transform transition-all duration-500 hover:translate-x-1">
                  Master Your Interviews
                </span>
                <span className="block pb-2 transform transition-all duration-500 hover:translate-x-1">
                  with{" "}
                  <span className="text-accent hover:text-accent/80 transition-colors duration-300">
                    AI-Powered
                  </span>{" "}
                  Interviewer
                </span>
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button className="p-8 rounded-full bg-accent text-dark-100 font-bold  transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:bg-accent/75 cursor-pointer text-lg flex items-center justify-center gap-2">
                <span>Start Free Mock Interview</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Button>
            </div>
          </div>

          <div className="hidden md:block absolute left-40 inset-0 z-10 bg-gradient-to-r from-transparent via-foreground/75 dark:via-dark-300/75 to-foreground/25 dark:to-dark-300/25 w-full transition-opacity duration-500 hover:opacity-90" />

          <div className="relative w-full h-64 sm:h-80 md:h-full md:w-[50%] lg:w-[55%] order-2 md:order-none overflow-hidden">
            <Image
              width={1024}
              height={1024}
              src="/hero.jpeg"
              alt="AI-powered mock interview platform"
              className="h-full w-full object-contain object-center md:object-right transition-transform duration-700 hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
