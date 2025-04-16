import Agent from "@/components/interview/Agent";
import InterviewNavbar from "@/components/interview/Navbar";

export default function CreateInterviewPage(): React.JSX.Element {
  return (
    <div className="min-h-screen pattern root-layout">
      <InterviewNavbar />
      <h1>Create Interview</h1>

      <Agent />
    </div>
  );
}
