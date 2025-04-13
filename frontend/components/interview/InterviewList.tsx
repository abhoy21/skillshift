import { dummyInterviews } from "@/constants";
import InterviewCard from "./InterviewCard";

export default function InterviewList(): React.JSX.Element {
  return (
    <div className="root-layout">
      <section className="flex flex-col gap-6 mt-8">
        <h2 className="text-lg sm:text-3xl lg:text-5xl tracking-tighter font-montserrat font-bold text-foreground dark:text-light-100 leading-tight">
          Your Interviews <span className="text-accent">+</span>
        </h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard key={interview.id} {...interview} />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard key={interview.id} {...interview} />
          ))}
        </div>
      </section>
    </div>
  );
}
