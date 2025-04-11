import { Zap } from "lucide-react";
import { Button } from "../ui/button";

export default function CTA(): React.JSX.Element {
  return (
    <section className="px-8 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-[40px] bg-foreground dark:bg-card p-12 text-center border border-border">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-background dark:text-light-100 mb-8">
            READY TO ACE YOUR NEXT INTERVIEW?
          </h2>
          <p className="text-xl text-muted-foreground dark:text-light-100/80 mb-8 max-w-2xl mx-auto italic">
            Start your free trial and experience AI-powered mock interviews with
            real-time feedback and personalized coaching.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-accent hover:bg-accent/90 text-dark-100 sm:text-lg p-8 font-bold rounded-full transition-colors">
              Start Free Trial
            </Button>
            <Button className="bg-transparent hover:bg-accent/10 dark:hover:bg-accent/20 border-2 border-accent text-background dark:text-light-100 sm:text-lg font-bold p-7 rounded-full transition-colors">
              See How It Works
            </Button>
          </div>
          <div className="mt-12 flex justify-center">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center animate-bounce">
              <Zap className="w-6 h-6 text-dark-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
