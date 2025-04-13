export default function Advantages(): React.JSX.Element {
  return (
    <section className="mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <h2 className="text-4xl sm:text-5xl lg:text-[6rem] font-bold font-montserrat text-foreground dark:text-light-100 tracking-tighter mb-4 leading-[1.1] lg:leading-[1.225]">
              MASTER INTERVIEWS WITH AI-POWERED COACHING{" "}
              <span className="text-accent">+</span>
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-xl text-muted-foreground dark:text-light-100/80 mb-8 text-justify">
              Say goodbye to interview anxiety. Our AI platform provides
              real-time feedback and personalized coaching to help you land your
              dream job with confidence.
            </p>
            <div className="space-y-4">
              <div className="rounded-3xl bg-accent p-6">
                <h3 className="text-2xl font-bold text-dark-100">
                  REAL-TIME FEEDBACK
                </h3>
              </div>
              <div className="rounded-3xl bg-foreground dark:bg-dark-200 p-6 border border-border">
                <h3 className="text-2xl font-bold text-background dark:text-light-100">
                  PERSONALIZED COACHING
                </h3>
              </div>
              <div className="rounded-3xl bg-foreground dark:bg-dark-200 p-6 border border-border">
                <h3 className="text-2xl font-bold text-background dark:text-light-100">
                  INDUSTRY-SPECIFIC QUESTIONS
                </h3>
              </div>
              <div className="rounded-3xl bg-foreground dark:bg-dark-200 p-6 border border-border">
                <h3 className="text-2xl font-bold text-background dark:text-light-100">
                  PERFORMANCE ANALYTICS
                </h3>
              </div>
              <div className="rounded-3xl bg-foreground dark:bg-dark-200 p-6 border border-border">
                <h3 className="text-2xl font-bold text-background dark:text-light-100">
                  24/7 PRACTICE
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
