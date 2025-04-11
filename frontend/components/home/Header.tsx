import { Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Header(): React.JSX.Element {
  return (
    <header className="pt-8 px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-5xl lg:text-[11rem] font-extrabold text-black mb-8 tracking-tight font-montserrat">
          SKILLSHIFT AI
        </h1>
        <nav className="flex items-center justify-between bg-black rounded-full p-4 mb-8">
          <div className="w-10 h-10 rounded-full bg-black border-2 border-white flex items-center justify-center">
            <Zap className="w-6 h-6 text-[#e4ff3f]" />
          </div>
          <div className="flex items-center gap-8 text-white">
            <Link href="#home">Home</Link>
            <Link href="#solutions">Our Solutions</Link>
            <Link href="#sustainability">Sustainability</Link>
            <Link href="#benefits">Benefits</Link>
            <Link href="#about">About Us</Link>
          </div>
          <Button className=" px-6 py-2 rounded-full bg-[#e4ff3f] text-black font-bold hover:bg-[#f0ff75] transition-colors">
            Dive In
          </Button>
        </nav>
      </div>
    </header>
  );
}
