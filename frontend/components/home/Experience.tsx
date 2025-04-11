import { Zap } from "lucide-react";
import React from "react";

export default function Experience(): React.JSX.Element {
  return (
    <section className="px-8 mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-12">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-5xl lg:text-[10rem] tracking-tighter font-montserrat font-bold text-black leading-tight">
              MASTER YOUR INTERVIEWS WITH AI{" "}
              <span className="text-[#e4ff3f]">+</span>
            </h2>
          </div>
          <div className="flex items-start gap-16">
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center">
                <Zap className="w-8 h-8" />
              </div>
              <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center">
                <Zap className="w-8 h-8" />
              </div>
              <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center">
                <Zap className="w-8 h-8" />
              </div>
            </div>
            <p className="text-xl text-gray-600 max-w-md text-justify">
              An AI-driven platform designed to help you master mock interviews
              with smart feedback and personalized preparation. Our system
              analyzes your responses to give you the competitive edge for your
              dream job.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
