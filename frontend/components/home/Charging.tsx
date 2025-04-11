import Image from "next/image";

export default function Charging(): React.JSX.Element {
  return (
    <section className="px-8 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-[40px] bg-foreground dark:bg-card p-12 border border-border relative overflow-hidden">
          {/* Floating Next.js logo box */}
          <div className="absolute right-0 rotate-30 top-1/2 -translate-y-1/2 w-26 h-26 bg-accent/10 dark:bg-accent/20 backdrop-blur-sm rounded-xl border border-accent/30 flex items-center justify-center p-4 z-10 ">
            <Image
              src="/logo.svg"
              alt="Next.js Logo"
              width={80}
              height={80}
              className="object-contain animate-bounce"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-12 relative z-0">
            <div className="flex-1">
              <p className="text-xl text-muted-foreground dark:text-light-100/80 text-justify max-w-xl mb-8">
                We&apos;re revolutionizing interview preparation with AI-powered
                mock interviews. Our platform provides real-time feedback on
                your responses, communication skills, and body language, helping
                you identify strengths and areas for improvement. Get
                personalized coaching tailored to your target companies and
                roles.
              </p>
            </div>
            <div className="flex-1">
              <h2 className="text-5xl font-bold text-background dark:text-light-100">
                MASTER YOUR
                <br />
                INTERVIEW SKILLS
                <br />
                <span className="text-accent">WITH AI</span> COACHING
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
