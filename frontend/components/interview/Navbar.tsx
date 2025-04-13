"use client";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import Image from "next/image";
import { UserDetails } from "@/types/types";
import axios from "axios";

interface ApiResponse {
  user: UserDetails;
}

export default function InterviewNavbar(): React.JSX.Element {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  useEffect(() => {
    setIsMounted(true);

    const fetchUserDetails = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await axios.get<ApiResponse>(
          `${process.env.NEXT_PUBLIC_HTTP_URL}/api/v1/user/get-user-details`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          console.log("User details fetched successfully:", response.data);
          setUserDetails(response.data.user);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  return (
    <header className="pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between bg-foreground dark:bg-card text-card-foreground rounded-full p-4 mb-8 border border-border">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <Image
                src="/logo.svg"
                alt="SkillShift AI Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold font-montserrat text-light-100">
              SKILLSHIFT AI
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
              className="rounded-full text-accent hover:bg-accent hover:text-dark-100 border border-accent"
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

            {userDetails?.name ? (
              <Avatar className="h-10 w-10 cursor-pointer hover:ring-2 hover:ring-accent transition-all">
                <AvatarImage src={userDetails.profilePicture} />
                <AvatarFallback className="bg-accent text-dark-100 font-bold font-montserrat">
                  {getInitials(userDetails.name)}
                </AvatarFallback>
              </Avatar>
            ) : (
              <Avatar className="h-10 w-10 cursor-pointer hover:ring-2 hover:ring-accent transition-all">
                <AvatarFallback className="bg-accent text-dark-100 font-bold font-montserrat">
                  U
                </AvatarFallback>
              </Avatar>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
