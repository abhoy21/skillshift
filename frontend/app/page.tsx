import LandingPage from "@/components/home/LandingPage";
import Redirect from "@/components/redirect";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Redirect />
      <LandingPage />
    </div>
  );
}
