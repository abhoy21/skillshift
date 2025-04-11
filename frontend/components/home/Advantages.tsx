export default function Advantages(): React.JSX.Element {
  return (
    <section className="px-8 mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <h2 className="text-4xl sm:text-5xl lg:text-[8rem] font-bold font-montserrat text-black tracking-tighter mb-4">
              MASTER INTERVIEWS WITH AI-POWERED COACHING{" "}
              <span className="text-[#e4ff3f]">+</span>
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-xl text-gray-600 mb-8 text-justify">
              Say goodbye to interview anxiety. Our AI platform provides
              real-time feedback and personalized coaching to help you land your
              dream job with confidence.
            </p>
            <div className="space-y-4">
              <div className="rounded-3xl bg-[#e4ff3f] p-6">
                <h3 className="text-2xl font-bold">REAL-TIME FEEDBACK</h3>
              </div>
              <div className="rounded-3xl bg-black p-6">
                <h3 className="text-2xl font-bold text-white">
                  PERSONALIZED COACHING
                </h3>
              </div>
              <div className="rounded-3xl bg-black p-6">
                <h3 className="text-2xl font-bold text-white">
                  INDUSTRY-SPECIFIC QUESTIONS
                </h3>
              </div>
              <div className="rounded-3xl bg-black p-6">
                <h3 className="text-2xl font-bold text-white">
                  PERFORMANCE ANALYTICS
                </h3>
              </div>
              <div className="rounded-3xl bg-black p-6">
                <h3 className="text-2xl font-bold text-white">24/7 PRACTICE</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
