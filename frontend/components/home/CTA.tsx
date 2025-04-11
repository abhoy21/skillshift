import { Zap } from "lucide-react";
import { Button } from "../ui/button";

export default function CTA(): React.JSX.Element {
  return (
    <section className="px-8 mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-[40px] bg-black p-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
            READY TO ACE YOUR NEXT INTERVIEW?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto italic">
            Start your free trial and experience AI-powered mock interviews with
            real-time feedback and personalized coaching.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-[#e4ff3f] hover:bg-[#d4f02f] text-black sm:text-lg p-8 font-bold rounded-full transition-colors">
              Start Free Trial
            </Button>
            <Button className="bg-transparent hover:bg-white/10 border-2 border-white text-white sm:text-lg font-bold p-7 rounded-full transition-colors">
              See How It Works
            </Button>
          </div>
          <div className="mt-12 flex justify-center">
            <div className="w-12 h-12 rounded-full bg-[#e4ff3f] flex items-center justify-center animate-bounce">
              <Zap className="w-6 h-6 text-black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
