import InterviewCTA from "@/components/interview/InterviewCTA";
import InterviewList from "@/components/interview/InterviewList";
import InterviewNavbar from "@/components/interview/Navbar";
import Redirect from "@/components/redirect";

export default function InterviewPage(): React.JSX.Element {
  return (
    <div className="min-h-screen pattern">
      <Redirect />
      <InterviewNavbar />
      <InterviewCTA />
      <InterviewList />
    </div>
  );
}
