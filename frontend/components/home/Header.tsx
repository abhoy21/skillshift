"use client";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

export default function Header(): React.JSX.Element {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="pt-8 px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-5xl lg:text-[11rem] font-extrabold text-foreground mb-8 tracking-tight font-montserrat">
          SKILLSHIFT AI
        </h1>
        <nav className="flex items-center justify-between bg-foreground dark:bg-card text-card-foreground rounded-full p-4 mb-8 border border-border">
          <Button
            onClick={toggleTheme}
            variant="ghost"
            size="icon"
            className="rounded-full text-accent hover:bg-accent hover:text-dark-100 border border-accent"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-8 h-8" />
            ) : (
              <Moon className="w-8 h-8" />
            )}
          </Button>
          <div className="flex items-center gap-8 text-light-100">
            <Link href="#home" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link
              href="#solutions"
              className="hover:text-accent transition-colors"
            >
              Our Solutions
            </Link>
            <Link
              href="#sustainability"
              className="hover:text-accent transition-colors"
            >
              Sustainability
            </Link>
            <Link
              href="#benefits"
              className="hover:text-accent transition-colors"
            >
              Benefits
            </Link>
            <Link href="#about" className="hover:text-accent transition-colors">
              About Us
            </Link>
          </div>
          <Button className="px-6 py-2 rounded-full bg-accent text-dark-100 font-bold hover:bg-accent/90 transition-colors">
            Dive In
          </Button>
        </nav>
      </div>
    </header>
  );
}
