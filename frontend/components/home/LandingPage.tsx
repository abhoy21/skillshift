import Advantages from "./Advantages";
import Charging from "./Charging";
import CTA from "./CTA";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

export default function LandingPage(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-background dark:pattern">
      <Header />
      <Hero />
      <Experience />
      <Charging />
      <Advantages />
      <CTA />
      <Footer />
    </main>
  );
}
