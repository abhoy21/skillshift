"use client";
import { Moon, Sun, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Header(): React.JSX.Element {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#solutions", label: "Our Solutions" },
    { href: "#sustainability", label: "Sustainability" },
    { href: "#benefits", label: "Benefits" },
    { href: "#about", label: "About Us" },
  ];

  return (
    <header className="pt-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-2">
            <Button
              className="md:hidden p-2 rounded-full hover:bg-foreground/10 dark:hover:bg-card/10"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full text-accent hover:bg-accent hover:text-dark-100 border border-accent"
              aria-label="Toggle theme"
            >
              {isMounted ? (
                theme === "dark" ? (
                  <Sun className="w-6 h-6" />
                ) : (
                  <Moon className="w-6 h-6" />
                )
              ) : (
                <Moon className="w-6 h-6" />
              )}
            </Button>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-[11rem] font-extrabold text-foreground mb-2 md:mb-8 tracking-tight font-montserrat text-center flex-1 md:text-left">
            SKILLSHIFT AI
          </h1>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-foreground dark:bg-card text-card-foreground rounded-2xl p-6 mb-8 border border-border flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-accent transition-colors text-lg w-full text-center py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              className="px-6 py-2 rounded-full bg-accent text-dark-100 font-bold hover:bg-accent/90 transition-colors mt-4"
              onClick={() => router.push("/signUp")}
            >
              Dive In
            </Button>
          </div>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-between text-card-foreground rounded-fubg-foreground dark:bg-card ll p-4 mb-8 border border-border">
          <Button
            onClick={toggleTheme}
            variant="ghost"
            size="icon"
            className="rounded-full text-accent hover:bg-accent hover:text-dark-100 border border-accent"
            aria-label="Toggle theme"
          >
            {isMounted ? (
              theme === "dark" ? (
                <Sun className="w-8 h-8" />
              ) : (
                <Moon className="w-8 h-8" />
              )
            ) : (
              <Moon className="w-8 h-8" />
            )}
          </Button>
          <div className="flex items-center gap-4 lg:gap-8 text-light-100">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-accent transition-colors text-sm lg:text-base"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Button
            onClick={() => router.push("/signUp")}
            className="px-6 py-2 rounded-full bg-accent text-dark-100 font-bold hover:bg-accent/90 transition-colors cursor-pointer"
          >
            Dive In
          </Button>
        </nav>
      </div>
    </header>
  );
}
