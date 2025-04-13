import Image from "next/image";

export default function Charging(): React.JSX.Element {
  return (
    <section className="mb-12 md:mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl md:rounded-[40px] bg-foreground dark:bg-card p-6 sm:p-8 md:p-12 border border-border relative overflow-hidden">
          {/* Floating Next.js logo box - responsive positioning and sizing */}
          <div className="absolute right-2 md:right-0 rotate-30 top-1/3 md:top-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-26 md:h-26 bg-accent/10 dark:bg-accent/20 backdrop-blur-sm rounded-lg md:rounded-xl border border-accent/30 flex items-center justify-center p-2 sm:p-3 md:p-4 z-10">
            <Image
              src="/logo.svg"
              alt="Next.js Logo"
              width={80}
              height={80}
              className="object-contain w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 animate-bounce"
            />
          </div>

          {/* Content area - stacked on mobile, row on desktop */}
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 relative z-0">
            {/* Text section - order changes on mobile */}
            <div className="flex-1 order-2 md:order-1">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-light-100/80 text-justify max-w-xl mx-auto md:mx-0 mb-6 sm:mb-8">
                We&apos;re revolutionizing interview preparation with AI-powered
                mock interviews. Our platform provides real-time feedback on
                your responses, communication skills, and body language, helping
                you identify strengths and areas for improvement. Get
                personalized coaching tailored to your target companies and
                roles.
              </p>
            </div>

            {/* Heading section - comes first on mobile */}
            <div className="flex-1 order-1 md:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-background dark:text-light-100 text-left">
                MASTER YOUR
                <br className="hidden sm:block" />
                INTERVIEW SKILLS
                <br className="hidden sm:block" />
                <span className="text-accent"> WITH AI</span> COACHING
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
