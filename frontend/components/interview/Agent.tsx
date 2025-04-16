"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { UserDetails } from "@/types/types";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getInitials } from "@/lib/utils";

interface ApiResponse {
  user: UserDetails;
}

enum CallStatus {
  INACTIVE = "INACTIVE",
  CONNECTING = "CONNECTING",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
}

export default function Agent(): React.JSX.Element {
  const isSpeaking = true;
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  useEffect(() => {
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
  return (
    <>
      <div className="call-view">
        <div className="card-interviewer">
          <div className="avatar">
            <Image
              src="/interviewer.png"
              alt="vapi-agent"
              fill
              className="object-cover rounded-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {isSpeaking && <span className="animate-speak" />}
          </div>
          <h3>AI Interviewer</h3>
        </div>

        <div className="card-border">
          <div className="card-content">
            <Avatar className="h-40 w-40 cursor-pointer hover:ring-2 hover:ring-accent transition-all">
              <AvatarImage src={userDetails?.profilePicture} />
              <AvatarFallback className="bg-accent text-dark-100 font-bold font-montserrat text-5xl">
                {getInitials(userDetails?.name || "")}
              </AvatarFallback>
            </Avatar>
            <h3>{userDetails?.name}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
